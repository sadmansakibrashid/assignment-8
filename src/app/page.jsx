import Image from "next/image";
import Link from "next/link";

import "animate.css";

const getTiles = async () => {
  const res = await fetch("https://tiles-server-292k.onrender.com/tiles", {
   });
 return res.json();
};

const Home = async () => {
  const tiles = await getTiles();

  return (
    <div className="px-6 py-10">
   <section className="bg-blue-100 py-20 text-center rounded-xl mb-10 animate__animated animate__fadeInDown">
        <h1 className="text-5xl font-bold mb-6 animate__animated animate__bounceIn">
          Discover Your Perfect Aesthetic
        </h1>
     <Link href="/AllTiles">
  <     button className="btn btn-primary">
        Browse Now
      </button>
      </Link>
        
   </section>

      {/* Marquee */}
      <div className="bg-black text-white py-3 px-4 rounded mb-12 overflow-hidden">
        <marquee>
          New Arrivals: Ceramic Blue Tile | Weekly Feature: Modern Geometric
          Patterns | Join the Community...
        </marquee>
      </div>

      <section>
        <h2 className="text-3xl font-bold mb-8">
          Featured Tiles ({tiles.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiles.slice(0, 4).map((tile) => (
            <div
              key={tile.id}
              className="border rounded-xl shadow-md overflow-hidden"
            >
              <Image
            src={tile.image}
            alt={tile.title}
            width={500}
            height={300}
            className="w-full h-56 object-cover"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {tile.title}
                </h3>

                <p className="text-gray-600 text-sm mb-3">
                  {tile.description}
                </p>

                <p className="font-bold text-blue-600 mb-4">
                  ${tile.price}
                </p>

                <a href={`/tiles/${tile.id}`}>
                  <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                    View Details
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

