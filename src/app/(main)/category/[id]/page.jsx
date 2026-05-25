import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import React from "react";

const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const categories = await res.json();
  return categories.data.news_category;
};

const getNewsByCategoryId = async (category_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const categories = await res.json();
  return categories.data;
};

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;

  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-[50px]">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={id} />
      </div>

      <div className="font-bold text-3xl bg-purple-100 col-span-6">
        <h2 className="font-bold text-2xl mb-4">All News</h2>
        <div className="space-y-4 mt-6">
          {news.length > 0 ? (
            news.map((n) => {
              return (
                <div key={n._id} className="p-6 rounded-md border">
                  {n.title}
                </div>
              );
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
