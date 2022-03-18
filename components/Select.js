const Select = ({
	value,
	placeholder,
	options,
	name,
	onChange,
	objKeyValue,
	objKeyString,
}) => {
	const stringToView = objKeyString.split(",");

	return (
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
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			id={name}
			name={name}
		>
			<option selected>Selecciona tu estado</option>
			{options &&
				options.map((opt) =>
					stringToView.length === 1 ? (
						<option value={opt[objKeyValue]} key={opt[objKeyValue]}>
							{opt[objKeyString]}
						</option>
					) : (
						<option value={opt[objKeyValue]} key={opt[objKeyValue]}>
							{`${opt[stringToView[0]]} (${opt[stringToView[1]].nombre})`}
						</option>
					)
				)}
		</select>
	);
};

export default Select;
