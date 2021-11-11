// import {useRouter} from "next/router";
import Image from "next/image";
import Logo from "../public/imagen/logo.svg";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const NavBar = ({navigation}) => {
    // const router = useRouter();
    // console.log(router);
    return (
        <nav className='bg-black px-8 py-4 flex items-center justify-between fixed z-50 w-full'>
            <div className='relative flex items-center justify-between w-full'>
                <div
                    style={{width: "35px"}}
                >
                    <Image src={Logo} alt='Logo' />
                </div>
                <div className='flex space-x-4'>
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current
                                    ? "bg-primary text-fondo"
                                    : "text-white hover:text-primary",
                                "px-3 py-2text-lg"
                            )}
                            aria-current={item.current ? "page" : undefined}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
