import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

function LoaderProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  const contextValue = {
    isLoading,
    setIsLoading,
  };

  return <LoaderContext.Provider value={contextValue}>{children}</LoaderContext.Provider>;
}

function useLoader() {
  return useContext(LoaderContext);
}

export { LoaderProvider, useLoader };
