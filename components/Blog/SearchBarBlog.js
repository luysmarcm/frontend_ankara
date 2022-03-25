import Image from "next/image";

const SearchBarBlog = () => {
  return (
    <>
      <p className="text-black text-sm lg:text-2xl font-bold capitalize mb-2">
        Buscar
      </p>
      <div
        // onSubmit={onSubmit}
        className=" hidden lg:flex w-3/4">
        <input
          onChange=""
          type="text"
          placeholder="Buscar"
          name="buscar"
          id="buscar"
          className="block
                    w-full 
                    h-full
                    p-2
                    text-base
                    font-normal
                    text-black
                    bg-rosado bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    placeholder-black
                    m-0"
        />

        <button className="bg-rosado2 rounded-r-md p-2 ">
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
    </>
  );
};

export default SearchBarBlog;
