import useChatStore from "../store/useChatStore";

const Header = () => {
  const onlineCount = useChatStore((state) => state.onlineCount);

  if (!onlineCount) {
    return null;
  }

  return (
    <div className="py-4 text-xl font-semibold flex gap-4 items-center">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <span>{onlineCount} Users Online</span>
    </div>
  );
};

export default Header;
