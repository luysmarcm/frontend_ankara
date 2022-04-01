const MisionVision = () => {
  return (
    <section
      id="MisionVision"
      className="w-full bg-rosado place-items-center px-3 sm:px-16 md:py-32 lg:py-10 lg:px-10 space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 items-center gap-10">
        <div className="h-72 bg-rosado2 rounded-lg"></div>
        <div className="grid h-72 rounded-lg place-items-center">
          <p className="text-black text-xl text-center max-w-3xl">
            Desde hace 10 años despertamos tus sentidos con productos y
            accesorios de belleza para hombres y mujeres. Con presencia en más
            de 20 estados venezolanos nos hemos consolidado en el mercado
            nacional para brindarle bienestar y calidad a clientes mayoristas y
            al detal.
          </p>
        </div>

        <div className="grid h-72 rounded-lg items-center content-start">
          <p className="text-black text-4xl lg:text-4xl text-center font-bold">
            Misión
          </p>
          <p className="text-black text-xl text-center max-w-3xl">
            Desde hace 10 años despertamos tus sentidos con productos y
            accesorios de belleza para hombres y mujeres. Con presencia en más
            de 20 estados venezolanos nos hemos consolidado en el mercado
            nacional para brindarle bienestar y calidad a clientes mayoristas y
            al detal.
          </p>
        </div>
        <div className="grid h-72 rounded-lg items-center content-start">
          <p className="text-black text-4xl lg:text-4xl text-center font-bold">
            Visión
          </p>
          <p className="text-black text-xl text-center max-w-3xl">
            Ser referentes a nivel nacional en la distribución de productos
            cosméticos y de belleza, creando cambios que permitan el avance
            constante de todos nuestros clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MisionVision;
