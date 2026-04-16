import React from "react";
import { HiMiniUsers } from "react-icons/hi2";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaMap } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";

const AluraPlans = () => {
  const features = [
    {
      icon: <HiMiniUsers className="text-3xl" />,
      color: "bg-[#3DC0BA]",
      title: "Community Safety Plan",
      desc: "Support network & emergency contacts",
    },
    {
      icon: <FaMap className="text-3xl" />,
      color: "bg-[#F1A742]",
      title: "Travel Plans",
      desc: "Maintain recovery routines while away",
    },
    {
      icon: <AiFillSafetyCertificate className="text-3xl" />,
      color: "bg-[#0084FF]",
      title: "Relapse Prevention Plan",
      desc: "Coping strategies & prevention checklist",
    },
    {
      icon: <FaHeartbeat className="text-3xl" />,
      color: "bg-[#179255]",
      title: "Reasons for Change",
      desc: "Personal motivations for staying committed",
    },
  ];

  return (
    <section className="px-5 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16">
      <div className="">
        <div className="bg-white mx-auto border border-[#E2E2E2] rounded-3xl px-8 py-5 mb-10 md:mb-12 ">
          <h1 className="text-[#374151] font-medium text-2xl md:text-3xl">
            Alura Plans
          </h1>
        </div>

        <div className="bg-[#DBEDEB] rounded-3xl p-6 md:p-10 lg:p-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#37474F] leading-tight">
                Tools to support <br />
                your journey forward
              </h2>

              <p className="text-[#37474F] text-base md:text-lg leading-relaxed">
                Alura Reset is the bridge between sessions that helps you and
                your therapist collaborate for actual growth. Take advantage of
                guided tools to manage urges, plan against triggers, and
                catalogue what you’ve learned along the way.
              </p>

              <p className="text-[#37474F] text-base md:text-lg leading-relaxed">
                Each entry enables your counselor to see your life from a new
                perspective so that sessions can be more targeted and efficient.
                It is recovery tailored for connection, wisdom and gradual
                growth.
              </p>

              <button className="bg-[#3DC0BA] text-sm md:text-[16px] font-medium text-white px-4 py-1 rounded-2xl hover:opacity-90 transition">
                Learn more
              </button>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-white ${feature.color}`}
                      >
                        {feature.icon}
                      </div>

                      <div className="flex-1 pt-1">
                        <h3 className="font-semibold text-[#37474F] text-lg md:text-xl leading-tight mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-[#37474F] text-sm md:text-base leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AluraPlans;
