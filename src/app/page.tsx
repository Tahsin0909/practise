import AllCollection from '@/components/AllCollection';
import Banner from '@/components/banner/Banner';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/header/Header';
import MensCollections from '@/components/MensCollections';
import NewArrival from '@/feature/products/NewArrival';



const page = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <NewArrival />
      <MensCollections />
      <AllCollection />
      <Footer />
    </div>
  );
};

export default page;