import useChatStore from "../store/useChatStore";
import Item from "./Item";

const List = () => {
  const messages = useChatStore((state) => state.messages);

  return (
    <div className="h-[550px] flex flex-col gap-2 overflow-auto p-4">
      {messages.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
