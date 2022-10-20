import React from "react";
import Image from "next/image";

export default function SmallCard({ img, location, distance }: any) {
  return (
    <>
      <div className="flex m-4 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transision transform duration-200 ease-out">
        <div className="relative h-16 w-16">
          <Image src={img} className="rounded-md" layout="fill"></Image>
        </div>
        <div>
          <h1>{location}</h1>
          <h2 className="text-gray-500">{distance}</h2>
        </div>
      </div>
    </>
  );
}
