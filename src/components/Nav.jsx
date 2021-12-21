import React from "react";
import { IconButton } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";

const Nav = () => {
  const handlerClick = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="Nav-container">
        <h1>Angular 9 MatTable CRUD Example</h1>
        <h1>
          Reload data:
          <IconButton aria-label="edit" onClick={handlerClick}>
            <RefreshIcon className="Nav-container-icon" />
          </IconButton>
        </h1>
      </div>
    </>
  );
};

export default Nav;
