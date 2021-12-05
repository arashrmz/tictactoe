import React from "react";
import Card from "@mui/material/Card";

const Place = ({ index, children, handleClick }) => {
  return (
    <Card className="place" onClick={() => handleClick(index)}>
      {children}
    </Card>
  );
};

export default Place;
