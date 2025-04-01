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
        <h1>HOME</h1>
      </div>
    </>
  );
}