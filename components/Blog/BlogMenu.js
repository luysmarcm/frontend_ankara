import Search from "components/Search";
import CategoryList from "./CategoryListBlog";

const BlogMenu = ({ search, setSearch }) => {
  return (
    <div className="hidden col-start-3 bg-white rounded-xl drop-shadow-xl h-full lg:flex lg:flex-col lg:h-80 flex-center">
      <div className="px-4">
        <p className="text-black text-sm lg:text-2xl font-bold capitalize my-2">
          Buscar
        </p>
        <div className="mb-2 w-3/4">
          <Search search={search} setSearch={setSearch}/>
        </div>
        <CategoryList />
      </div>
    </div>
  );
};

export default BlogMenu;
