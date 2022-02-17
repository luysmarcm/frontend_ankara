const Estados = () => {
  return (
		<div className="flex justify-center">
			<div className="w-48">
				<select
					className="
                    appearance-none
                    px-3
                    block
                    w-full 
                    h-full
                    text-base
                    font-normal
                    text-black
                    bg-rosado bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0"
				>
					<option selected>Selecciona tu estado</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
			</div>
		</div>
	);
}

export default Estados