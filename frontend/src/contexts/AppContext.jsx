import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [requests, setRequests] = useState(
    JSON.parse(localStorage.getItem("requests")) || []
  );

  useEffect(() => {
    localStorage.setItem("requests", JSON.stringify(requests));
  }, [requests]);

  return (
    <AppContext.Provider
      value={{ user, setUser, requests, setRequests }}
    >
      {children}
    </AppContext.Provider>
  );
};