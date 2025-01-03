import React from 'react';

const UnderConstruction = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', flexDirection: 'column' }}> {/* Styling untuk memposisikan di tengah */}
      <h1>Halaman sedang dikerjakan</h1>
      <p>Kami sedang mengerjakan halaman ini. Mohon maaf atas ketidaknyamanannya.</p> {/* Pesan tambahan (opsional) */}
    </div>
  );
};

export default UnderConstruction;