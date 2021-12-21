import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
  },
}));

const DeleteConfirm = ({ onSave, onClose, rowId }) => {
  const prevData = useSelector((state) =>
    state.tableList.find((list) => list.id === rowId)
  );
  const [content, setContent] = useState({
    id: uuidv4(),
    title: "",
    state: "",
    url: "",
    createdAt: "",
    updatedAt: "",
  });

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  useEffect(() => {
    console.log("prev", prevData);
    // console.log("editMode: ", editMode);
    prevData && setContent(prevData);
  }, []);

  useEffect(() => {
    console.log("content", content);
  }, [content]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(content);
    onClose();
  };

  return (
    <div style={modalStyle} className={classes.paper}>
      <div className="DeleteConfirm-container">
        <form onSubmit={handleSubmit} className="DeleteConfirm-form-container">
          <h2>Are you sure ?</h2>
          <div className="flex-div">
            <p>Id: {content?.id}</p>
            <p>Title: {content?.title}</p>
            <p>State: {content?.state}</p>
            <p>url: {content?.url}</p>
          </div>

          <div className="DeleteConfirm-form-button">
            <Button type="submit" size="medium">
              Delete
            </Button>
            <Button size="medium" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteConfirm;
