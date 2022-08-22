import Search from "components/Search";
import CategoryList from "./CategoryListBlog";

const BlogMenu = ({ search, setSearch, categorias }) => {
	return (
		<div className="md:col-start-3 lg:col-start-7 lg:col-end-9 mb-10">
			<div className="hidden bg-white rounded-lg drop-shadow-xl h-full md:flex md:flex-col md:h-auto flex-center mb-4 pb-2">
				<div className="px-4">
					<p className="text-black text-sm lg:text-2xl font-bold capitalize my-2">
						Buscar
					</p>
					<div className="mb-2">
						<Search search={search} setSearch={setSearch} />
					</div>
				</div>
			</div>
			<div className="hidden bg-white rounded-lg drop-shadow-xl h-full md:flex md:flex-col md:h-auto flex-center">
				<div className="p-4">
					<CategoryList categorias={categorias} />
				</div>
			</div>
		</div>
	);
};

export default BlogMenu;
