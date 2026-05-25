import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import React from "react";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;

  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 my-[50px]">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={id} />
      </div>

      <div className="text-lg  col-span-6">
        <h2 className="font-bold text-2xl mb-4">News</h2>
        <div className="space-y-4 mt-6">
          {news.length > 0 ? (
            news.map((n) => {
              return <NewsCard key={n._id} news={n} />;
            })
          ) : (
            <p className="text-center text-gray-500">
              No news found for this category.
            </p>
          )}
        </div>
      </div>
      <div className="col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
