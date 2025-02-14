import Banner from '@/components/banner/Banner';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/header/Header';
import ProductCardApp from '@/feature/products/card/ProductsCard';




const page = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Footer />
      <ProductCardApp />
    </div>
  );
};

export default page;