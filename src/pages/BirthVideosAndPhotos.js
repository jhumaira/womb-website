// src/pages/BirthVideosAndPhotos.js
import React from 'react';

const BirthVideosAndPhotos = () => {
  const videos = [
    {
      title: "What is a Doula?",
      url: "https://www.youtube.com/embed/YmNZOdQYPp0"
    },
    {
      title: "Day in the Life of a Birth Doula",
      url: "https://www.youtube.com/embed/iHXHHXtzHhQ"
    },
    {
      title: "How to Become a Certified Doula",
      url: "https://www.youtube.com/embed/ls6wsVrlyVY"
    },
    {
      title: "Birth in the Quran",
      url: "https://www.youtube.com/embed/oHgI2u10Xm4"
    }
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Doula Training Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden shadow-md">
            <iframe
              width="100%"
              height="280"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4 bg-white">
              <h2 className="text-lg font-semibold">{video.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirthVideosAndPhotos;
