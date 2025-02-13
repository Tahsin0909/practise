import Banner from '@/components/banner/Banner';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/header/Header';
import React from 'react';

const page = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
};

export default page;