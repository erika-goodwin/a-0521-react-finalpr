import React from "react";
import Modal from "@material-ui/core/Modal";
import AddForm from "./ModalForm";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import { editLine } from "../store/action";

export default function EditModal({ rowData }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const editList = (content) => {
    console.log("dispatch content(edit):", content);
    dispatch(editLine(content));
  };

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
        <AddForm onSave={editList} onClose={handleClose} rowId={rowData.id} />
      </Modal>
    </>
  );
}
