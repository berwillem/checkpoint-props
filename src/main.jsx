import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MovieList from "./MovieList";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MovieList></MovieList>
  </StrictMode>
);
