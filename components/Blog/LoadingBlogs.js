import BlogLoading from './BlogLoading';

const LoadingBlogs = () => {
  return (
    <div className="grid grid-cols-1 md:col-span-2 lg:grid-cols-2 gap-10 lg:col-span-6 justify-around drop-shadow-xl mb-8">
      <BlogLoading />
      <BlogLoading />
      <BlogLoading />
      <BlogLoading />
    </div>
  );
};

export default LoadingBlogs;
