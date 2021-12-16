import React from "react";
import Modal from "@material-ui/core/Modal";
import AddForm from "./AddForm";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import { addToLine } from "../store/action";

export default function AddModal({ rowData }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const addToList = (content) => {
    console.log("App content:", content);
    dispatch(addToLine(content));
  };

  // console.log("editModal rowData:", rowData);

  return (
    <>
      <IconButton aria-label="edit" onClick={handleOpen}>
        <EditIcon className="icon" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <AddForm addToList={addToList} />
      </Modal>
    </>
  );
}
