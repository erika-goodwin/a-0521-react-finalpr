import React from "react";
import { useDispatch } from "react-redux";
import { filterLine } from "../store/action";
import FilterForm from "./FilterForm";

const Filter = () => {
  const dispatch = useDispatch();
  const addToFilter = (searchValue) => {
    dispatch(filterLine(searchValue));
    console.log("filter passed seartch value:", searchValue);
  };

  return (
    <div>
      <FilterForm onFilter={addToFilter} />
    </div>
  );
};

export default Filter;
