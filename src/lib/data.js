export const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const categories = await res.json();
  return categories.data.news_category;
};

export const getNewsByCategoryId = async (category_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const categories = await res.json();
  return categories.data;
};
