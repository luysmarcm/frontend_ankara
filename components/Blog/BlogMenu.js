import Search from "components/Search";
import CategoryList from "./CategoryListBlog";

const BlogMenu = ({ search, setSearch }) => {
  return (
    <div className="hidden lg:block col-start-3">
      <p className="text-black text-sm lg:text-2xl font-bold capitalize my-2">
        Buscar
      </p>
      <div className="w-3/4">
        <Search search={search} setSearch={setSearch} />
      </div>
      <CategoryList />
    </div>
  );
};

export default BlogMenu;
