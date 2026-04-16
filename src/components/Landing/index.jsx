import React from "react";
import {
  cardheader1,
  cardheader2,
  cardheader3,
  mainLady,
} from "../../assets/data";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Landing = () => {
  return (
    <div
      className="relative bg-[#3DC0BA] rounded-t-4xl overflow-hidden"
      id="home"
    >
      <div className=" px-12 pt-16 ">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Start Fresh: Your Reset
              <br /> Begins Here.
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-4xl">
              The Alura Therapist Portal gives you the tools to monitor, guide,
              and support clients in their journey — with data-driven insights
              and compassionate technology.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-white text-[#3DC0BA] cursor-pointer font-bold text-lg px-8 py-3 rounded-2xl hover:bg-white/90 transition-all active:scale-95">
                Request Access
              </button>

              <button className="border-2 border-white cursor-pointer font-bold text-lg px-8 py-3 rounded-2xl hover:bg-white/10 transition-all active:scale-95">
                Log In
              </button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src={mainLady}
              alt="Alura Therapist Portal"
              className="w-full max-w-sm  object-contain drop-shadow-2xl"
            />
          </div>

          <div className="hidden md:block absolute bottom-20 right-24 bg-white rounded-2xl px-6 py-4">
            <div className="flex justify-between items-center gap-10 py-4">
              <h1 className="font-medium">
                More than 725 users are <br /> with us on Alura Reset.
              </h1>
              <BsArrowUpRightCircle className="text-4xl text-end text-[#A4A4A4]" />
            </div>
            <hr className="text-[#cacaca]" />
            <div className="flex items-center gap-10">
              <div className="flex items-center justify-center p-2 ">
                <img src={cardheader1} alt="" className="w-[60px]" />
                <img src={cardheader2} alt="" className="w-[60px] -ml-4" />
                <img src={cardheader3} alt="" className="w-[60px] -ml-4" />
              </div>
              <h1 className="text-center text-2xl font-bold">750+</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
