import React from "react";
import Image from "next/image";
function MediumCard({ img, title }: any) {
  return (
    <div className="mb-4">
      <div className="mb-2 relative h-80 w-80 cursor-pointer hover:scale-105 transition transform duration-300">
        <Image className="rounded-xl" src={img} layout="fill"></Image>
      </div>
      <h3 className="text-2xl ">{title}</h3>
    </div>
  );
}

export default MediumCard;
