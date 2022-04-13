import CardValores from "components/Card/CardValores";
import HeadingPage from "components/HeadingPage";
import HeadingTienda from "components/HeadingPage";
import Layout from "components/Layout/Index";
import MisionVision from "components/MisionVision";
import NosotrosVideoBanner from "components/NosotrosVideoBanner";
import SeoComponent from "components/SeoComponent";
import React from "react";
import NosotrosCarrusel from "./../components/NosotrosCarrusel";

const valores = [
  {
    id: 1,
    titulo: "Evolucion",
    description:
      "Si de cuidar tu piel se trata, en ANKARA nos encargamos de brindarte productos de calidad para el cuerpo y el rostro. ¡Regálale suavidad y salud a tu piel con ANKARA!",
    imagen: "/imagen/maquillaje.jpg",
  },
  {
    id: 2,
    titulo: "Familiaridad",
    description:
      "Si de cuidar tu piel se trata, en ANKARA nos encargamos de brindarte productos de calidad para el cuerpo y el rostro. ¡Regálale suavidad y salud a tu piel con ANKARA!",
    imagen: "/imagen/maquillaje.jpg",
  },
  {
    id: 3,
    titulo: "Espiritualidad",
    description:
      "Si de cuidar tu piel se trata, en ANKARA nos encargamos de brindarte productos de calidad para el cuerpo y el rostro. ¡Regálale suavidad y salud a tu piel con ANKARA!",
    imagen: "/imagen/maquillaje.jpg",
  },
  {
    id: 4,
    titulo: "Compromiso",
    description:
      "Si de cuidar tu piel se trata, en ANKARA nos encargamos de brindarte productos de calidad para el cuerpo y el rostro. ¡Regálale suavidad y salud a tu piel con ANKARA!",
    imagen: "/imagen/maquillaje.jpg",
  },
  {
    id: 5,
    titulo: "Trabajo en equipo ",
    description:
      "Si de cuidar tu piel se trata, en ANKARA nos encargamos de brindarte productos de calidad para el cuerpo y el rostro. ¡Regálale suavidad y salud a tu piel con ANKARA!",
    imagen: "/imagen/maquillaje.jpg",
  },
  {
    id: 6,
    titulo: "Oportunidad",
    description:
      "Si de cuidar tu piel se trata, en ANKARA nos encargamos de brindarte productos de calidad para el cuerpo y el rostro. ¡Regálale suavidad y salud a tu piel con ANKARA!",
    imagen: "/imagen/maquillaje.jpg",
  },
];

const nosotros = () => {
  return (
    <Layout>
      <SeoComponent
        title="Ankara | Nosotros"
        description="Nosotros"
        image="/imagen/anka.png"
      />
      <section>
        <NosotrosVideoBanner />
        <NosotrosCarrusel />
        <MisionVision />
      </section>
    </Layout>
  );
};

export default nosotros;
