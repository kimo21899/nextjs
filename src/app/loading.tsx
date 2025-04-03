import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Image 
          src="/loading.gif"
          width={300}
          height={169}
          alt="loading..."
        />
    </div>
  )    
};

export default Loading;