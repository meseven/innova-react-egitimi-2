import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang } = useLang();

  return (
    <div>
      Settings
      <br />
      <div>Theme: {theme}</div>
      <div>Language: {lang}</div>
      <br />
      <br />
      <button onClick={toggleTheme}>Change Theme</button> <br />
      <br />
      <div>
        <button onClick={() => setLang("tr-TR")}>tr-TR</button>
        <button onClick={() => setLang("en-US")}>en-US</button>
      </div>
    </div>
  );
};

export default Settings;
