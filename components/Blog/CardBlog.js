import Image from "next/image";

const CardBlog = () => {
  const blog = [
    {
      quote:
        "I did it for me. I liked it. I was good at it. And... I was really... I was alive.",
      author: "Walter White",
    },
    {
      quote: "Better call Saul!",
      author: "Saul Goodman",
    },
    {
      quote: "I watched Jane die. I was there. And I watched her die.",
      author: "Walter White",
    },
    {
      quote: "My name is ASAC Schrader, and you can go f*ck yourself.",
      author: "Hank Schrader",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-col-2 gap-10 m-auto">
      <div className="overflow-hidden shadow-lg rounded-lg h-80 w-80 cursor-pointer m-auto">
        <a href="#" className="flex relative w-full h-full">
          <Image
            alt="blog photo"
            src="/imagen/endertorres.png"
            className="max-h-10 w-full object-cover"
            layout="fill"></Image>
          <div className="mt-48 mx-4 bottom-2 rounded-lg opacity-80 bg-white relative w-full p-3">
            <p className="text-black text-xl font-bold mb-2">Titulo</p>
            <p className="text-black font-light text-md">
              Descripción corta de la publicación, debe tener 2 lineas
            </p>
            <div className="flex flex-col content-end ml-4">
              <p className="text-sm text-black text-right ">20 mar 2029</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CardBlog;
