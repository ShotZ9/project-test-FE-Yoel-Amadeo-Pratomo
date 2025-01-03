import React, { useState, useEffect } from "react";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Ideas.css";
import sss from "./5650390.jpg";

const Ideas = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sort, setSort] = useState("published_at");
  const [totalPosts, setTotalPosts] = useState(0); // State for total number of posts
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null);
  const totalPages = Math.ceil(totalPosts / pageSize);
  const [imageError, setImageError] = useState({});

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, page - 2);
    let endPage = Math.min(totalPages, page + 2);

    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages
    } else if (page <= 3) {
      startPage = 1
      endPage = 5
    } else if (page >= totalPages - 2) {
      startPage = totalPages - 4
      endPage = totalPages
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={page === i ? "active" : ""}
          disabled={page === i}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${page}&page[size]=${pageSize}&append[]=small_image&append[]=medium_image&sort=${sort}`
        );
        setPosts(response.data.data);
        setTotalPosts(response.data.meta.total);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('There was an error fetching the data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, pageSize, sort]);

  if (loading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const firstItemOnPage = (page - 1) * pageSize + 1;
  const lastItemOnPage = Math.min(page * pageSize, totalPosts);

  const formatDate = (dateString) => {
    if (!dateString) {
      return "No Date Available";
    }
    try {
      const formattedDate = new Date(dateString).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
  
      const dateParts = formattedDate.split(" ");
      if (dateParts.length === 3) {
        const day = dateParts[0];
        const month = dateParts[1].toUpperCase();
        const year = dateParts[2];
        return `${day} ${month} ${year}`;
      } else {
          console.error("Unexpected date format:", formattedDate);
          return "Invalid Date Format";
      }
    } catch (e) {
      console.error("Error formatting date:", e);
      return "Invalid Date";
    }
  };

  const handleImageError = (postId) => {
    setImageError(prevState => ({ ...prevState, [postId]: true }))
  }

  return (
    <div className="list-posts">
      <div className="top-list-posts">
        <div className="list-info-container">
          <div className="showing-info">
            {totalPosts > 0 ? `Showing ${firstItemOnPage} - ${lastItemOnPage} of ${totalPosts}` : "No posts found"}
          </div>
        </div>

        <div className="controls">
          <div className="control-item">
            Show per page:
            <select
              onChange={(e) => setPageSize(Number(e.target.value))}
              value={pageSize}
              className="rounded-select"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
          <div className="control-item">
            Sort by:
            <select onChange={(e) => setSort(e.target.value)} value={sort} className="rounded-select">
              <option value="-published_at">Newest</option>
              <option value="published_at">Oldest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Posts container */}
      <div className="posts-container">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <div className="post-thumbnail-wrapper">
              {imageError[post.id] ? (
                <img src={sss} alt=""></img>
              ) : (
                <LazyLoadImage
                  src={post.small_image || post.medium_image}
                  alt={post.title}
                  onError={() => handleImageError(post.id)}
                />
              )}
            </div>
            <h2>{formatDate(post.published_at)}</h2>
            <h3 className="post-title">{post.title}</h3>
          </div>
        ))}
      </div>

      {/* Pagination (adjust based on actual number of pages) */}
      <div className="pagination">
        <button onClick={() => handlePageChange(1)} disabled={page === 1}>
          {"<<"} {/* First page */}
        </button>
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          {"<"} {/* Previous page */}
        </button>
        {renderPageNumbers()}
        <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
          {">"} {/* Next page */}
        </button>
        <button onClick={() => handlePageChange(totalPages)} disabled={page === totalPages}>
          {">>"} {/* Last page */}
        </button>
      </div>
    </div>
  );
};

export default Ideas;
