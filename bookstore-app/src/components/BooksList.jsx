import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const BooksList = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/");
  };
  return (
    <>
      <div>Welcome to BooksList </div>
      <div>
        {/* <button onClick={handleOnClick}>Click Me!</button> */}
        <Button variant="contained" color="info" onClick={handleOnClick}>
          Click Me!
        </Button>
      </div>
    </>
  );
};

export default BooksList;
