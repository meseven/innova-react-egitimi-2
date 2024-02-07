import "./App.css";
import ChangeTheme from "./components/ChangeTheme";
import { ThemeContextProvider } from "./context/ThemeContext";
import Settings from "./components/Settings";
import { LangContextProvider } from "./context/LangContext";

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <ChangeTheme />

        <LangContextProvider>
          <hr />
          <Settings />
        </LangContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default App;
