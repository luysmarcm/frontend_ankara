import React from "react";
import Image from "next/image";
import InstaFeeds from "./InstaFeeds";

const Ankara = () => {
    return (
        <section className='bg-gris py-32 px-5 md:px-20 lg:px-32 '>
            <div className='flex justify-center mb-8'>
                <a
                    target='_blank'
                    href='https://www.instagram.com/ankaravenezuela/'
                    className='flex items-center'
                >
                    <Image
                        src='/imagen/ins.png'
                        alt='Logo'
                        width={40}
                        height={40}
                        layout='fixed'
                    />

                    <h2 className='inline-block align-middle text-primary text-3xl lg:text-5xl font-bold italic ml-2'>
                        ankaravenezuela
                    </h2>
                </a>
            </div>

            <InstaFeeds limit={4} />
        </section>
    );
};

export default Ankara;
