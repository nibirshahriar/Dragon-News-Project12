import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";

const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const categories = await res.json();
  return categories.data.news_category;
};

export default async function Home() {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-[50px]">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={null} />
      </div>

      <div className="font-bold text-3xl bg-purple-100 col-span-6">
        All News
      </div>
      <div className="col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
}
