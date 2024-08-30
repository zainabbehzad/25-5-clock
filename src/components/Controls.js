import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementSession,
  decrementSession,
  incrementBreak,
  decrementBreak,
  reset,
  startStop,
} from '../redux/actions';

function Controls() {
  const dispatch = useDispatch();
  const sessionLength = useSelector((state) => state.sessionLength);
  const breakLength = useSelector((state) => state.breakLength);

  return (
    <div>
      <div id="session-label">Session Length</div>
      <div id="session-length">{sessionLength}</div>
      <button type="button" id="session-decrement" onClick={() => dispatch(decrementSession())}>-</button>
      <button type="button" id="session-increment" onClick={() => dispatch(incrementSession())}>+</button>

      <div id="break-label">Break Length</div>
      <div id="break-length">{breakLength}</div>
      <button type="button" id="break-decrement" onClick={() => dispatch(decrementBreak())}>-</button>
      <button type="button" id="break-increment" onClick={() => dispatch(incrementBreak())}>+</button>

      <button type="button" id="start_stop" onClick={() => dispatch(startStop())}>Start/Stop</button>
      <button type="button" id="reset" onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Controls;
