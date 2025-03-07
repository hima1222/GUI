import React from 'react';

const LatestEntry = () => {
  return (
    <div className="latest-entry-container">
      <div className="column">
        <h2 className="title">Latest Diary Title</h2>
        <p className="description">A short description of the latest diary entry goes here.</p>
        <a href="/Write" className="read-button">Read</a>
      </div>
      <div className="column">
        <p className="overview">This is an overview of the latest diary entry. It provides a quick summary or glimpse into the entry content. You can customize this text to match the actual diary content.</p>
      </div>
    </div>
  );
}

export default LatestEntry;
