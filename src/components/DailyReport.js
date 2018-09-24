import React from 'react';

const DailyReport = (props) => {
  return (
    <div className="daily-count">
      <h3>April {props.day}</h3>
      <div className="daily-count-section">
        <div className="daily-AC">
          <h5>AC Count</h5>
           {/* if props passed into "countTotal" is 0, the daily total will be in red otherwise if at least AC or heating is turned on once, it will be green */}
          <p className={props.dailyAC === 0 ? "no" : "yes"}>{parseInt(props.dailyAC, 10)}</p>
        </div>
        <div className="daily-heating">
          <h5>Heating Count</h5>
           {/* if props passed into "countTotal" is 0, the daily total will be in red otherwise if at least AC or heating is turned on once, it will be green */}
          <p className={props.dailyHeating === 0 ? "no" : "yes"}>{parseInt(props.dailyHeating, 10)}</p>
        </div>
      </div>
    </div>
  );
}

export default DailyReport;