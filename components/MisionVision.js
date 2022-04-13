import Image from "next/image";

const titulo = [
  "Evolución",
  "Familiaridad",
  "Espiritualidad",
  "Compromiso",
  "Trabajo en Equipo",
  "Oportunidad",
];

const MisionVision = () => {
  return (
    <section id="NosotrosVideoBanner">
      <div className="w-full bg-white">
        <div className="w-full h-full relative select-none bg-heading bg-cover bg-no-repeat bg-scroll">
          <Image
            alt="..."
            src="/imagen/banner6.png"
            className="object-cover"
            layout="responsive"
            width={1920}
            height={1100}
          />
        </div>
      </div>
      <div className="w-full h-auto bg-white grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 p-4 lg:px-12 -mt-10 pb-8 lg:pb-20">
        <div className="flex justify-center items-center z-30 w-full h-12 bg-rosado2 rounded-md ">
          <p className="text-white text-center font-bold">{titulo[0]}</p>
        </div>
        <div className="flex justify-center items-center z-30 w-full h-12 bg-rosado2 rounded-md">
          <p className="text-white text-center font-bold">{titulo[1]}</p>
        </div>
        <div className="flex justify-center items-center z-30 w-full h-12 bg-rosado2 rounded-md">
          <p className="text-white text-center font-bold">{titulo[2]}</p>
        </div>
        <div className="flex justify-center items-center z-30 w-full h-12 bg-rosado2 rounded-md">
          <p className="text-white text-center font-bold">{titulo[3]}</p>
        </div>
        <div className="flex justify-center items-center z-30 w-full h-12 bg-rosado2 rounded-md">
          <p className="text-white text-center font-bold">{titulo[4]}</p>
        </div>
        <div className="flex justify-center items-center z-30 w-full h-12 bg-rosado2 rounded-md">
          <p className="text-white text-center font-bold">{titulo[5]}</p>
        </div>
      </div>
    </section>
  );
};

export default MisionVision;
