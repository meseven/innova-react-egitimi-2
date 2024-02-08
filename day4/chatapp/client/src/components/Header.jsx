import useChatStore from "../store/useChatStore";
import useSettingsStore from "../store/useSettingsStore";

const Header = () => {
  const onlineCount = useChatStore((state) => state.onlineCount);
  const toggleTheme = useSettingsStore((state) => state.toggleTheme);

  if (!onlineCount) {
    return null;
  }

  return (
    <div className="py-4 text-xl font-semibold flex gap-4 items-center justify-between">
      <div className="flex flex-row items-center gap-4">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="online-count">{onlineCount} Users Online</span>
      </div>

      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Header;
