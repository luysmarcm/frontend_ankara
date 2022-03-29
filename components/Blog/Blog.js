import React from "react";
import CardBlog from "./CardBlog";
import CategoryList from "./CategoryListBlog";
import SearchBarBlog from "./SearchBarBlog";

const Blog = ({posts}) => {

  return (
    <section id="Blog">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 drop-shadow-xl py-8 px-3 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 col-span-2 justify-around  drop-shadow-xl ">
          {posts.map((post, i) => (
            <CardBlog key={i} post={post} />
          ))}
        </div>
        <div className="hidden lg:block">
          <SearchBarBlog />
          <CategoryList />
        </div>
      </div>
    </section>
  );
};

export default Blog;
