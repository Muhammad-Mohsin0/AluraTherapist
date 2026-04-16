import React from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import {
  ChooseIcon1,
  ChooseIcon2,
  ChooseIcon3,
  ChooseIcon4,
} from "../../assets/data";

const WhyChoose = () => {
  return (
    <div className="mx-auto px-6 md:px-10 py-16">
      <div className="">
        <div className="bg-white  p-4 border border-[#E2E2E2] rounded-3xl mb-12">
          <h1 className="text-[#374151] font-medium text-xl">
            Why choose Alura Reset?
          </h1>
        </div>

        <div className="bg-[#64BAA933] rounded-3xl p-8 md:p-12" id="why">
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold text-[#37474F] leading-tight">
                Find Your Calm
                <br />
                Reconnect with You
              </h1>
            </div>

            <div>
              <p className="text-lg text-end text-[#37474F] leading-relaxed">
                Empowering you and your therapist with the right <br />tools to make
                therapy more connected, engaging,<br /> and effective.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex lg:flex-col gap-4 lg:gap-6 justify-center lg:justify-start">
              <button className="text-[#37474F] hover:bg-white rounded-full hover:text-[#3DC0BA] transition-colors">
                <BsArrowLeftCircle size={52} />
              </button>
              <button className="text-[#37474F] hover:text-[#3DC0BA] transition-colors">
                <BsArrowRightCircle size={52} />
              </button>
            </div>

            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all">
                  <img
                    src={ChooseIcon1}
                    alt="Mindfulness & Coping Toolbox"
                    className="w-16 h-16 mb-6"
                  />
                  <h3 className="font-semibold text-[#37474F] text-xl mb-3 leading-tight">
                    Mindfulness & Coping Toolbox
                  </h3>
                  <p className="text-[#37474F] text-[15px] leading-relaxed">
                    On-demand grounding and breathing tools during high-risk
                    moments.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all">
                  <img src={ChooseIcon2} alt="" className="w-16 h-16 mb-6" />
                  <h3 className="font-semibold text-[#37474F] text-xl mb-3 leading-tight">
                    Personalized Progress Tracking
                  </h3>
                  <p className="text-[#37474F] text-[15px] leading-relaxed">
                    Track your mood, triggers, and breakthroughs with insightful
                    analytics.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all">
                  <img src={ChooseIcon3} alt="" className="w-16 h-16 mb-6" />
                  <h3 className="font-semibold text-[#37474F] text-xl mb-3 leading-tight">
                    Expert Therapist Matching
                  </h3>
                  <p className="text-[#37474F] text-[15px] leading-relaxed">
                    Get matched with certified therapists who understand your
                    unique journey.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all">
                  <img src={ChooseIcon4} alt="" className="w-16 h-16 mb-6" />
                  <h3 className="font-semibold text-[#37474F] text-xl mb-3 leading-tight">
                    24/7 Support Network
                  </h3>
                  <p className="text-[#37474F] text-[15px] leading-relaxed">
                    Access community support and instant help whenever you need
                    it most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
