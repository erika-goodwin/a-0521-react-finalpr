import React from "react";
import InputLabel from "@material-ui/core/InputLabel";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

}));



export default function Filter() {
  const classes = useStyles();

  return (
    <div className="filter-container">
      <form
        className={classes.root}
        className="filter-container-form"
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-secondary"
          label="Filter issues"
          color="secondary"
          className="filter-container-form-textField"
        />
      </form>
    </div>
  );
}
