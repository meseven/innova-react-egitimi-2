import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState("tr-TR");

  return (
    <LangContext.Provider
      value={{
        lang,
        setLang,
      }}
    >
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);

  if (context === undefined) {
    throw new Error("useLang hook must called in LangContextProvider.");
  }

  return context;
};
