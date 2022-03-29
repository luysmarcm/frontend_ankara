const Pagination = ({ paginas, page, prevPage, nextPage }) => {

	return (
		<div className="flex justify-center items-center h-50 gap-10 pb-8" >
			{page >= 2 && (
				<button
        className="bg-rosado text-black font-bold py-2 px-4 rounded w-32"
        isDisabled={page === 1}
        onClick={prevPage}>Anterior</button>
			)}
			{page < paginas && (
				<button
        className="bg-rosado2 text-black font-bold py-2 px-4 rounded w-32"
        isDisabled={page === paginas}
        onClick={nextPage}>Siguiente</button>
			)}
		</div>
	);
};

export default Pagination;
