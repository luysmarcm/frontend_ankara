const StoreLoading = () => {
  return (
	
			<div className="bg-negro rounded-xl w-full overflow-hidden drop-shadow-md flex flex-col flex-1 animate-pulse ">
				<div className="w-96 rounded-lg shadow-lg">
					<div className="w-full h-48 rounded-tl-lg rounded-tr-lg bg-gray-400 animate-pulse"></div>

					<div className="p-10 grid grid-cols-1 w-3/5 gap-3">
						<div className="col-span-3 h-2 rounded-md bg-gray-400 animate-pulse"></div>
						<div className="col-span-1 h-2 rounded-md bg-gray-400 animate-pulse"></div>
						<div className="col-span-4 h-2 rounded-md bg-gray-400 animate-pulse"></div>
						<div className="col-span-1 h-2 rounded-md bg-gray-400 animate-pulse"></div>
						<div className="col-span-3 h-2 rounded-md bg-gray-400 animate-pulse"></div>
					</div>
				</div>
			</div>
	
	);
};

export default StoreLoading;
