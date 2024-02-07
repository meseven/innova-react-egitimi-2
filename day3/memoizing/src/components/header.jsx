import React from "react";

const Header = ({ increase }) => {
  console.log("header re-render");

  const random_numbers = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 40)
  );

  return (
    <div>
      Header <br />
      {JSON.stringify(random_numbers, null, 2)} <br />
      <button onClick={() => increase(5)}>Increase</button>
      <hr />
    </div>
  );
};

export default React.memo(Header);
