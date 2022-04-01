import React from "react";
import CardBlog from "./CardBlog";

const Blog = ({ posts }) => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 col-span-2 justify-around drop-shadow-xl lg:mr-8 mb-8">
        {posts.map((post, i) => (
          <CardBlog key={i} post={post} />
        ))}   
      </div>
  );
};

export default Blog;
