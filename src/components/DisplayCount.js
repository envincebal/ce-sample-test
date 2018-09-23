import React from 'react';

const DisplayCount = (props) => {
  return (
    <div className="display-count">
      <h2>{props.countTitle}</h2>
      <p>{props.countTotal}</p>
    </div>
  );
}

export default DisplayCount;