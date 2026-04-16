import React, { useState } from "react";
import { FAQImg } from "../../assets/data";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "What is the difference between mindfulness coaching and therapy?",
      answer:
        "Mindfulness coaching helps you stay centered and mindful in daily life. Therapy helps you uncover and heal what’s beneath the surface so real change can happen.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Most people begin to notice improvements in awareness and emotional balance within a few weeks of consistent practice.",
    },
    {
      question: "Do I need prior meditation experience?",
      answer:
        "No prior experience is required. Sessions are designed for beginners and experienced practitioners alike.",
    },
    {
      question: "Is mindfulness coaching suitable for everyone?",
      answer:
        "Yes, mindfulness coaching can benefit anyone looking to improve focus, emotional wellbeing, and stress management.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-5 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16">
      <div className="">
        <div className="bg-white border border-[#E2E2E2] rounded-3xl px-8 py-5 mb-12">
          <h1 className="text-[#374151] font-medium text-2xl md:text-3xl">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#37474F] mb-6">
              Empowering individuals to find{" "}
              <span className="text-[#3DC0BA]">inner peace</span> and navigate
              life <span className="text-[#3DC0BA]">mindfully</span>.
            </h2>
            <img
              src={FAQImg}
              alt="FAQ"
              className="rounded-3xl w-full object-contain
              "
            />
          </div>

          <div className="space-y-12">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className=" bg-white  gap-8 rounded-3xl p-5 cursor-pointer hover:border-[#3DC0BA] transition"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center p-4">
                  <h3 className="text-xl font-semibold text-[#37474F]">
                    {faq.question}
                  </h3>

                  {openIndex === index ? (
                    <IoIosArrowUp className="text-xl text-[#3DC0BA]" />
                  ) : (
                    <IoIosArrowDown className="text-xl text-[#37474F]" />
                  )}
                </div>

                {openIndex === index && (
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
