import React from "react";

const NewsDetailPage = async ({ params }) => {
  const {id} = await params;
  console.log(id);
  return <div>News Detail Page</div>;
};

export default NewsDetailPage;
