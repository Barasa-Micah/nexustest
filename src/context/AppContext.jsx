import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    profileName: "Allan Otieno",
    username: "Alan",
    status: "On duty",
    aboutMe: "Discuss only on work hours, unless you wanna discuss about music.",
  });

  const updateUser = (newData) => {
    setUser((prevState) => ({
      ...prevState,
      ...newData,
    }));
  };

  return (
    <AppContext.Provider value={{ user, updateUser }}>
      {children}
    </AppContext.Provider>
  );
};
