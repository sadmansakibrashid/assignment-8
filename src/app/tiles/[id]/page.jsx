import Image from "next/image";
import Link from "next/link";

const getSingleTile = async (id) => {
  const res = await fetch(
    `https://tiles-server-292k.onrender.com/tiles/${id}`,
    );
  const data = await res.json();
  return data;
};

const TilesDetailPage =async ({params}) => {
    const {id} = await params;
    const tile = await getSingleTile(id);
    console.log(tile,"tile")
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Image */}
        <div>
         <Image
             src={tile.image}
             alt={tile.title}
             width={800}
             height={600}
            className="w-full h-[500px] object-cover rounded-xl"
         />
        </div>

        {/* Right Side Details */}
        <div>
          <h1 className="text-5xl font-bold mb-4">
            {tile.title}
          </h1>

          <p className="text-2xl font-semibold text-blue-600 mb-6">
            ${tile.price} {tile.currency}
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {tile.description}
          </p>

          <div className="space-y-4 mb-8">
            <div>
              <span className="font-bold">Category:</span>{" "}
              <span className="text-gray-600 capitalize">
                {tile.category}
              </span>
            </div>

            <div>
              <span className="font-bold">Material:</span>{" "}
              <span className="text-gray-600">
                {tile.material}
              </span>
            </div>

            <div>
              <span className="font-bold">Dimensions:</span>{" "}
              <span className="text-gray-600">
                {tile.dimensions}
              </span>
            </div>

            <div>
              <span className="font-bold">Availability:</span>{" "}
              {tile.inStock ? (
                <span className="text-green-600 font-medium">
                  In Stock
                </span>
              ) : (
                <span className="text-red-600 font-medium">
                  Out of Stock
                </span>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
              #{tile.category}
            </span>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
              #{tile.material}
            </span>

            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm">
              #Premium
            </span>
          </div>

          <div className="flex gap-4">
            <Link href="/AllTiles">
              <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800">
                Back to Tiles
              </button>
            </Link>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default TilesDetailPage;