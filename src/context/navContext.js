import React, { useState } from "react";

export const NavContext = React.createContext({
  color: "#ff6a6a",
  setTypeColor: () => {},
});

const NavContextProvider = (props) => {
  const [isColor, setIsColor] = useState("#ff6a6a");

  const setTypeColorHandler = (color) => {
    setIsColor(color);
  };

  return (
    <NavContext.Provider
      value={{
        color: isColor,
        setTypeColor: setTypeColorHandler,
      }}
    >
      {props.children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;
