# React Ideas Page

This project is a React-based web page that displays a list of "ideas" fetched from a remote API. It features pagination, sorting, lazy loading of images, and persists user preferences (page, sort order, items per page) across page refreshes.

## Features

*   **Data Fetching:** Fetches idea data from the `https://suitmedia-backend.suitdev.com/api/ideas` API.
*   **Pagination:** Implements pagination to handle large datasets, allowing users to navigate through pages of ideas.
*   **Sorting:** Allows users to sort ideas by "Newest" or "Oldest" based on the `published_at` date.
*   **Show Per Page:** Users can select the number of items to display per page (10, 20, or 50).
*   **State Persistence:** Maintains user preferences for page, sort order, and items per page using `localStorage`, so these settings are preserved across page refreshes.
*   **Lazy Loading:** Uses `react-lazy-load-image-component` for efficient image loading, improving performance by loading images only when they are about to become visible in the viewport.
*   **Image Error Handling:** Includes error handling for images that fail to load, displaying a placeholder instead.
*   **Consistent Card Layout:** Ensures all idea cards have consistent dimensions, regardless of the original image sizes, using CSS `object-fit`.
*   **Date Formatting:** Formats the `published_at` date into a user-friendly format (e.g., "20 JULI 2024").
*   **Responsive Design:** Uses CSS Grid for a responsive card layout that adapts to different screen sizes.
* **Scroll to Top Button:** Implements a floating button that smoothly scrolls the user back to the top of the page.
* **Dynamic Title:** Uses `react-helmet` to dynamically update the page title.

## Technologies Used

*   React
*   axios (for HTTP requests)
*   react-router-dom (for routing)
*   react-lazy-load-image-component
*   react-icons
*   react-helmet
*   CSS

## Installation

1.  Clone the repository:

    ```bash
    git clone [https://github.com/](https://github.com/)ShotZ9/project-test-FE-Yoel-Amadeo-Pratomo.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd project-test-FE-Yoel-Amadeo-Pratomo
    ```

3.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

## Development

1.  Start the development server:

    ```bash
    npm start
    # or
    yarn start
    ```

2.  Open your browser at `http://localhost:3000`.

## API

The project uses the following API endpoint:

*   `https://suitmedia-backend.suitdev.com/api/ideas`

API Parameters:

*   `page[number]`: The page number to retrieve.
*   `page[size]`: The number of items per page.
*   `append[]`: Includes additional data (e.g., `small_image`, `medium_image`).
*   `sort`: Sorts the results by `published_at` (`published_at` for oldest, `-published_at` for newest).

Example API Request: https://suitmedia-backend.suitdev.com/api/ideas?page[number]=1&page[size]=10&append[]=small_image&append[]=medium_image&sort=-published_at

## Further Improvements

*   Implement proper loading indicators for API requests and image loading.
*   Add more detailed error handling and user feedback.
*   Improve styling and responsiveness.
*   Add unit and integration tests.
*   Implement server-side rendering (SSR) for better SEO.

## Author

Github : ShotZ9
