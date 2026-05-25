import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { redirect } from "next/navigation";

// const getCategories = async () => {
//   const res = await fetch(
//     "https://openapi.programming-hero.com/api/news/categories",
//   );
//   const categories = await res.json();
//   return categories.data.news_category;
// };

// const getNewsByCategoryId = async (category_id) => {
//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/news/category/${category_id}`,
//   );
//   const categories = await res.json();
//   return categories.data;
// };
const defaultCategoryId = "01";

export default async function Home() {
  // const categories = await getCategories();
  // console.log(categories);

  // const news = await getNewsByCategoryId("03");
  // console.log("news", news);

  return redirect(`/category/${defaultCategoryId}`);

  // <div className="container mx-auto grid grid-cols-12 gap-4 my-[50px]">
  //   <div className="col-span-3">
  //     <LeftSidebar categories={categories} activeId={null} />
  //   </div>

  //   <div className="font-bold text-3xl bg-purple-100 col-span-6">
  //     <h2 className="font-bold text-2xl mb-4">All News</h2>
  //     <div className="space-y-4 mt-6">
  //       {news.map((n) => {
  //         return (
  //           <div key={n._id} className="p-6 rounded-md border">
  //             {n.title}
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  //   <div className="col-span-3">
  //     <RightSidebar />
  //   </div>
  // </div>
}
