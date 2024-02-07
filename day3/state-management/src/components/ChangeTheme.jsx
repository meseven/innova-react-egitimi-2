import { useTheme } from "../context/ThemeContext";

const ChangeTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <div>Theme: {theme}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ChangeTheme;
