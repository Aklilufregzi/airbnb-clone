import Image from "next/image";

export const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[500px]">
      <Image
        objectFit="cover"
        layout="fill"
        src="https://links.papareact.com/0fm"
      ></Image>

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">not sure where to go?</p>
        <button className="text-purple-500 my-5 bg-white px-10 py-4 rounded-full hover:shadow-xl active:scale-90 transition duration-150 ">
          Flexible button here
        </button>
      </div>
    </div>
  );
};
