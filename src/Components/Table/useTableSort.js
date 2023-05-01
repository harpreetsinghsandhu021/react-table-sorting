import { useState } from 'react';

// Can sort columns columns that contain strings or numbers
// InitialSortColumn: Optional - String
// InitialSortDirection: Optional - Can be 'asc' or 'desc'

const useTableSort = (data = []) => {
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('');
  const [tableData, setTableData] = useState(data);

  const sortByNumber = (arr = [], column) => {
    return arr.sort((a, b) => a[column].sortValue - b[column].sortValue);
  };

  const sortByString = (arr = [], column) =>
    [...arr].sort((a, b) => {
      const firstValue = a[column].sortValue.toLowerCase();
      const secondValue = b[column].sortValue.toLowerCase();

      if (firstValue < secondValue) {
        return -1;
      }
      if (firstValue > secondValue) {
        return 1;
      }

      return 0;
    });

  // Sorts array by string or numbers
  const sortArray = (arr, type, column) =>
    type === 'string' ? sortByString(arr, column) : sortByNumber(arr, column);

  // Update state column and direction
  // Checks the data type of the first item in the sort
  // If the data type is string or number, sort the array
  // Reverse the sort if descending
  // Update table data type
  const sortData = (column, direction) => {
    setSortColumn(column);
    setSortDirection(direction);
    const dataInstance = tableData[0][column].sortValue;
    const dataType = typeof dataInstance;
    const shouldSort = ['number', 'string'].includes(dataType);

    const sortedData = shouldSort
      ? sortArray(tableData, dataType, column)
      : tableData;

    const orderedData = direction === 'asc' ? sortedData : sortedData.reverse();

    setTableData(orderedData);
  };

  // If selecting new column, sorts ascending
  // Otherwise, toggles between 'asc' and 'desc'
  // Triggers sort
  const handleSort = (column) => {
    const sameColumn = column === sortColumn;
    console.log(column);

    const direction = sameColumn && sortDirection === 'asc' ? 'desc' : 'asc';

    return sortData(column, direction);
  };

  return { handleSort, sortColumn, sortDirection, tableData };
};

export default useTableSort;
