const CardValores = ({ info }) => {
	const { titulo} = info;
	return (
		<>
			<div className="flex justify-center items-center z-30 w-full h-12 bg-rosado2 rounded-md ">
				<p className="text-white text-center font-bold">{titulo}</p>
			</div>

		</>
	);
};

export default CardValores;
