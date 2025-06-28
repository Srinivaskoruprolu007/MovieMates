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
  return (
    <section className="relative py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Trailers</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2 flex items-center justify-center w-full aspect-video bg-black rounded-lg overflow-hidden">
          {currentTrailer ? (
            <ReactPlayer
              url={currentTrailer.url}
              width="100%"
              height="100%"
              controls={true}
              playing={true}
              config={{
                youtube: { playerVars: { autoplay: 1 } },
              }}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          ) : (
            <div className="flex items-center justify-center text-gray-500 h-full">
              No trailers available
            </div>
          )}
        </div>
        <div className="lg:cols-span-1 flex flex-col space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          {dummyTrailers.map((trailer) => (
            <div
              key={trailer.id}
              className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                currentTrailer.id === trailer.id
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:bg-primary hover:text-white"
              }`}
              onClick={() => setCurrentTrailer(trailer)}
            >
              <img
                src={trailer.thumbnail}
                alt={trailer.title}
                className="w-16 h-16 rounded-lg"
              />
              <div>
                <h3 className="font-semibold">{trailer.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TrailerSection;
