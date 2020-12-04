import logo from "./logo.svg";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import MilenaPage from "./pages/MilenaPage";
import NotFoundPage from "./pages/NotFoundPage";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About Page</Link>
      <Link to="/about/milena">Milena Page</Link>
      <Link to="/about/monique">Monique Page</Link>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/about/milena" component={MilenaPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
