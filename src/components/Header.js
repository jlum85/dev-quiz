import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <header>
      <h1 className="headerBack" onClick={() => history.push("/")}>
        Dev Quiz
      </h1>
    </header>
  );
};

export default Header;
