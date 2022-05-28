import React, { useEffect, useState } from "react";
import styles from "./table.module.css"
import TableItem from "./TableItem";

const Table = ({ data, setData }) => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`http://localhost:3040/data?_page=${page}&_limit=5`)
      .then((r) => r.json())
      .then((d) => {
        setData(d);
      });
  }, [page]);
  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Married</th>
          </tr>
        </thead>
        {data.map((d) => (
            <TableItem name={d.name} age={d.age} address={d.address} department={d.department} salary={d.salary} married={d.married}/>
        ))}
      </table>
      <button onClick={()=>setPage(page-1)}>Previous Page</button>
      <button onClick={()=>setPage(page+1)}>Next Page</button>
    </div>
  );
};

export default Table;
