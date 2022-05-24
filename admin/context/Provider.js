import { createContext, useReducer } from "react";
import globalReducer from "./reducer/globalReducer";

const defaultValue = {
  loading: false,
  data: {},
  error: null,
};

export const GlobalContext = createContext({
  projectsState: defaultValue,
  projectsDispatch: () => {},
});

const GlobalProvider = ({ children }) => {
  const [projectsState, projectsDispatch] = useReducer(
    globalReducer,
    defaultValue
  );
  return (
    <GlobalContext.Provider value={{ projectsState, projectsDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
