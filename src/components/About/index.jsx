import React from "react";
import {
  aboutImage,
  Aboutlogo1,
  Aboutlogo2,
  Aboutlogo3,
  AboutVectorMain,
} from "../../assets/data";

const About = () => {
  return (
    <div className="mx-auto px-10 py-16" id="about">
      <div className="bg-white mx-auto  p-4 border border-[#E2E2E2] rounded-3xl  mb-12">
        <h1 className="text-[#374151] font-medium text-xl">
          About Alura Reset
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-32 items-center">
        <div className="relative flex justify-center lg:justify-end">
          <img
            src={aboutImage}
            alt="About Alura Reset"
            className="w-full max-w-lg lg:max-w-xl z-10 rounded-3xl"
          />

          <img
            src={AboutVectorMain}
            alt=""
            className="absolute -bottom-20 -right-24 w-48 lg:w-64  z-0 hidden lg:block"
          />
        </div>

        <div className="space-y-10 col-span-">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#37474F]">
              Guided by Compassion,
              <br />
              <span className="block ">Grounded in Care</span>
            </h1>

            <p className="mt-6 text-lg text-[#37474F] leading-relaxed max-w-2xl">
              Designed to empower users to break free from harmful habits,
              rebuild self-control, and heal through structured reflection,
              mindfulness, and technology.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <img
                  src={Aboutlogo1}
                  alt="Mindful Recovery Tools"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[#37474F] mb-2">
                  Mindful Recovery Tools
                </h2>
                <p className="text-[#37474F] leading-relaxed">
                  Access grounding exercises, breathing guides, and mindfulness
                  practices anytime.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <img
                  src={Aboutlogo2}
                  alt=""
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[#37474F] mb-2">
                  Mindful Recovery Tools
                </h2>
                <p className="text-[#37474F] leading-relaxed">
                  Access grounding exercises, breathing guides, and mindfulness
                  practices anytime.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <img
                  src={Aboutlogo3}
                  alt=""
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[#37474F] mb-2">
                  Mindful Recovery Tools
                </h2>
                <p className="text-[#37474F] leading-relaxed">
                  Access grounding exercises, breathing guides, and mindfulness
                  practices anytime.
                </p>
              </div>
            </div>
            <button className="bg-[#3DC0BA] text-sm md:text-[16px] font-medium text-white px-4 py-1 rounded-2xl hover:opacity-90 transition">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
