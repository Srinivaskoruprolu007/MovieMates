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
          className="mx-auto w-48 mb-4 drop-shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-2">
          Avengers: Endgame
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Action, Sci-Fi, Drama • 2019 • 3h 1m • IMDB 8.4
        </p>
        <Link
          to="/movies"
          className="inline-block bg-orange-500 text-white text-lg md:text-xl font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-orange-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
        >
          Explore Movies
        </Link>
      </div>
    </section>
  );
};
export default HeroSection;
