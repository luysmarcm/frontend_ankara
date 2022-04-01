import BlogLoading from './BlogLoading';

const LoadingBlogs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 col-start-1 col-end-3 gap-10 lg:mr-8 mb-8">
      <BlogLoading />
      <BlogLoading />
      <BlogLoading />
      <BlogLoading />
    </div>
  );
};

export default LoadingBlogs;
