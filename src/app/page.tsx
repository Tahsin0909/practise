import Banner from '@/components/banner/Banner';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/header/Header';
import NewArrival from '@/feature/products/NewArrival';



const page = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <NewArrival />
      <Footer />
    </div>
  );
};

export default page;