import CardBlog from "./CardBlog";

const Blog = ({ posts }) => {
	return (
		<div className="grid grid-cols-1 md:col-span-2 lg:grid-cols-2 gap-10 lg:col-span-6 justify-around drop-shadow-xl mb-8 z-0">
			{posts.map((post, i) => (
				<CardBlog key={i} post={post} />
			))}
		</div>
	);
};

export default Blog;
