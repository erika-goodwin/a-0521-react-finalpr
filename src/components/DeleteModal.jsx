import React from "react";
import Modal from "@material-ui/core/Modal";
import DeleteConfirm from "./DeleteConfirm";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { deleteFromLine } from "../store/action";

export default function DeleteModal({ rowData }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const deleteList = (content) => {
    console.log("dispatch content(delete):", content);
    dispatch(deleteFromLine(content));
  };

  return (
    <>
      <IconButton aria-label="delete" onClick={handleOpen}>
        <DeleteIcon className="icon" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <DeleteConfirm
          onSave={deleteList}
          onClose={handleClose}
          rowId={rowData.id}
        />
      </Modal>
    </>
  );
}
