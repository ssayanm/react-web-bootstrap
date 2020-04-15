import React, { useContext } from "react";
import { MovieContext } from "../MovieContext";
import AddMovie from "../AddMovie";

const About = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <React.Fragment>
      <AddMovie />
      <div>
        <h2>AboutPage</h2>
        <p>Learning the UseContext hooks </p>
        {movies.map((movie) => (
          <div>
            <h4>{movie.name}</h4>
            <p>${movie.price}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default About;
