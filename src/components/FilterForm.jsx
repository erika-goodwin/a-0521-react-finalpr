import React, { useEffect, useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import clsx from "clsx";
import FormControl from "@material-ui/core/FormControl";

export default function FilterForm({ onFilter }) {
  // const classes = useStyles();

  const [filterInput, setFilterInput] = useState("");

  useEffect(() => {
    console.log("filter input", filterInput);
  }, [filterInput]);

  const handleChange = (e) => {
    const value = e.target.value;
    setFilterInput(value);
    onFilter(filterInput);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    setFilterInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="addform-form-container">
        <div className="filter-container">
          <FormControl className="filter-container-form">
            <InputLabel htmlFor="filterInput">Filter issues</InputLabel>
            <Input
              id="filterInput"
              type="text"
              value={filterInput}
              onChange={handleChange}
            />
          </FormControl>
        </div>
      </form>
    </div>
  );
}
