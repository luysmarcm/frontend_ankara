import React from "react";
import CardBlog from "./CardBlog";
import CategoryList from "./CategoryListBlog";
import SearchBarBlog from "./SearchBarBlog";
import Pagination from "components/Pagination/Pagination";

const Blog = ({ posts, search, setSearch }) => {
  return (
    <section id="Blog">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 drop-shadow-xl px-6 lg:px-16 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 col-span-2 justify-around drop-shadow-xl lg:mr-8">
          {posts.map((post, i) => (
            <CardBlog key={i} post={post} />
          ))}
        </div>
        <div className="hidden lg:block">
          <SearchBarBlog search={search} setSearch={setSearch} />
          <CategoryList />
        </div>
      </div>
      <div>
        <Pagination />
      </div>
    </section>
  );
};

export default Blog;
