import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    id: 1,
    title: "Bangladesh Wins Historic Cricket Series",
  },
  {
    id: 2,
    title: "New AI Technology Changes the Future",
  },
  {
    id: 3,
    title: "Global Market Sees Major Growth",
  },
  {
    id: 4,
    title: "Climate Summit 2026 Begins Today",
  },
  {
    id: 5,
    title: "Football League Final Ends Dramatically",
  },
];

const BreakingNews = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center gap-4 bg-gray-100 p-3">
        <button className="btn bg-pink-600 text-white border-none">
          Latest News
        </button>

        <div className="flex-1 overflow-hidden">
          <Marquee pauseOnHover={true} speed={60} gradient={false}>
            {news.map((n) => (
              <span key={n.id} className="mr-10 font-medium">
                🔴 {n.title}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
