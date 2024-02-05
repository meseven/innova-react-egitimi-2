import User from "./User";

const Avatar = ({ children }) => {
  return (
    <div>
      {children}

      <User />
    </div>
  );
};

export default Avatar;
