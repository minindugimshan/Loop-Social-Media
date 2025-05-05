import { createContext, useEffect, useState } from "react";

// 1. First create and export the context
export const AuthContext = createContext();

// 2. Then export the provider component
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const mockUser = {
      id: 1,
      username: inputs.username,
      email: "mockuser@example.com",
    };
    setCurrentUser(mockUser);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};