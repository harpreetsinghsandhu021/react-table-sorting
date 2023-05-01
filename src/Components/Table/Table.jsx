import React from 'react';
import SortIcon from '../../Assets/SortIcon';
import useTableSort from './useTableSort';
import './Table.scss';

// Body object keys must correspond to a head item ID
const Table = ({ head = [], body = [] }) => {
  const { sortColumn, sortDirection, tableData, handleSort } =
    useTableSort(body);

  return (
    <div className="table__container">
      <table className="table__table">
        <thead className="table__head">
          <tr className="table__row--head">
            {head.map((item) => {
              const { label = '', id = '', sortable } = item;
              const currentItem = sortColumn === id;
              const direction = currentItem ? sortDirection : '';

              return (
                <th className="table__th" key={id}>
                  {sortable ? (
                    <button
                      aria-label={`Sort table by ${label.toLowerCase()} in ${
                        direction === 'asc' ? 'descending' : 'ascending'
                      } order`}
                      className="table__button--sort"
                      onClick={() => handleSort(id)}
                      type="button"
                    >
                      {label} <SortIcon direction={direction} />
                    </button>
                  ) : (
                    label
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="table__body">
          {tableData.map((row, index) => {
            const rowKey = `row-${index + 1}`;
            const { status = 'normal' } = row;

            return (
              <tr
                className="table__row--body"
                data-status-indicator={status.sortValue}
                key={rowKey}
              >
                {head.map((category) => {
                  const cellKey = `${rowKey}-${category.id}`;
                  const data = row[category.id];
                  const { clickable, displayValue } = data;
                  const dataType = typeof displayValue;
                  const title = ['number', 'string'].includes(dataType)
                    ? displayValue
                    : '';

                  return (
                    <td
                      className={`table__td${clickable ? '--clickable' : ''}`}
                      key={cellKey}
                      title={title}
                    >
                      {displayValue}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
