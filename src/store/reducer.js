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
      title: "title2",
      state: "open",
      url: "https://api.github.com/repos/angular",
      createdAt: "2021-12-12T14:48:19Z",
      updatedAt: "2021-12-13T14:02:20Z",
    },
    {
      id: uuidv4(),
      title: "TITLE3",
      state: "open",
      url: "https://api.github.com/repos/angular",
      createdAt: "2021-12-12T14:48:19Z",
      updatedAt: "2021-12-13T14:02:20Z",
    },
    {
      id: uuidv4(),
      title: "TITLE four",
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
      console.log('filter action.payload:', action.payload)
      const filterInput = action.payload.toLowerCase();
      console.log('filter filterInput:', filterInput)
      
      const stateArr = state.tableList;
      console.log('state tableList array:', stateArr)

      const filteredArr = stateArr.filter(item=>{
        if(!filterInput){
          console.log(' filter input is empty', item)
          return item

        } else if(item[0].id = filterInput){
        // } else if(item.includes(filterInput)){
          console.log(' They have match, yay', item)


          // const filteredIdIndex = val.indexOf(val=> val = filterInput)
          // return filteredIdIndex
        }
      })

      console.log(' filtered Array:' ,filteredArr)



      // const tableListIdArray = state.tableList.map(state => state.id.toLowerCase())
      // console.log('filter tableList Id:', tableListIdArray)
      // const tableListTitleArray = state.tableList.map(state => state.title.toLowerCase())
      // console.log('filter tableList Title:', tableListTitleArray)
      

      // const filteredId =tableListIdArray.filter((val,index)=> {
      //     if(!filterInput){
      //       console.log(' filter input is empty', val)
      //       console.log(' filter input is empty', index)
      //       return index
      //     } else if(val.includes(filterInput)){
      //       console.log(' They have match, yay', val)
      //       console.log(' They have match index is ', index)

      //       // const filteredIdIndex = val.indexOf(val=> val = filterInput)
      //       // return filteredIdIndex
      //     }else {
      //       console.log(' no much match, yay', val)
      //       console.log(' no much match index', index)
      //     }
      //   })



      //   // filter(String);
      // console.log('filter test ID:', filteredId)
      // console.log('filter test ID index:', filteredIdIndex)
      
      // const filteredTitle = tableListTitleArray.filter(val=> {
      //   if(!filterInput){
      //     console.log(' filter input is empty', val)
      //     return val
      //   } else if(val.includes(filterInput)){
      //     console.log(' They have match, yay', val)
      //     return val
      //   } else {
      //     return val
      //   }
      // })
      // console.log('filter test TITLE:', filteredTitle)

      return {
        ...state,
        tableList: {
          ...state.tableList,
          // id: filteredId,
        },
      };

    default:
      return state;
  }
};

export default reducer;
