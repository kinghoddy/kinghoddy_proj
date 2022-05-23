import { createContext, useState } from "react";

export const GlobalContext = createContext({
  projects: {},
  setProjects: "",
});

const GlobalProvider = ({ children }) => {
  const variable = "Hello world";
  const [projects, setProjects] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        projects,
        setProjects,
        variable,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
