import React from "react";
import { WorksImage, WorksVector } from "../../assets/data";

const AluraWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Sign Up",
      description:
        "Create your secure account and personalize your recovery goals.",
    },
    {
      number: "2",
      title: "Track Daily",
      description:
        "Log feelings, urges, and reflections in your private journal.",
    },
    {
      number: "3",
      title: "Learn & Practice",
      description: "Complete CBT lessons and mindfulness exercises.",
    },
    {
      number: "4",
      title: "See Progress",
      description: "Monitor streaks and growth over time.",
    },
  ];

  return (
    <section
      className="py-12 md:py-16 lg:py-20 px-5 sm:px-8 md:px-12 lg:px-24 "
      id="how"
    >
      <div className="">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-sm border border-gray-100">
            <div className="mb-8 lg:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#37474F] leading-tight tracking-tight">
                How Alura Reset Works
              </h2>
            </div>

            <div className="space-y-5 sm:space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="group flex gap-4 sm:gap-6 bg-white rounded-3xl p-5 sm:p-6 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#72CDBB33]"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#72CDBB33] group-hover:bg-[#3DC0BA] rounded-full text-2xl sm:text-3xl font-bold text-[#37474F] transition-all duration-300">
                      {step.number}
                    </div>
                  </div>

                  <div className="flex-1 pt-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#37474F] mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#37474F] leading-relaxed text-[15px] sm:text-[17px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 sm:pt-8">
              <button className="w-full sm:w-auto bg-[#3DC0BA] hover:bg-[#36a99f] text-white font-medium text-base sm:text-lg px-8 sm:px-10 py-3.5 rounded-full active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg">
                Start Now
              </button>
            </div>
          </div>

          <div className="space-y-8 lg:space-y-10 mt-8 lg:mt-0">
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-center font-bold text-[#37474F] leading-none tracking-tighter">
                Reduce stress
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-end font-bold text-[#37474F] leading-none tracking-tighter text-right ">
                and anxiety
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#37474F] leading-relaxed max-w-md lg:max-w-none lg:text-right lg:ml-auto">
              Counseling can be a helpful way to improve your mental health and
              well-being.
            </p>

            <div className="bg-[#C7E2FC] rounded-3xl  flex flex-col md:flex-row items-center md:items-end justify-center gap-6 sm:gap-8 min-h-[380px] sm:min-h-[420px] relative overflow-hidden">
              <img
                src={WorksVector}
                alt="Decorative vector illustration"
                className="w-28 sm:w-36 md:w-44 lg:w-52 object-contain drop-shadow-sm"
                loading="lazy"
              />
              <img
                src={WorksImage}
                alt="Alura Reset app interface showing progress"
                className="flex-1 max-w-[240px] sm:max-w-xs md:max-w-sm object-contain drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AluraWorks;
