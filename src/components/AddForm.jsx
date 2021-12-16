import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddForm = ({ addToDo }) => {
  const [content, setContent] = useState({
    id: uuidv4(),
    title: "",
    state: "",
    url: "",
    createdAt: "",
    updatedAt: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    const title = e.target.title;
    const state = e.target.state;
    const url = e.target.url;
    const createdAt = e.target.createdAt;
    const updatedAt = e.target.updatedAt;

    setContent({
      [id]: value,
      [title]: value,
      [state]: value,
      [url]: value,
      [createdAt]: value,
      [updatedAt]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handlesSubmit content: ", content);
    addToDo({ content });
    setContent("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Add new Issue </label>
        id
        <input
          name="id"
          type="text"
          value={content.id}
          onChange={handleChange}
        />
        title
        <input
          name="title"
          type="text"
          value={content.title}
          onChange={handleChange}
        />
        state
        <input
          name="state"
          type="text"
          value={content.state}
          onChange={handleChange}
        />
        url
        <input
          name="url"
          type="text"
          value={content.url}
          onChange={handleChange}
        />
        createdAt
        <input
          name="createdAt"
          type="text"
          value={content.createdAt}
          onChange={handleChange}
        />
        updatedAt
        <input
          name="updatedAt"
          type="text"
          value={content.updatedAt}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default AddForm;
