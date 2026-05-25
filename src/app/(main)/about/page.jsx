import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">About Us</h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Welcome to our news platform where we deliver the latest, trusted, and
          trending news from around the world.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div>
          <img
            className="rounded-2xl shadow-lg"
            src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200&auto=format&fit=crop"
            alt="About"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>

          <p className="text-gray-600 mb-4 leading-7">
            We are a modern digital news platform dedicated to bringing
            accurate, fast, and engaging news content to our readers. Our
            mission is to keep people informed with authentic and up-to-date
            information.
          </p>

          <p className="text-gray-600 mb-6 leading-7">
            From technology and sports to business and global events, we cover
            stories that matter most. Our passionate team of writers and
            journalists work every day to deliver quality content for everyone.
          </p>

          <button className="btn bg-pink-600 hover:bg-pink-700 text-white border-none">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
