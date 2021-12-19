//stateless or pure component
import React from "react";

const TableSimp = ({data}) => {
  return (
    <div>
      <div>
        <h3>This is tempSimp </h3>
        <span>{data.title}</span>
      </div>
    </div>
  );
};

export default TableSimp;
