import Image from "next/image";

const SearchBarBlog = () => {
  return (
    <div className="flex w-3/4">
      <input
        type="text"
        id="rounded-email"
        className="h-8 rounded-lg border-transparent flex-1 appearance-none w-full px-4 bg-primary text-black placeholder-white shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-white 
        focus:bg-gris 
        focus: placerholder- black focus:border-transparent
        mr-2"
        placeholder="Buscar"
      />
      <button>
        <Image
          className="h-8 rounded-lg border-transparent flex-1 appearance-none w-full px-4 bg-primary shadow-sm text-base"
          src="/imagen/searchicon.svg"
          alt="Busqueda"
          height={32}
          width={32}
        />
      </button>
    </div>
  );
}

export default SearchBarBlog;