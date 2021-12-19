import React from "react";
import Nav from "./components/Nav";
import Filter from "./components/Filter";
import "./css/app.css";
import Table from "./components/Table";


export default function App() {

  return (
    <>
      <Nav />
      <Filter />
      {/* <AddModal /> */}
      <Table />
      {/* <AddForm /> */}
    </>
  );
}
