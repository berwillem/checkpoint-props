import { useState } from "react";
import MovieCard from "./MovieCard";

const movieData = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  },
  {
    id: 2,
    title: "The Godfather",
    description:
      "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
  },
  {
    id: 3,
    title: "The Godfather: Part II",
    description:
      "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate.",
  },
];

export default function MovieList() {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState(movieData);

  const handleSearch = (e) => {
    e.preventDefault();
    if (input) {
      const filteredData = movies.filter((movie) =>
        movie.title.toLowerCase().includes(input.toLowerCase())
      );
      setMovies(filteredData);
    } else {
      setMovies(movieData);
    }
  };

  const handleClear = () => {
    setInput("");
  };

  const moviesToDisplay = input ? movies : movieData;

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <button onClick={handleClear}>clear filters</button>
      <div>
        {moviesToDisplay.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
