import Search from "components/Search";
import CategoryList from "./CategoryListBlog";

const BlogMenu = ({ search, setSearch }) => {
  return (
    <div className="hidden col-start-3 bg-white rounded-xl overflow-hidden drop-shadow-xl flex-1 h-full lg:flex lg:flex-col lg:h-auto">
      <p className="text-black text-sm lg:text-2xl font-bold capitalize my-2">
        Buscar
      </p>
      <div className="mb-2">
        <Search search={search} setSearch={setSearch} />
      </div>
      <CategoryList />
    </div>
  );
};

export default BlogMenu;
