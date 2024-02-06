import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>About</h2>

      <Link to="/" state={{ x: 1 }}>
        Go to Home
      </Link>
    </div>
  );
};

export default About;
