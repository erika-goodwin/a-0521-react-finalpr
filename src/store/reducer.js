import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ADD_LINE, DELETE_LINE, EDIT_LINE } from "./action";

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
  filterInput: [""],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_LINE":
      console.log("reducer action.payload:", action.payload);
      return {
        ...state,
        tableList: [...state.tableList, action.payload],
      };
    case "DELETE_LINE":
      const newList = state.tableList.filter(
        (state) => state.id !== action.payload.id
      );
      return {
        ...state,
        tableList: newList,
      };
    case "EDIT_LINE":
      const newArray = state.tableList;
      const indexToEdit = state.tableList.findIndex(
        (row) => row.id === action.payload.id
      );
      newArray[indexToEdit] = action.payload;

      return {
        ...state,
        tableList: [...newArray],
      };
    case "FILTER_LINE":
      const filterValue = action.payload.toLowerCase();

      const stateId = state.tableList.id.toLowerCase();
      const stateTitle = state.tableList.title.toLowerCase();

      const filtedId = stateId.filter(
        if(){

        }else if(){
          
        }
      ).map();

      // const checkedId = state.tableList.id.map((val) => {
      //   if (filterValue === "") {
      //     return val;
      //   } else if (val.toLowerCase().includes(filterValue))
      //     return val;
      // });

      return {
        ...state,
        tableList: {
          ...state.tableList,
          id: filtedId,
        },
      };

    default:
      return state;
  }
};

export default reducer;
