import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ADD_LINE, REMOVE_LINE } from "./action";

const initState = {
  tableList: [
    {
      id: uuidv4(),
      title: "Ability to customize the default format for DatePipe",
      state: "open",
      url: "https://api.github.com/repos/angular",
      createdAt: "2021-12-12T14:48:19Z",
      updatedAt: "2021-12-13T14:02:20Z",
    },
    {
      id: uuidv4(),
      title: "Ability to customize the default format for DatePipe",
      state: "open",
      url: "https://api.github.com/repos/angular",
      createdAt: "2021-12-12T14:48:19Z",
      updatedAt: "2021-12-13T14:02:20Z",
    },
  ],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_LINE":
      return state;

    default:
      return state;
  }
};

export default reducer;
