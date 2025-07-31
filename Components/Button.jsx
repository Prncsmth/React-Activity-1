import React from 'react';

export default function Button() {
  const handleClick = () => {
    window.open('https://www.facebook.com', '_blank');
  };

  return (
    <button onClick={handleClick} className="external-link-button">
      Visit Facebook
    </button>
  );
}
