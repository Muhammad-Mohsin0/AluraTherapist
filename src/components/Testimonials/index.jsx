import React from "react";
import { Qoutation, TestiPic1 } from "../../assets/data";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Alura changed how I support my clients. The insights are game-changing. Alura changed how I support my clients. The insights are game-changing.",
      name: "ABS Sakib Zaman",
      image: TestiPic1,
    },
    {
      text: "Alura changed how I support my clients. The insights are game-changing. Alura changed how I support my clients. The insights are game-changing.",
      name: "ABS Sakib Zaman",
      image: TestiPic1,
    },
    {
      text: "Alura changed how I support my clients. The insights are game-changing. Alura changed how I support my clients. The insights are game-changing.",
      name: "ABS Sakib Zaman",
      image: TestiPic1,
    },
    {
      text: "Alura changed how I support my clients. The insights are game-changing. Alura changed how I support my clients. The insights are game-changing.",
      name: "ABS Sakib Zaman",
      image: TestiPic1,
    },
  ];

  return (
    <section className="px-5 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16">
      <div className="">
        <div className="bg-white mx-auto border border-[#E2E2E2] rounded-3xl px-8 py-5 mb-10 md:mb-12">
          <h1 className="text-[#374151] font-medium text-2xl md:text-3xl">
            Testimonials
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12">
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#37474F] leading-tight tracking-tight lg:w-1/2">
            Progress You Can <br /> Feel And See
          </h2>

          <p className="text-lg text-[#37474F] leading-relaxed lg:w-1/2">
            Behind every chart and streak is a human story of growth. Alura
            captures the moments of resilience, reflection, and renewal that
            make lasting recovery.
          </p>
        </div>

        <div className="overflow-x-auto pb-8 -mx-1 scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-6 px-1">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group min-w-[300px] md:min-w-[340px] lg:min-w-[360px] bg-white border border-gray-200 rounded-3xl p-8 hover:bg-[#3DC0BA] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 snap-start"
              >
                <p className="text-[15px] leading-relaxed text-[#37474F] mb-10 min-h-[140px] group-hover:text-white transition-colors">
                  {testimonial.text}
                </p>

                <div className="flex justify-end mb-8">
                  <span className="text-5xl font-light italic text-[#3DC0BA] group-hover:text-white transition-colors">
                    ”
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-2xl object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-base text-[#37474F] group-hover:text-white transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-500 group-hover:text-white transition-colors">
                      Therapist
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 mt-6 lg:hidden">
          Scroll → to see more stories
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
