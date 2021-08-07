import React from "react";
import Favorites from "./components/Favorites";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/favs" component={Favorites} />
      <Route path="/movie/:id" component={Movie} />
    </React.Fragment>
  );
}

export default App;

