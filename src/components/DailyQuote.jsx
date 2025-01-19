import React from 'react';
import SliderHome_quote from './SliderHome';

const DailyQuote = () => {
  return (
    <div className="daily_quote">

      <div className='quotes'>
        <h2>Daily Inspiration</h2>
      </div>

      <div className='slider_dailyQuote'>
        <SliderHome_quote/>
      </div>

      {/* <blockquote>"The best time for new beginnings is now."</blockquote> */}
    </div>
  );
}

export default DailyQuote;
