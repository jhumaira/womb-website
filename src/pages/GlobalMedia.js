// src/pages/GlobalMedia.js
import React from 'react';

const mediaResources = [
  {
    country: "Indonesia",
    title: "Midwifery and Maternal Health",
    description:
      "A video series by the Indonesian Ministry of Health promoting safe deliveries in rural communities with the support of bidan (midwives).",
    url: "https://www.youtube.com/watch?v=v1c_1h6Dn6U"
  },
  {
    country: "Pakistan",
    title: "Birth Practices in Punjab",
    description:
      "An Urdu-language documentary highlighting traditional birth attendants (dais) and the integration of community midwives (CMWs).",
    url: "https://www.youtube.com/watch?v=1TzEzgYKNQg"
  },
  {
    country: "Jordan",
    title: "UNFPA Midwifery Training in Refugee Camps",
    description:
      "Global Health Media footage of midwife training and maternal care for displaced Syrian women in Jordanian refugee camps.",
    url: "https://www.youtube.com/watch?v=i5Hw2vF2aAo"
  },
  {
    country: "Nigeria",
    title: "Islamic Perspective on Maternal Health",
    description:
      "A panel on faith-based maternal care in Hausa communities, incorporating Islamic guidance and public health messaging.",
    url: "https://www.youtube.com/watch?v=r5Gg2hzYIn4"
  },
  {
    country: "Egypt",
    title: "Community Birth Education in Arabic",
    description:
      "A culturally tailored maternal health campaign by Egyptian NGOs using media to empower village-based women.",
    url: "https://www.youtube.com/watch?v=CXKXH7YIbSk"
  }
];

const GlobalMedia = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Global Media Resources</h1>
      <p className="text-center mb-6 text-gray-700">
        Videos and resources related to maternal and newborn health across the Muslim world.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mediaResources.map((media, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden">
            <iframe
              className="w-full"
              height="250"
              src={media.url.replace("watch?v=", "embed/")}
              title={media.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{media.country}</h2>
              <p className="text-gray-600 font-medium">{media.title}</p>
              <p className="text-gray-500 text-sm mt-1">{media.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalMedia;
