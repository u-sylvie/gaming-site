import React from "react";
import Game1 from "../assets/game/game2.jpg";
import Game2 from "../assets/game/game1.jpg";
import Game3 from "../assets/game/game3.jpg";
import { FaHeartbeat, FaWindows } from "react-icons/fa";
import {
  IoLogoAndroid,
  IoLogoApple,
  IoLogoBuffer,
  IoLogoDribbble,
} from "react-icons/io";
import WhatsNewCard from "./WhatsNewCard";

const WhatsNewData = [
  {
    image: Game1,
    title:
      "Game Title 1 Lorem ipsum, dolor sit amet dolor sit amet consectetur",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, doloremque beatae quas officia nihil consequuntur?",
    icon: <FaWindows />,
  },
  {
    image: Game2,
    title:
      "Game Title 2 Lorem ipsum, dolor sit amet dolor sit amet consectetur",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, doloremque beatae quas officia nihil consequuntur?",
    icon: <FaWindows />,
  },
  {
    image: Game3,
    title:
      "Game Title 3 Lorem ipsum, dolor sit amet dolor sit amet consectetur",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, doloremque beatae quas officia nihil consequuntur?",
    icon: <FaWindows />,
  },
];
function WhatsNew() {
  return (
    <>
      <div className="py-10 bg-primary text-white">
        <div className="container">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">What's New</h1>
            <div className="flex gap-4 items-center">
              <IoLogoAndroid className="text-xl cursor-pointer" />
              <IoLogoApple className="text-xl cursor-pointer" />
              <IoLogoBuffer className="text-xl cursor-pointer" />
              <IoLogoDribbble className="text-xl cursor-pointer" />
            </div>
            <button className="bg-gray-400/50 text-white rounded-xl px-4 py-2">
              Explore
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 my-8">
            <div className="col-span-3 grid grid-cols-1 gap-6">
              {WhatsNewData.map((data, index) => (
                <WhatsNewCard key={index} {...data} />
              ))}
            </div>
            <div className="col-span-1">
              <div className="bg-gray-400/10 rounded-xl p-4 space-y-3">
                <FaHeartbeat className="bg-orange-400/30 p-2 rounded-lg inline-block h-[40px] w-[40px]" />
                <h1 className="text-2xl font-semibold">
                  Subscribe To Our Newletter
                </h1>
                <p className="text-sm text-white line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                  omnis
                </p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-400/20 px-4 py-2 rounded-lg w-full"
                  placeholder="Enter your Email"
                />
                <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-xl px-4 py-2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatsNew;
