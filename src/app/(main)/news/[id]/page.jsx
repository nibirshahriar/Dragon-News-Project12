import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const newsDetails = await getNewsDetailsById(id);

  return {
    title: `The Dragon News - ${newsDetails.title}`,
  };
};

const NewsDetailPage = async ({ params }) => {
  const { id } = await params;

  const newsDetails = await getNewsDetailsById(id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-12 gap-6">
      {/* Main Content */}
      <div className="col-span-9">
        <h2 className="text-2xl font-bold mb-6">Dragon News</h2>

        <div className="border border-gray-200 rounded-xl p-5 shadow-sm">
          <Image
            src={newsDetails.image_url}
            alt={newsDetails.title}
            width={1000}
            height={600}
            className="w-full rounded-xl object-cover"
          />

          <h1 className="text-3xl font-bold mt-6 leading-12">
            {newsDetails.title}
          </h1>

          <p className="text-gray-600 leading-8 mt-5">{newsDetails.details}</p>

          <div className="mt-8">
            <Link
              href={`/category/${newsDetails.category_id}`}
              className="btn bg-pink-600 hover:bg-pink-700 text-white border-none"
            >
              ← All news in this category
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsDetailPage;
