import React from "react";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="font-bold text-2xl mb-4">All Categories</h2>
      <ul className="flex flex-col gap-3 mt-6">
        {categories.map((category) => {
          return (
            <li
              key={category.category_id}
              className={`${activeId === category.category_id ? "bg-slate-100" : ""} p-2 rounded-md font-bold text-center text-lg`}
            >
              {category.category_name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
