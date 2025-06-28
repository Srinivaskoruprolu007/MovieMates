import { Link } from "react-router-dom";
import backgroundImage from "../assets/backgroundImage.png";
import marverlLogo from "../assets/marvelLogo.svg";
const HeroSection = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-90"></div>
      <div className="relative z-10 p-4 max-w-2xl">
        <img
          src={marverlLogo}
          alt="marvel logo"
          className="mx-auto w-48 mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-500 leading-tight">
          Avengers: Endgame
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-6">
          Action, Sci-Fi, Drama • 2019 • 3h 1m • IMDB 8.4
        </p>
        <Link
          to="/movies"
          className="text-5xl gradient-text font-bold hover:animate-pulse"
        >
          Explore Movies
        </Link>
      </div>
    </section>
  );
};
export default HeroSection;
