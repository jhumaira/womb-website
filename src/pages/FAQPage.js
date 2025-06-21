import React from 'react';

const FAQPage = () => {
  const faqs = [
    {
      question: "What is Amal al-Rahim?",
      answer: "Amal al-Rahim is a global maternal health education hub that provides culturally-sensitive resources to support safe, natural births—especially in underserved areas."
    },
    {
      question: "Who is this website for?",
      answer: "This site is designed for birth workers, doulas, midwives, community health advocates, and mothers seeking natural, faith-aligned birthing support."
    },
    {
      question: "Are the resources free?",
      answer: "Yes! All downloadable materials, media links, and training guides are provided at no cost to make them accessible to all communities."
    },
    {
      question: "Can I use these materials in my local clinic or workshop?",
      answer: "Yes. You are welcome to use, print, and share these resources for non-commercial, educational use in your communities."
    },
    {
      question: "How can I become a local advocate?",
      answer: "Complete the interest form on the home page, and our team will follow up with guidance, training, and support options tailored to your location."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-green-700">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-800">{faq.question}</h2>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
