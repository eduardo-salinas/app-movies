import React from "react";
import Favorites from "./components/Favorites";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Route exact path="/" component={Search} />
      <Route path="/favs" component={Favorites} />
      <Route path="/movie/:id" component={Movie} />
    </React.Fragment>
  );
}

export default App;

