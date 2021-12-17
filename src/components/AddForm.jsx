import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { list } from "postcss";
import { editLine } from "../store/action";

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
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
  },
}));

const AddForm = ({ onSave, editMode, rowId }) => {
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
    console.log("content", content);
  }, [content]);

  useEffect(() => {
    console.log("prev", prevData);
    console.log("editMode: ", editMode);
    editMode && setContent(prevData);
    
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    // const value = e.target.value;
    // const name = e.target.name;

    setContent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("handle change: ", content);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handlesSubmit content: ", content);
    console.log("handlesSubmit content editMode: ", editMode);
    // editMode ? editList(content) : addToList(content);
    onSave(content);
    setContent({
      id: uuidv4(),
      title: "",
      state: "",
      url: "",
      createdAt: "",
      updatedAt: "",
    });
  };

  return (
    <div style={modalStyle} className={classes.paper}>
      <div className="addform-container">
        <form onSubmit={handleSubmit} className="addform-form-container">
          <h2>Add new Issue</h2>

          <div>
            <label>
              <FormControl
                sx={{ m: 1, width: "200px" }}
                variant="standard"
                className="addform-form-label-formcontrol-container"
              >
                <InputLabel
                  htmlFor="standard-adornment-password"
                  color="secondary"
                >
                  Id*
                </InputLabel>
                )
                <Input
                  required
                  name="id"
                  value={content?.id || ""}
                  onChange={handleChange}
                  color="secondary"
                />
                <FormHelperText id="component-error-text" color="secondary">
                  Required field
                </FormHelperText>
              </FormControl>
            </label>
          </div>

          <div>
            <label>
              <FormControl sx={{ m: 1, width: "100px" }} variant="standard">
                <InputLabel
                  htmlFor="standard-adornment-password"
                  color="secondary"
                >
                  Title*
                </InputLabel>
                <Input
                  name="title"
                  value={content?.title || ""}
                  onChange={handleChange}
                  color="secondary"
                />
              </FormControl>
            </label>
          </div>

          <div>
            <label>
              <FormControl sx={{ m: 1, width: "100px" }} variant="standard">
                {}
                <InputLabel
                  htmlFor="standard-adornment-password"
                  color="secondary"
                >
                  State*
                </InputLabel>
                <Input
                  name="state"
                  value={content?.state || ""}
                  onChange={handleChange}
                  color="secondary"
                />
              </FormControl>
            </label>
          </div>

          <div>
            <label>
              <FormControl sx={{ m: 1, width: "100px" }} variant="standard">
                {}
                <InputLabel
                  htmlFor="standard-adornment-password"
                  color="secondary"
                >
                  URL*
                </InputLabel>
                <Input
                  name="url"
                  value={content?.url || ""}
                  onChange={handleChange}
                  color="secondary"
                />
              </FormControl>
            </label>
          </div>
          <div>
            <label>
              <FormControl sx={{ m: 1, width: "100px" }} variant="standard">
                {}
                <InputLabel
                  htmlFor="standard-adornment-password"
                  color="secondary"
                >
                  createdAt*
                </InputLabel>
                <Input
                  name="createdAt"
                  value={content?.createdAt || ""}
                  onChange={handleChange}
                  color="secondary"
                />
              </FormControl>
            </label>
          </div>
          {/* <label>
          updatedAt
          <input
            name="updatedAt"
            type="text"
            value={content.updatedAt}
            onChange={handleChange}
          />
        </label> */}
          <div>
            <label>
              <FormControl sx={{ m: 1, width: "100px" }} variant="standard">
                {}
                <InputLabel
                  htmlFor="standard-adornment-password"
                  color="secondary"
                >
                  updatedAt*
                </InputLabel>
                <Input
                  name="updatedAt"
                  value={content?.updatedAt || ""}
                  onChange={handleChange}
                  color="secondary"
                />
              </FormControl>
            </label>
          </div>

          {/* <input type="submit" value="Submit"></input> */}
          <Button type="submit" size="medium">
            SAVE
          </Button>
          <Button size="medium">Cancel</Button>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
