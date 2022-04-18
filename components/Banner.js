import Carrusel from './Carrusel';

const imagenes = [
	{
		id: 1,
		alt: "Tu belleza nos inspira",
		imagen: "/imagen/banner1.png",
	},
	{
		id: 2,
		alt: "Ankara for me",
		imagen: "/imagen/banner2.png",
	},
	{
		id: 3,
		alt: "Ankara Studio",
		imagen: "/imagen/banner3.png",
	},
];

const Banner = () => {
    return (
			<section id="inicio" >
					<Carrusel  imagenes={imagenes} />		
			</section>
		);
}

export default Banner
