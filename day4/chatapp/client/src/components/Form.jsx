import { useState } from "react";
import { socket } from "../socket";
import useChatStore from "../store/useChatStore";

const Form = () => {
  const [message, setMessage] = useState("");
  const addMessage = useChatStore((state) => state.addMessage);

  const handleSubmit = (e) => {
    e.preventDefault();

    addMessage({ message, is_from_me: true });
    socket.emit("new-message", message);
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="bir mesaj girin..."
        className="text-xl p-4 box-border	w-full"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </form>
  );
};

export default Form;
