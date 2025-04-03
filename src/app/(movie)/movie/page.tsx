import Image from "next/image";


export default async function Home() {  
  let movies = [];
  try {
    const response = await fetch("https://jenny3point0.com/data/movie-list.json");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    movies = Array.isArray(data.itemListElement) ? data.itemListElement : [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw new Error("Failed to fetch data");
  }

  return (
    <div>
      <div>
        <Image
          src="/movie/images/banner01.png" 
          alt="banner" 
          layout="intrinsic"
          width={1920} 
          height={600} 
          className="w-full h-130 object-cover rounded-md mb-8" />
      </div>
      <div className="text-3xl font-medium mb-4">
        Top 250 Movies
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-4">        
        {Array.isArray(movies) ? (
          movies.map((movie, index) => (
            <div key={index} className="rounded-lg shadow-md">
              {movie.item && movie.item.image ? (
                <Image
                  src={movie.item.image} 
                  className="hover:opacity-50 transition-all duration-300 ease-in-out rounded-[5px]"
                  layout="intrinsic"
                  width={780} 
                  height={1170} 
                  alt={movie.item.name || "Movie"} 
                />
              ) : (
                <div className="w-[780px] h-[1170px] bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
              <div className="flex items-start w-full truncate text-ellipsis text-clip overflow-hidden opacity-80 text-sm">
                {movie.item?.name || "Unknown"}
              </div>
              <div className="text-sm">
                ⭐ {movie.item?.aggregateRating?.ratingValue ? movie.item.aggregateRating.ratingValue.toFixed(1) : "N/A"}
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-500">No movies available</div>
        )}
      </div>
    </div> 
  )
}