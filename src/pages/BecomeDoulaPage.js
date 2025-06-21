import React from 'react';

const BecomeDoulaPage = () => {
  return (
    <div className="bg-[#fefefe] min-h-screen py-10 px-6 md:px-12 font-inter">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#19647E] mb-6 text-center">Become a Doula in Your Community</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Are you passionate about maternal health and supporting women during childbirth?
          With Amal al-Rahim and AMANI Birth, you can become a trained doula and bring change to your rural community.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-2xl font-semibold text-[#19647E] mb-2">Why Become a Doula?</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Empower women with compassionate birth support</li>
              <li>Reduce preventable birth complications in low-resource areas</li>
              <li>Gain culturally-relevant training through AMANI Birth</li>
              <li>Support families before, during, and after childbirth</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#19647E] mb-2">About AMANI Birth Training</h2>
            <p className="text-gray-700 mb-4">
              AMANI (Assisting Mothers for Active, Natural, Instinctive birth) provides evidence-based,
              faith-conscious childbirth education and doula training. It is self-paced, globally accessible, and ideal for rural learners.
            </p>
            <a
              href="https://amanibirth.com" // Replace with direct sign-up link if available
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#19647E] text-white px-6 py-2 rounded-md hover:bg-[#144b60] transition"
            >
              Visit AMANI Birth Site
            </a>
          </div>
        </div>

        <div className="bg-[#f0f9f8] rounded-md p-6 shadow-md">
          <h3 className="text-xl font-semibold text-[#19647E] mb-4">Ready to Take the First Step?</h3>
          <p className="mb-4 text-gray-700">Fill out the form below to join our next orientation session or get support registering for AMANI Birth training.</p>

          <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll follow up with more information."); }}>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input type="text" name="name" placeholder="Your Name" required className="p-3 border border-gray-300 rounded" />
              <input type="email" name="email" placeholder="Your Email" required className="p-3 border border-gray-300 rounded" />
            </div>
            <textarea name="message" rows="4" placeholder="Tell us why you want to become a doula..." required className="w-full p-3 border border-gray-300 rounded mb-4"></textarea>
            <button type="submit" className="bg-[#19647E] text-white px-6 py-2 rounded-md hover:bg-[#11485b]">Submit Interest</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeDoulaPage;
