import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { socket } from "./socket";
import { useEffect } from "react";
import useChatStore from "./store/useChatStore";
import Header from "./components/Header";
import useSettingsStore from "./store/useSettingsStore";
import classNames from "classnames";

const App = () => {
  const theme = useSettingsStore((state) => state.theme);
  const addMessage = useChatStore((state) => state.addMessage);
  const setOnlineCount = useChatStore((state) => state.setOnlineCount);

  useEffect(() => {
    function onConnect() {
      console.log("connected");
    }

    function onDisconnect() {
      console.log("disconnected");
    }

    function onNewMessage(message) {
      console.log("new message", message);
      addMessage({ message });
    }

    function onOnlineCountChange(onlineCount) {
      console.log(onlineCount);
      setOnlineCount(onlineCount);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("new-message", onNewMessage);
    socket.on("online-count", onOnlineCountChange);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("new-message", onNewMessage);
      socket.off("online-count", onOnlineCountChange);
    };
  }, []);

  console.log(theme);
  return (
    <div
      className={classNames(
        "wrapper flex flex-1 justify-center items-center h-[100vh]",
        {
          dark: theme === "dark",
        }
      )}
    >
      <div className="min-w-[540px] ">
        <Header />
        <div className="border-2 border-[#666]">
          <List />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
