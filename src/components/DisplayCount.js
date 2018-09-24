import React from 'react';

const DisplayCount = (props) => {
  return ( 
    <div className="display-total-count">
      <h2>{props.countTitle}</h2>
      {/* if props passed into "countTotal" is 0, the daily total will be in red otherwise if at least AC or heating is turned on once, it will be green */}
      <p className={props.countTotal === 0 ? "no" : "yes"}>{props.countTotal}</p>
    </div>
  );
}

export default DisplayCount;