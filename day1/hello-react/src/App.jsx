import "./App.css";
import User from "./components/user";
// import Avatar from "./components/Avatar";

const App = () => (
  <>
    {/* <Avatar>
      <ul>
        <li>
          <a href="#">Test</a>
        </li>
      </ul>
    </Avatar> */}

    <User
      name="Mehmet"
      surname="Seven"
      age={30}
      point={4}
      is_admin={true}
      location={{
        city: "Istanbul",
        country: "Turkiye",
      }}
      hobbies={[
        { id: 1, name: "Football" },
        { id: 2, name: "Programming" },
        { id: 3, name: "X" },
        { id: 4, name: "Y" },
      ]}
    />
    {/* <User name="Ayşe" surname="Can" age={34} is_admin={false} /> */}
  </>
);

export default App;
