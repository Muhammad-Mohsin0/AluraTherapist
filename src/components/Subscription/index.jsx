import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

const Subscription = () => {
  const plans = [
    {
      name: "Reset Starter",
      price: "Free",
      period: "Trail For 7 days",
      buttonText: "Get Price Estimate",
      features: [
        "Up to 10 active clients",
        "Client dashboard & insights",
        "Progress charts",
        "Guided CBT module library",
        "HIPAA-compliant data security",
        "Email support",
      ],
    },
    {
      name: "Reset Plus",
      price: "$120",
      period: "/year",
      subtitle: "Annual Subscription",
      buttonText: "Get Price Estimate",
      features: [
        "All Solo features, plus",
        "Up to 50 active clients",
        "Smart Alerts for risk detection",
        "Assignment management",
        "Automated progress reports",
        "In-app secure messaging",
      ],
    },
    {
      name: "Reset Pro",
      price: "$240",
      period: "/year",
      subtitle: "Annual Subscription",
      buttonText: "Get Price Estimate",
      features: [
        "Unlimited clients",
        "Multi-therapist dashboard",
        "Custom reporting & data export",
        "Integration with EHR / case system",
        "Admin & supervisor roles",
        "Dedicated account manager",
      ],
    },
  ];

  return (
    <section className="px-5 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16">
      <div className="">
        <div className="bg-white mx-auto border border-[#E2E2E2] rounded-3xl px-8 py-5 mb-10 md:mb-12">
          <h1 className="text-[#374151] font-medium text-2xl md:text-3xl">
            Plan & Subscription
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#37474F] leading-tight tracking-tight">
              Find the Plan <br className="hidden sm:block" />
              That Fits Your Workflow
            </h2>
          </div>

          <div className="text-lg text-[#37474F] leading-relaxed">
            <p>
              Choose from flexible subscription options <br />designed for solo
              practitioners, group practices, and recovery programs.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-[#3DC0BA] hover:bg-[#3DC0BA] transition-all duration-300 cursor-pointer bg-white"
            >
              <div className="p-8 transition-all duration-300 group-hover:bg-[#3DC0BA] group-hover:text-white">
                <h3 className="text-2xl font-semibold mb-1 transition-colors text-[#37474F] group-hover:text-white">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 transition-colors group-hover:text-white/80">
                  Starting at
                </p>

                <div className="mt-4 mb-2">
                  <span className="text-5xl font-medium text-[#3DC0BA] transition-colors group-hover:text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-xl font-medium ml-1 text-gray-500 transition-colors group-hover:text-white/80">
                      {plan.period}
                    </span>
                  )}
                </div>

                {plan.subtitle && (
                  <p className="text-sm text-gray-500 transition-colors group-hover:text-white/80">
                    {plan.subtitle}
                  </p>
                )}
              </div>

              <div className="px-8 pt-6 pb-8 border-b border-gray-100 bg-white group-hover:bg-[#3DC0BA] transition-all duration-300">
                <button className="w-full py-3.5 rounded-2xl font-medium transition-all duration-300 bg-[#3DC0BA] text-white group-hover:bg-white group-hover:text-[#3DC0BA]">
                  {plan.buttonText}
                </button>
              </div>

              <div className="p-8 space-y-4 bg-white group-hover:bg-[#3DC0BA] transition-all duration-300">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <IoCheckmarkCircle className="text-[#2DD272] text-2xl transition-colors group-hover:text-white" />
                    </div>
                    <span className="text-[#37474F] leading-relaxed text-[15px] transition-colors group-hover:text-white">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscription;
