import React from 'react';
import Timer from './Timer';
import Controls from './Controls';

function Display() {
  return (
    <div className="display-container">
      <Timer />
      <Controls />
    </div>
  );
}

export default Display;
