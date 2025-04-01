import Image from "next/image";


export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();

  return (
    <>
      <div>
        <img src="https://image.tving.com/ntgs/operation/banner/2025/02/25/1740445979_1.jpg/dims/resize/F_webp,1920" alt="banner" 
        className="w-full h-130 object-cover rounded-[5px] mb-4" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-4">
        {data.map((item: { id: number; title: string; thumbnailUrl: string }) => (
          <div key={item.id} className="flex flex-col items-start">          
            <div
              className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              <img
                src="https://image.tmdb.org/t/p/w780/mClzWv7gBqgXfjZXp49Enyoex1v.jpg"
                className="hovoer:opacity-50 transition-all duration-300 ease-in-out rounded-[5px]"
                alt="Louvre" />
              <a href="#!">
                <div
                  className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="flex items-start w-full truncate text-ellipsis text-clip overflow-hidden opacity-80">
              {item.title} 
              {/* <br/>2025 */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}