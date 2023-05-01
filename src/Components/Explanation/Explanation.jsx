import React from 'react';
import './Explanation.scss';

const Explanation = () => (
  <div className="explanation">
    <h1>Sortable table</h1>
    <details>
      <summary>More info on table component</summary>
      <p>
        <b>Note:</b> Some of the functionality is overkill for this simple
        table.
      </p>
      <ul>
        <li>The table component takes the props "head", and "body"</li>
        <li>Both props are arrays of objects</li>
        <li>
          Each object in the body array must be name for an object id in the
          head array
        </li>
        <li>
          The display value and sort values are separated so more mark-up can be
          passed to the td -- like a button or span
        </li>
        <li>
          Detailed notes on the sorting can be found in the useTableSort custom
          hook
        </li>
      </ul>
    </details>
  </div>
);

export default Explanation;
