import React, { useContext } from "react";
import { MovieContext } from "./MovieProvider";

const Header = () => {
  const headerStyle = {
    paddingLeft: "15px",
    backgroundColor: "#009874",
    color: "#192231",
    fontStyle: "light",
    width: "100%",
    height: "50px"
  };

  const [movies] = useContext(MovieContext);

  return (
    <div style={headerStyle}>
      <h1>Number of movies: {movies.length}</h1>
    </div>
  );
};

export default Header;
