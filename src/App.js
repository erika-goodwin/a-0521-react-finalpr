import React from "react";
import Nav from "./components/Nav";
import Filter from "./components/Filter";
import "./css/app.css";
import Table from "./components/Table";
import TableSimp from "./components/*TableSimp";
import TableList from "./container/*TableList";
import AddForm from "./components/AddForm";
import { useDispatch } from "react-redux";
import { addToLine } from "./store/action";
import AddModal from "./components/AddModal";

// export const AddToDoContext = React.createContext();

export default function App() {
  // const dispatch = useDispatch();

  // const addToDo = (content) => {
  //   console.log("App content:", content);
  //   dispatch(addToLine(content));
  // };

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
