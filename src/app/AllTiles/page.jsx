const getTiles = async () => {
  const res = await fetch("https://tiles-server-292k.onrender.com/tiles", {
   });
 return res.json();
};

const AllTiles = async() => {
    const tiles = await getTiles();
    return (
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiles.map((tile) => (
            <div
              key={tile.id}
              className="border rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={tile.image}
                alt={tile.title}
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
    );
};

export default AllTiles;