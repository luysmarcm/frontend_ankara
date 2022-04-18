import { useState } from "react";

const SearchMobile = ({ search, setSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
		setSearch(e.target.value);
	};

  const keyHandleChange = (e) => {
    if (e.keyCode == 13) setSearch(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const clickHandleChange = (e) => {
    setSearch(value);
  };

  return (
    <div onSubmit={onSubmit} className="col-span-2 flex md:hidden">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Buscar..."
        name="buscar"
        id="buscar"
        className="w-full h-full p-2 text-base font-normal text-black bg-rosado bg-clip-padding bg-no-repeat border-solid focus:outline-none rounded-l-md placeholder-black m-0 hover:bg-rosado2"
      />

      <button
        onClick={clickHandleChange}
        className="bg-rosado2 rounded-r-md p-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchMobile;
