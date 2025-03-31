import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Next.Js</h1>
      <Image 
        src="next.svg" 
        width={600} height={400} alt="welcome.." />
    </>
  );
}
