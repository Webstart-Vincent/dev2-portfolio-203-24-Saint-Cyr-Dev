import React from 'react';
import Header from '@/app/composants/headers';
import Image from 'next/image';

const Contact = () => {
  return (
    
    <>
    <div className='h-screen'>  
      <Header />

      <div className='bg-white'>
        <div className='pt-12'>
          <h2 class="text-[#3F0777] font-Irish text-2xl sm:text-3xl lg:text-5xl text-center ">Contact Us</h2>
        </div>
        <div className='md:flex sm:gap-2'>
            <div class="w-full py-8 lg:py-16 px-10 sm:px-16 mx-auto max-w-screen-md">
                <form action="#" class="space-y-8">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Votre email</label>
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Objet</label>
                        <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Votre message</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" class="bg-[#3F0777] py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Envoyer votre message</button>
                </form>
            </div>

          <div className=' w-10/12 p-8 md:pr-11 justify-center	'>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Pour obtenir plus de details sur mes services, mes missions  ou notre obtenir un devis , n hesitez pas à me contacter afin que je puisses repondre à toutes vos questions et vous fournir l assistance dont vous avez besoin.</p>
            <div className='my-3 sm:my-9'>
              <hr className=" h-px my-[10px] bg-gray-200 border-0 dark:bg-gray-700" />
              <p className="  mb-2 lg:mb-2 font-normal text-gray-500 dark:text-gray-400 sm:text-xl">Tel. : 07 89 80 00 64</p>
              <p className="  mb-2 lg:mb-2 font-normal text-gray-500 dark:text-gray-400 sm:text-xl">Mail. : Bjunior7802@gmail.com</p>
              <p className="  mb-2 lg:mb-2 font-normal text-gray-500 dark:text-gray-400 sm:text-xl">Adresse. : 78620 l etang la ville 3 Allee de la Niche</p>
            </div>
          </div>
          </div>
        
      </div>


    </div>
    </>
  );
};

export default Contact;
