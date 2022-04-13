import Image from "next/image";

const NosotrosVideoBanner = () => {
  return (
    <section id="NosotrosVideoBanner">
      <div className="w-full bg-rosado2">
        <div className="w-full h-full relative select-none bg-heading bg-cover bg-no-repeat bg-scroll">
          <Image
            alt="..."
            src="/imagen/banner5.png"
            className="object-cover"
            layout="responsive"
            width={1920}
            height={900}
          />
        </div>
      </div>
    </section>
  );
};

export default NosotrosVideoBanner;
