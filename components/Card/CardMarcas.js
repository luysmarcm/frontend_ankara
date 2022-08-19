import Image from "next/image";

const CardMarcas = ({marca}) => {
    const {nombre, description, imagen} = marca;

    return (
        <section className=' rounded-xl lg:flex lg:flex-col overflow-hidden py-5  justify-items-center '>
            <div className='relative flex-1 w-2/4'>
                <Image
                    src={imagen}
                    alt={nombre}
                    width={900}
                    height={400}
                    layout='responsive'
                    priority
                    className='block'
                />
            </div>
            

            <div className='space-y-4 lg:w-7/12 xl:w-8/12 p-12 my-auto'>
                <p className='mt-2 text-black text-lg md:text-xl text-center lg:text-xl'>
                    {description}
                </p>
            </div>
        </section>
    );
};

export default CardMarcas;
