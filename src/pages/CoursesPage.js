import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const courses = [
  {
    id: '1',
    title: 'Prenatal Education Essentials',
    image: 'https://source.unsplash.com/600x400/?pregnancy,education',
    overview: 'Learn the foundations of prenatal health and safe birth planning.',
    audience: 'Expecting mothers, doulas, and healthcare workers',
    outcomes: ['Understand prenatal development', 'Prepare for childbirth', 'Recognize pregnancy complications'],
    tags: ['Prenatal', 'Basics', 'Health'],
    price: '$79',
    pdf: '/pdfs/prenatal-education.pdf'
  },
  {
    id: '2',
    title: 'Natural Birth Practices',
    image: 'https://source.unsplash.com/600x400/?natural-birth,midwife',
    overview: 'Explore traditional and evidence-based practices for natural birth.',
    audience: 'Midwives, birth educators, and families',
    outcomes: ['Identify natural birthing methods', 'Reduce unnecessary interventions', 'Empower birthing mothers'],
    tags: ['Natural Birth', 'Midwifery', 'Empowerment'],
    price: '$99',
    pdf: '/pdfs/natural-birth.pdf'
  }
];

const ExpandableCourseCard = ({ course }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-xl shadow-md bg-white overflow-hidden hover:shadow-xl transition duration-300">
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <img src={course.image} alt={course.title} className="w-full h-52 object-cover" />
        <div className="p-5">
          <h3 className="text-2xl font-semibold text-[#19647E]">{course.title}</h3>
          <p className="text-gray-600 mt-1 text-sm">{course.overview}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {course.tags.map((tag, idx) => (
              <span key={idx} className="bg-[#e0f2f1] text-[#19647E] text-xs px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="text-right text-[#19647E] font-bold mt-4">{course.price}</div>
        </div>
      </div>
      {isOpen && (
        <div className="px-5 pb-5 text-gray-700">
          <p className="mb-2"><strong>Audience:</strong> {course.audience}</p>
          <p className="font-semibold mb-1">Learning Outcomes:</p>
          <ul className="list-disc pl-5 mb-3 space-y-1">
            {course.outcomes.map((outcome, idx) => (
              <li key={idx}>{outcome}</li>
            ))}
          </ul>
          <a
            href={course.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-sm"
          >
            📄 Download Course PDF
          </a>
        </div>
      )}
    </div>
  );
};

export const CoursesPage = () => {
  const [search, setSearch] = useState('');

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#f5f9f7] min-h-screen py-12 px-6 md:px-16 font-inter">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-[#19647E] mb-12">AMANI Curriculum Materials</h1>
        <div className="mb-10">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#19647E]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCourses.map(course => (
            <ExpandableCourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find(course => course.id === id);
  if (!course) return <div className="p-6 text-center text-red-600">Course not found.</div>;

  return (
    <div className="bg-[#f5f9f7] min-h-screen py-10 px-4 md:px-12 font-inter">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <img src={course.image} alt={course.title} className="w-full h-64 object-cover rounded-md mb-6" />
        <h1 className="text-3xl font-bold text-[#19647E] mb-4">{course.title}</h1>
        <p className="mb-4 text-gray-700"><strong>Overview:</strong> {course.overview}</p>
        <p className="mb-4 text-gray-700"><strong>Who is this course for:</strong> {course.audience}</p>
        <div className="mb-4">
          <p className="font-semibold text-gray-800 mb-2">Learning Outcomes:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            {course.outcomes.map((outcome, idx) => <li key={idx}>{outcome}</li>)}
          </ul>
        </div>
        <a
          href={course.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline text-sm mb-4 inline-block"
        >
          📄 Download Course PDF
        </a>
        <div className="text-xl font-bold text-right text-[#19647E]">Price: {course.price}</div>
        <div className="mt-6">
          <Link to="/curriculum" className="inline-block bg-[#19647E] text-white px-6 py-2 rounded-md hover:bg-[#11485b] transition">← Back to Courses</Link>
        </div>
      </div>
    </div>
  );
};
