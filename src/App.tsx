import React from 'react';
import Calendar from './components/Calendar';

function App() {
  return (
    <>
      <Calendar date='23/03/2020' />
      <h2>TODO</h2>
      <ul>
        <li>update height of calendar to remove extra blank space from bottom</li>
        <li>try grid</li>
        <li>add test cases</li>
      </ul>
    </>
  );
}

export default App;
