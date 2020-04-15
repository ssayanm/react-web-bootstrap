import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Jurassic Park",
      price: 10,
      id: 123,
    },
    {
      name: "Avengers",
      price: 210,
      id: 4123,
    },
    {
      name: "Batman",
      price: 110,
      id: 4125,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
