import React from "react";

export const metadata = {
  title: "The Dragon News - Careers",
};

const CareerPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Careers</h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Join our passionate team and help shape the future of digital news and
          media.
        </p>
      </div>

      {/* Career Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-3">Frontend Developer</h2>

          <p className="text-gray-600 mb-5">
            Build beautiful and responsive user interfaces using React, Next.js,
            and Tailwind CSS.
          </p>

          <button className="btn bg-pink-600 text-white border-none hover:bg-pink-700">
            Apply Now
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-3">Content Writer</h2>

          <p className="text-gray-600 mb-5">
            Create engaging and informative articles covering technology,
            sports, business, and global news.
          </p>

          <button className="btn bg-pink-600 text-white border-none hover:bg-pink-700">
            Apply Now
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-3">UI/UX Designer</h2>

          <p className="text-gray-600 mb-5">
            Design modern and user-friendly experiences that make our platform
            easy and enjoyable to use.
          </p>

          <button className="btn bg-pink-600 text-white border-none hover:bg-pink-700">
            Apply Now
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 bg-gray-100 rounded-2xl p-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Why Work With Us?
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto leading-7">
          We believe in innovation, creativity, and teamwork. Our company
          provides a supportive environment where you can grow your skills, work
          on exciting projects, and make a real impact.
        </p>
      </div>
    </div>
  );
};

export default CareerPage;
