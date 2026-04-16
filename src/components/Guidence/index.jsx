import React from "react";
import { TherapyVector } from "../../assets/data";

const Guidence = () => {
  return (
    <div className="bg-[#F9FAFB] py-16 px-6">
      <div className="">
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
          <div className="bg-[#3DC0BA33] rounded-3xl p-8 flex-1 lg:flex-none lg:w-[700px] flex flex-col transition-all hover:shadow-xl">
            <h1 className="text-2xl font-bold text-[#37474F] mb-4">
              Guided Recovery
            </h1>
            <p className="text-[#37474F] leading-relaxed text-[17px]">
              Work one-on-one with a certified Therapist to develop personalized
              mindfulness practices.
            </p>

            <div className="flex flex-wrap items-center justify-center mt-10">
              <div className=" text-[#37474F] px-6 py-3 rounded-full text-base font-medium border border-[#37474F]/60 flex items-center gap-2 shadow-sm">
                • Personalized Plan
              </div>
              <div className=" text-[#37474F] px-6 py-3 rounded-full text-base font-medium border border-[#37474F]/60 flex items-center gap-2 shadow-sm mt-1">
                • Guided Support
              </div>
              <div className=" text-[#37474F] px-6 py-3 rounded-full text-base font-medium border border-[#37474F]/60 flex items-center gap-2 shadow-sm md:rotate-24 mt-1 md:-ml-4">
                • Tailored Techniques
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:w-[550px] flex-1 lg:flex-none  ">
            <div className="">
              <h1 className="text-xl font-semibold text-[#37474F] leading-tight">
                Embrace the present moment. Experience mindful living with
                expert coaching support.
              </h1>
            </div>

            <div className="bg-[#0084FF33] rounded-3xl p-8 flex-1 flex flex-col transition-all hover:shadow-xl">
              <h1 className="text-2xl font-bold text-[#37474F] mb-4">
                Group Therapy
              </h1>
              <p className="text-[#37474F] leading-relaxed text-[17px]">
                Connect with others in a supportive environment and learn
                mindfulness techniques together.
              </p>
            </div>
          </div>

          <div className="bg-[#2DD27233] rounded-3xl p-8 flex-1 lg:flex-none lg:w-[450px] flex flex-col transition-all hover:shadow-xl">
            <h1 className="text-2xl font-bold text-[#37474F] mb-4">
              Individual Therapy
            </h1>
            <p className="text-[#37474F] leading-relaxed text-[17px]">
              Address specific concerns while incorporating mindfulness
              practices for improved well-being.
            </p>
            <img src={TherapyVector} alt="" className="w-38 self-end" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidence;
