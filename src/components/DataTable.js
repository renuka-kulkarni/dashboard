import React from 'react';
import './DataTable.css';

const DataTable = () => {
  const data = [
    { id: 1, name: 'Renuka Kulkarni', age: 28, email: 'renuka@gmail.com' },
    { id: 2, name: 'Amit Sonar', age: 34, email: 'amit@gmail.com' },
    { id: 3, name: 'Jiya Kulkarni', age: 22, email: 'jiya@gmail.com' },
    { id: 4, name: 'Mrudula Kulkarni', age: 29, email: 'mrudula@gmail.com' },
  ];

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.age}</td>
            <td>{row.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
