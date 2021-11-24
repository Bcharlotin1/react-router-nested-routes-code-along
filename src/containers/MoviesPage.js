// .src/containers/MoviesPage.js
import React from "react";
import { Route } from "react-router-dom";
import MoviesList from "../components/MoviesList";
import MovieShow from "../components/MovieShow";

const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
  {/* // We also add a `Route` component that will render `MovieShow` // when a movie
  is selected 
  
  comes from the routerProps passed in from App. This is a POJO (plain old Javascript object) that contains the current URL. Using match, we can show stuff depending on what the match.url returns
  
  */}
   <Route
      exact
      path={match.url}
      render={() => <h3>Choose a movie from the list above</h3>}
    />
    <Route path={`${match.url}/:movieId`} render={(routerProps) => <MovieShow {...routerProps} movies={movies} />} />
  </div>

)

export default MoviesPage
