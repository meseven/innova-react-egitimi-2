import PropTypes from "prop-types";

const User = ({ name, surname, age, point, is_admin, location, hobbies }) => {
  const handleClick = () => {
    const list = hobbies.map((item) => item.name);
    console.log(list);
  };

  return (
    <div>
      {name} {surname} ({age}) <br />
      <div>Point: {age + point}</div>
      {/* {is_admin ? "ADMIN" : null} */}
      {is_admin && "ADMIN"}
      <hr />
      <h3>Location</h3>
      <pre>{JSON.stringify(location, null, 2)}</pre>
      <hr />
      <h3>Hobbies</h3>
      {/* {hobbies.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))} */}
      <button onClick={handleClick}>Show hobbies</button>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.number,
  point: PropTypes.number,
  is_admin: PropTypes.bool,
  location: PropTypes.exact({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }),
  hobbies: PropTypes.array,
};

export default User;
