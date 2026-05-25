import Link from "next/link";
import Image from "next/image";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-md border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between bg-base-200 px-5 py-4 rounded-t-xl">
        {/* Author */}
        <div className="flex items-center gap-3">
          <Image
            src={news.author?.img}
            alt={news.author?.name || "author image"}
            width={45}
            height={45}
            className="rounded-full object-cover"
          />

          <div>
            <h2 className="font-bold text-sm">{news.author?.name}</h2>

            <p className="text-xs text-gray-500">
              {news.author?.published_date}
            </p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2 text-xl text-gray-500">
          <button className="hover:text-orange-500">
            <CiBookmark />
          </button>

          <button className="hover:text-orange-500">
            <CiShare2 />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="card-body">
        {/* Title */}
        <h2 className="card-title leading-9 text-2xl">{news.title}</h2>

        {/* Image */}
        <figure className="my-4">
          <Image
            src={news.image_url}
            alt={news.title || "news image"}
            width={800}
            height={500}
            className="rounded-xl w-full h-72 object-cover"
          />
        </figure>

        {/* Details */}
        <p className="text-gray-600 leading-8">
          {news.details.slice(0, 180)}...
        </p>

        {/* See Details Button */}
        <div className="mt-4">
          <Link
            href={`/news/${news._id}`}
            className="btn bg-orange-500 hover:bg-orange-600 text-white border-none"
          >
            See Details
          </Link>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-300 pt-4 mt-4">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-orange-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="text-gray-300" />
            </div>

            <span className="text-gray-600 font-medium">
              {news.rating.number}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
