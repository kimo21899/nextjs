import Hello from "@/app/comoponets/hello";

export default function Home() {
  console.log("What am i doing here?");

  return (
    <>
      <h1>Welcome to Next.js!</h1>
      
      <Hello />
    </>
  );
}