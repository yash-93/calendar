import React from 'react';
import Calendar from './components/Calendar';

function App() {
  return (
    <>
      <Calendar date='23/03/2020' />
      <Calendar date='03/10/2022' />
      <Calendar date='01/12/1995' />
      <Calendar date='29/02/2024' />
      <h2>TODO</h2>
      <ul>
        <li>Handle invalid dates</li>
        <li>negative values</li>
        <li>out of bound values</li>
        <li>update height of calendar to remove extra blank space from bottom</li>
        <li>try grid</li>
        <li>add test cases</li>
      </ul>
    </>
  );
}

export default App;
