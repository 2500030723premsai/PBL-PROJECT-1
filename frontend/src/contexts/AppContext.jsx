import React, { createContext, useState, useEffect, useMemo } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [requests, setRequests] = useState(
    JSON.parse(localStorage.getItem("requests")) || []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Persist user session
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // Persist requests
  useEffect(() => {
    localStorage.setItem("requests", JSON.stringify(requests));
  }, [requests]);

  // Derived state — memoized to avoid recomputation on every render
  const pendingRequests = useMemo(
    () => requests.filter((r) => r.status === "Pending"),
    [requests]
  );
  const assignedRequests = useMemo(
    () => requests.filter((r) => r.status === "Assigned"),
    [requests]
  );
  const completedRequests = useMemo(
    () => requests.filter((r) => r.status === "Completed"),
    [requests]
  );

  return (
    <AppContext.Provider
      value={{
        user, setUser,
        requests, setRequests,
        loading, setLoading,
        error, setError,
        pendingRequests,
        assignedRequests,
        completedRequests,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
