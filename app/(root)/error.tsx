"use client";

export default function Error({ 
  error, reset }: { 
  error: Error; reset: () => void }) 
{
  return (
    <div>
      <h2 className="text-3xl">Something went wrong!</h2>
      <p className="pt-4">{error.message}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
} 
