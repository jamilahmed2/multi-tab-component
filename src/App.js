import React from "react";
import './App.css'
import DataTable from "./components/DataTable";

const data = [
  {
    id: 1,
    name: "Student-1",
    description: "Detail of student 1 .",
    date: "03/11/2023",
    amount: "$100",
  },
  {
    id: 2,
    name: "Student-2",
    description: "Detail of student 2.",
    date: "03/11/2023",
    amount: "$200",
  },
  {
    id: 3,
    name: "Student-3",
    description: "Detail of student 3.",
    date: "03/11/2023",
    amount: "$300",
  },
];

const App = () => {
  return (
    <>
      <DataTable data={data} />
    </>
  );
};

export default App;
