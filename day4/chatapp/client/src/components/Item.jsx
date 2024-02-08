import classNames from "classnames";

const Item = ({ item }) => {
  return (
    <div
      className={classNames("flex", {
        "justify-end": item.is_from_me,
      })}
    >
      <div
        className={classNames(
          "bg-zinc-700 px-2 py-1 inline-flex rounded-md text-xl",
          {
            "!bg-blue-500": item.is_from_me,
          }
        )}
      >
        {item.message}
      </div>
    </div>
  );
};

export default Item;
