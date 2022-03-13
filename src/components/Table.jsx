// React
import React from 'react';

// Children
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = () => (
  <div className="Table">
    <table>
      <TableHead />
      <TableBody />
    </table>
  </div>
);

export default Table;
