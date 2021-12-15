import React, { useState } from "react";
import TableSimp from "../components/TableSimp";

const TableList = () => {
  const tableData = useSelector((state) => state.TableList);

  return (
    <>
      {tableData &&
        tableData.map((data) => <TableSimp data={data} key={data.id} />)}
    </>
  );
};

export default TableList;
