import Image from "next/image";


export default async function Home() {  
  // const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const response = await fetch("http://localhost:3000/movie/movie-list.json");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  const movies = data.itemListElement; 

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
        {movies.map((movie, index) => (
          <div key={index} className="rounded-lg shadow-md">
            <div
              className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              <Image
                src={movie.item.image} 
                className="hovoer:opacity-50 transition-all duration-300 ease-in-out rounded-[5px]"
                layout="intrinsic"
                width={780} 
                height={1170} 
                alt={movie.item.name}  />
              <a href="#!">
                <div
                  className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            {/* <div className="relative w-full h-[300px]">
              <Image 
                src={movie.item.image} 
                alt={movie.item.name} 
                // layout="intrinsic"
                fill
                className="object-cover rounded-md"
              />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden 
                  bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div> */}
            <div className="flex items-start w-full truncate text-ellipsis text-clip overflow-hidden opacity-80 text-sm">
              {movie.item.name}            
            </div>
            <div className="text-sm">⭐ {movie.item.aggregateRating.ratingValue.toFixed(1)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}