import React from "react";
import TableSimp from "../components/*TableSimp";
import { useSelector } from "react-redux";

const TableList = () => {
  const tableData = useSelector((state) => state.tableList);
  console.log("tableList data:", { tableData });
// tableData: Array(2)
// 0: {id: '286f6b48-6ba9-4a67-ac09-ed9372eebb7e', title: 'Ability to customize the default format for DatePipe', state: 'open', url: 'https://api.github.com/repos/angular', createdAt: '2021-12-12T14:48:19Z', …}
// 1: {id: 'ded97c7e-035c-42df-a5cc-58a003b0de46', title: 'Ability to customize the default format for DatePipe', state: 'open', url: 'https://api.github.com/repos/angular', createdAt: '2021-12-12T14:48:19Z', …}
// length: 2

  return (
    <>
      {tableData &&
        tableData.map((data) => <TableSimp data={data} key={data.id} />)
      }
    </>
  );
};

export default TableList;
