import React, { useState } from "react";
import "./Table.css";
import merge from "nodemon/lib/utils/merge";

const Table = ({ data }) => {
  const [addData, setAdd] = useState([]);
  const [Cell, setCell] = useState("");
  const [mergeCell, setMergeCell] = useState([]);

  const add = () => {
    setAdd([...addData, { name: "", age: 0, occupation: "" }]);
  };

  const red = () => {
    return (Cell.style.backgroundColor = "red");
  };

  const select = (e) => {
    const NewCell = e.target;
    const x = e.target.value;
    console.log(NewCell);
    setCell(NewCell);
    setMergeCell([...mergeCell, x]);
  };

  const merge = () => {
    console.log(mergeCell);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td contentEditable="true" id="1" onClick={select}>
              {data.name}
            </td>
            <td contentEditable="true" id="2" onClick={select}>
              {data.age}
            </td>
            <td contentEditable="true" id="3" onClick={select}>
              {data.occupation}
            </td>
          </tr>
          {addData.map((item, index) => (
            <tr key={index}>
              <td contentEditable="true" onClick={select}>
                {item.name}
              </td>
              <td contentEditable="true" onClick={select}>
                {item.age}
              </td>
              <td contentEditable="true" onClick={select}>
                {item.occupation}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={add}>Click Me</button>
      <button onClick={red}>Red</button>
      <button onClick={merge}>Merge</button>
    </>
  );
};

export default Table;
