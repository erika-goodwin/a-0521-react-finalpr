import { v4 as uuidv4 } from "uuid";


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
      console.log("filter action.payload:", action.payload);
      const filterInput = action.payload.toLowerCase();
      console.log("filter filterInput:", filterInput);

      const stateArr = state.tableList;
      console.log("state tableList array:", stateArr);

      const filteredArr = stateArr.filter((item) => {
        if (!filterInput) {
          console.log(" filter input is empty", item);
          return item;
        } else if ((item[0].id = filterInput)) {
          // } else if(item.includes(filterInput)){
          console.log(" They have match, yay", item);

          // const filteredIdIndex = val.indexOf(val=> val = filterInput)
          // return filteredIdIndex
        }
      });

      console.log(" filtered Array:", filteredArr);

      return {
        ...state,
        tableList: {
          ...state.tableList,
          // id: filtedId,
        },
      };

    default:
      return state;
  }
};

export default reducer;
