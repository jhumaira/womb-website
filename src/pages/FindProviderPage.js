// src/pages/FindProviderPage.js
import React from 'react';

const FindProviderPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-inter">
      {/* Header */}
      <div className="bg-[#e8f5e9] py-12 px-4 text-center">
        <h1 className="text-4xl font-bold text-[#19647E]">Find a Maternal Health Advocate Near You</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Amal al-Rahim connects you with compassionate, culturally aware doulas and maternal advocates trained to serve rural and low-resource communities.
        </p>
      </div>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">How This Directory Works</h2>
        <ol className="space-y-6 list-decimal list-inside text-gray-700">
          <li><strong>Search or filter</strong> by region to discover trained birth advocates in your area.</li>
          <li><strong>Explore profiles</strong> with their experience, spoken languages, spiritual values, and care specialties.</li>
          <li><strong>Reach out</strong> directly or request support via our contact team if you need help connecting.</li>
        </ol>
      </section>

      {/* Role Description */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-[#19647E] mb-4">What Does a Maternal Advocate Do?</h3>
          <p className="text-gray-700">
            Maternal advocates are women trained to walk alongside mothers before, during, and after birth—
            offering emotional support, spiritual encouragement, and practical education grounded in faith, safety, and cultural awareness.
            They serve especially where hospitals, midwives, and modern resources may be hard to access.
          </p>
        </div>
      </section>

      {/* Advocate Sign-Up Form */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-center text-[#19647E] mb-6">Apply to Become a Community Advocate</h3>
          <p className="text-gray-700 text-center mb-8">
            If you’re passionate about supporting safe, dignified birth experiences in underserved communities,
            we invite you to apply for training through our AMANI Birth-aligned program.
          </p>

          <div className="text-center mt-8">
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLScJprPOkRRyqPu-UhlFlgJI0N1C37Bv6oJL4foaibOi3FRLAw/viewform?usp=header"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-[#19647E] hover:bg-[#11485b] text-white px-6 py-3 rounded-md font-medium transition duration-300"
  >
    Fill Out the Advocate Sign-Up Form
  </a>
</div>

        </div>
      </section>
    </div>
  );
};

export default FindProviderPage;
