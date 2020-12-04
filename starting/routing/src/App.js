import logo from "./logo.svg";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import MilenaPage from "./pages/MilenaPage";
import NotFoundPage from "./pages/NotFoundPage";
import DynamicStudentNamesPage from "./pages/DynamicStudentNamesPage";
import ProfilePage from "./pages/ProfilePage";

const students = [
  "franck",
  "alex",
  "milena",
  "dimitri",
  "francisco",
  "gosia",
  "hugo",
  "marc",
  "marcel",
  "marta",
  "maxim",
  "monique",
  "pauline",
  "querien",
  "rosana",
  "sophie",
  "vincenzo",
];

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About Page</Link>
      <br />
      <Link to="/profile">Profile</Link>
      {/* <Link to="/about/milena">Milena Page</Link> */}
      {/* <div>
        {students.map((el) => (
          <Link to={`/students/${el}`} style={{ marginRight: "1em" }}>
            {el}
          </Link>
        ))}
      </div> */}
    </nav>
  );
}

function App() {
  const state = {
    user: {
      username: "maxim",
      doorsBuilt: 134,
      role: "regular",
    },
  };

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route
          exact
          path="/profile"
          // component={ProfilePage}
          render={(reactRouterProps) => (
            <ProfilePage {...reactRouterProps} user={state.user} />
          )}
        />
        <Route exact path="/about/milena" component={MilenaPage} />
        <Route exact path="/students/:id" component={DynamicStudentNamesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
