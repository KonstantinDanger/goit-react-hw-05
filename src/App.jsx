import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.jsx";
import MoviesPage from "./pages/MoviesPage/MoviesPage.jsx";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";

import AppBar from "./components/AppBar/AppBar.jsx";
import MovieCast from "./components/MovieCast/MovieCast.jsx";
import MovieReviews from "./components/MovieReviews/MovieReviews.jsx";

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
