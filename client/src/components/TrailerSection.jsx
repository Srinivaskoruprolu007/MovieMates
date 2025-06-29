import { useState } from "react";
import ReactPlayer from "react-player";

const dummyTrailers = [
  {
    id: 1,
    title: "Trailer 1",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://placehold.co/300x180/2c2c2c/FFFFFF?text=Trailer+1",
  },
  {
    id: 2,
    title: "Trailer 2",
    url: "https://www.youtube.com/watch?v=M7FIvfx5J9s",
    thumbnail: "https://placehold.co/300x180/2c2c2c/FFFFFF?text=Trailer+2",
  },
  {
    id: 3,
    title: "Trailer 3",
    url: "https://www.youtube.com/watch?v=N_xQ8i-pf9M",
    thumbnail: "https://placehold.co/300x180/2c2c2c/FFFFFF?text=Trailer+3",
  },
  {
    id: 4,
    title: "Trailer 4",
    url: "https://www.youtube.com/watch?v=S0Q4_V6hTqY",
    thumbnail: "https://placehold.co/300x180/2c2c2c/FFFFFF?text=Trailer+4",
  },
];

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleTrailerClick = (trailer) => {
    setCurrentTrailer(trailer);
    setHasInteracted(true);
  };

  return (
    <section className="relative py-20 bg-primary bg-opacity-90 backdrop-blur-lg rounded-3xl shadow-2xl mx-auto my-16 max-w-6xl">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-white tracking-tight drop-shadow-lg">
        Upcoming Trailers
      </h2>
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Video Player */}
        <div className="flex-1 flex items-center justify-center w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-lg">
          {currentTrailer ? (
            <ReactPlayer
              url={currentTrailer.url}
              width="100%"
              height="100%"
              controls={true}
              playing={hasInteracted}
              config={{
                youtube: { playerVars: { autoplay: hasInteracted ? 1 : 0 } },
              }}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          ) : (
            <div className="flex items-center justify-center text-gray-500 h-full">
              No trailers available
            </div>
          )}
        </div>
        {/* Trailer List */}
        <div className="w-full lg:w-80 flex flex-col space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar bg-dull rounded-2xl p-4 shadow-md">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            Select a Trailer
          </h3>
          {dummyTrailers.map((trailer) => (
            <div
              key={trailer.id}
              className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-colors duration-200 border border-transparent ${
                currentTrailer.id === trailer.id
                  ? "bg-orange-500 text-white border-orange-400 shadow-lg"
                  : "text-gray-300 hover:bg-primary hover:text-white hover:border-orange-400"
              }`}
              onClick={() => handleTrailerClick(trailer)}
            >
              <img
                src={trailer.thumbnail}
                alt={trailer.title}
                className="w-16 h-16 rounded-lg object-cover border border-gray-700"
              />
              <div>
                <h3 className="font-semibold text-base">{trailer.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TrailerSection;
