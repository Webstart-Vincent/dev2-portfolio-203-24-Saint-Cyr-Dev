import React from 'react';
import Header from '@/app/composants/headers';
import BgAnimation from '@/app/composants/BgAnimation';

const Contact = () => {
  return (
    
    <>
    <div className='h-screen'>  
      <div className="hidden lg:block absolute inset-0 background w-full h-full object-cover bg-hero-pattern"></div>

      <BgAnimation />

      <Header />
    </div>
    </>
  );
};

export default Contact;
