import React from "react";
import Modal from "@material-ui/core/Modal";
import AddForm from "./AddForm";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";
import { addToLine } from "../store/action";

export default function AddModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);

    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const addToList = (content) => {
    console.log("dispatch content (add):", content);
    dispatch(addToLine(content));
  };

  return (
    <>
      <IconButton aria-label="add" onClick={handleOpen}>
        <AddIcon color="primary" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <AddForm onSave={addToList} onClose={handleClose}/>
      </Modal>
    </>
  );
}
