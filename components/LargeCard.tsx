import React from "react";
import Image from "next/image";
function LargeCard() {
  return (
    <section className="relative cursor-pointer py-16 ">
      <div className="mb-12 h-96 rounded-xl  hover:scale-105 transform transition duration-300 ease-out">
        <Image src="https://links.papareact.com/4cj" layout="fill"></Image>
      </div>

      <div className="absolute top-32 left-6 ">
        <h1 className=" font-semibold text-4xl text-black">
          The Greatest <br />
          Outdoors
        </h1>
        <h3 className="font-semibold"> Lorem ipsum dolor sit.</h3>
        <button className="hover:bg-red-300 mt-3 bg-black text-white p-2 rounded-md">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
