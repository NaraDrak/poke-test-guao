import Image from "next/image";
import React, { useEffect, useState } from "react";

const Card = () => {
 
  
  return (
    <div className="flex flex-col items-center shadow-lg rounded-md h-80 w-64">
      <h1 className="text-2xl font-bold ">Bulbasur</h1>
      <p>001</p>
      <div>
        <Image
          src="/avatar.png"
          alt="Picture of the author"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-row space-x-2 mt-4">
        <p className="rounded-3xl bg-green-300 px-2">tipo</p>
        <p className="rounded-3xl bg-red-300 px-2">elemento</p>
      </div>
    </div>
  );
};

export default Card;
