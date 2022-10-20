import Image from "next/image";
import {
  GlobeAltIcon,
  UserCircleIcon,
  MinusIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
export const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer flex-grow ">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center ">
        <div className="md:border-2 rounded-full py-2 flex ">
          <input
            className="flex-grow placeholder-gray-400 outline-none pl-2 bg-transparent"
            type="text"
            placeholder="start your search"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" text-white hidden md:inline-flex bg-red-400 rounded-full h-8 p-2 cursor-pointer  "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <Bars3Icon className="h-6 w-6"></Bars3Icon>
          <UserCircleIcon className="h-6 w-6"></UserCircleIcon>
        </div>
      </div>
    </header>
  );
};
