import React from "react";
import Image from "next/image";

const links = [
	{
		title: "Inicio",
		path: "/",
	},
	{
		title: "Nosotros",
		path: "/nosotros",
	},
	{
		title: "Tiendas",
		path: "/tiendas",
	},
	{
		title: "Blog",
		path: "/blog",
	},
];

const Footer = () => {
    return (
        <footer className='bg-black px-6 pt-16 md:px-20 '>
            <div className='relative max-w-xs mx-auto md:mx-0'>
                <Image
                    src='/imagen/ankara.svg'
                    alt='Logo'
                    width={60}
                    height={30}
                    layout='responsive'
                    priority
                />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:space-y-0 pb-8 md:pb-16 '>
                <div className='flex pb-10 lg:pb-0'>
                    <div className='relative w-16 mr-4'>
                        <Image
                            src='/imagen/ico.png'
                            alt='Logo'
                            width={50}
                            height={50}
                        />
                    </div>
                    <h3 className='text-white text-lg text-center lg:text-justify'>
                        Ankara 2018 C.A. J-400149150
                        {""} Edificio Industrial Los Hermanos Avenida Principal
                        Los Cortijos De Lourdes Caracas.
                    </h3>
                </div>

                <div className="mb-10">
                    <div className='text-white text-2xl lg:text-3xl italic mb-6 text-center'>
                        Nuestras Redes
                    </div>

                    <div className='flex  justify-center'>
                        <a
                            target='_blank'
                            href='https://www.instagram.com/ankaravenezuela/'
                            rel='noopener noreferrer'
                            className='text-primary  lg:text-5xl font-bold mr-4'
                            rel='noopener'
                        >
                            <Image
                                src='/imagen/instagram.png'
                                alt='Instagram'
                                width={50}
                                height={50}
                                className=''
                            />
                        </a>

                        <a
                            target='_blank'
                            href='https://www.tiktok.com/@ankaravenezuela?'
                            rel='noopener noreferrer'
                            className='text-primary text-5xl  font-bold'
                            rel='noopener'
                        >
                            <Image
                                src='/imagen/tiktok.png'
                                alt='Tik Tok'
                                width={50}
                                height={50}
                                className=''
                            />
                        </a>
                    </div>
                </div>

                <div>
                    <div className='text-white text-2xl lg:text-3xl italic text-center mb-5'>
                        Navegación
                    </div>

                    <ul className='grid grid-cols-1 place-items-center lg:place-content-start lg:grid-cols-2 text-xl lg:text-2xl text-white '>
                        {links.map((item) => (
                            <li key={item.title} className="py-1 lg:py-0">
                                <a
                                    href={item.path}
                                    className='px-3 rounded-md text-md lg:text-lg text-white hover:text-primary'
                                    // aria-current={
                                    //     item.current ? "page" : undefined
                                    // }
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='flex justify-center p-8 '>
                <span className='text-white text-lg text-center'>
                    Copyright Ankara C.A.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
