import React from 'react';
import LatestEntry from './LatestEntry';
import QuickLinks from './QuickLinks';
import DailyQuote from './DailyQuote';
import diaryImage from '../assets/diary_image.jpg';
import cover1 from '../assets/cover 1.jpg';

const Main = () => {
  return (
    <div className="main">
      <div className="main_container">
        <div className="column_title">
          <h1 className="title_first">Welcome to SoulScribbles</h1>
          <p className="description_title">Fill your space with the breathings of your heart</p>
          <a href="#public-entries" className="read-button_title">Read Public Entries</a>
        </div>
        <div className="column_title">
          <img src={cover1} alt="Journal Image" className="journal-image"/>
        </div>
      </div>

      <LatestEntry />
      <QuickLinks />
      <DailyQuote />
    </div>
  );
}

export default Main;
