import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MoviesPage from "./pages/MoviesPage";
import MyBookingsPage from "./pages/MyBookingsPage";
import SeatLayoutPage from "./pages/SeatLayoutPage";

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/movie/:id/:date" element={<SeatLayoutPage />} />
        <Route path="/my-bookings" element={<MyBookingsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        
      </Routes>
    </>
  );
};
export default App;
