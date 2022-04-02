const BlogLoading = () => {
  return (
    <div className="bg-negro rounded-xl w-full overflow-hidden drop-shadow-md flex flex-col flex-1 animate-pulse ">
      <div className="h-72 w-full rounded-lg shadow-lg">
        <div className="w-full h-full rounded-tl-lg rounded-tr-lg bg-gray-400 animate-pulse">
          <div className="flex relative w-full h-full">
            <div className="mt-44 mx-4 rounded-lg bottom-2 bg-gray-500 relative w-full p-3 animate-pulse opacity-80"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLoading;
