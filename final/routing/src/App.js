import Navbar from "./components/Navbar";
import DynamicAbout from "./pages/DynamicAbout";

import { Route, Switch } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      {/* This navbar is going to be available on every single page */}
      <Navbar />
      {/* Switch component wraps the routes and guarantess that, as soon as it finds one route, it stops looking for more */}
      {/* try commenting the switch statement and you will see that the NotFound component will be in every page */}
      <Switch>
        {/* Syntax is: exact guarantees that the path has to be **exactly** that url  */}
        <Route extact path="/" component={HomePage} />
        {/* Syntax: path - is the url that our website will be on  */}
        <Route extact path="/about" component={AboutPage} />
        {/* Syntax: /:id -> kind of like in the backend, this assumes a variability of the url and to be caught by this component. This would be /about/hi ,  /about/hello , etc */}
        <Route extact path="/about/:id" component={DynamicAbout} />
        {/* This component would be rendered whenever no other route is able to **catch it** */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
