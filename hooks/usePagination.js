import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const usePagination = (pathname) => {

	const router = useRouter();

	const [page, setPage] = useState(1);
	const [paginas, setPaginas] = useState(1);
	const [start, setStart] = useState(1);
	const [limit, setlimit] = useState(6)

	useEffect(() => {
		setStart((page - 1) * limit);
	}, [page]);

	const nextPage = () => {
		router.push({
			pathname: pathname,
			query: {
				page: page + 1,
			},
		});
	};
	const prevPage = () => {
		router.push({
			pathname: pathname,
			query: {
				page: page - 1,
			},
		});
	};

	return {
		start,
		limit,
		page,
		paginas,
		setPaginas,
		setPage,
		setStart,
		nextPage,
		prevPage,
	};
};

export default usePagination;