import SeoComponent from "/components/SeoComponent";
import Layout from "/components/Layout/Index";
import HeadingPage from "components/HeadingPage";
import Breadcrumb from "components/Breadcrumb";
import Blogs from './../../components/Blog/Blogs';

const Blog = () => {
  return (
    <Layout>
      <SeoComponent
        title="Ankara"
        description="Desde hace 10 años despertamos tus sentidos con productos y accesorios de belleza para hombres y mujeres. Con presencia en más de 20 estados venezolanos nos hemos consolidado en el mercado nacional para brindarle bienestar y calidad a clientes mayoristas y al detal"
        image="/imagen/anka.png"
      />
      <section>

        <HeadingPage titulo="Blog"/>
        <div className="flex flex-col-2 place-content-between  px-6 lg:px-16 bg-white shadow-lg p-5">
        <Breadcrumb /></div>
        <Blogs />
      </section>
    </Layout>
  );
};

export default Blog;