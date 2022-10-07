import React from 'react'


import { barista, roundlogo  } from '../assets';
import styles from '../style';
import Button from './Button';

const Hero = () => (
  <section id="home" className={`relative flex flex-col ${styles.paddingY}`}>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-0 relative`}>
      <img
        src={barista}
        alt="coffee barista"
        className="object-cover w-full h-[580px] md:h-full relative z-[5] object-fill "
      />
      <div className="absolute bg-gradient-to-r from-black to-gray-800/30 z-[7] w-[100%] h-[100%]" />
    </div>

    <div className=" z-20 absolute bottom-[15%] sm:bottom-[40%] left-0 right-0 ">
      <div className="sm:block hidden">
        <div className="flex justify-center items-center">
          <h1 className="font-poppins font-bold capitalize text-white mb-5 text-[3.2rem]">
            The coffee roasters
          </h1>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:ml-3 justify-center items-center ">
        <div className="mb-5  w-[80px] h-[80px] flex justify-center items-center rounded-full bg-stone-100/60">
          <img
            src={roundlogo}
            alt="shop logo"
            className="w-[50px] h-[50px] animate-[spin_3s_linear_infinite] "
          />
        </div>
        <div className="flex flex-col ss:hidden items-center">
          <h1 className="capitalize font-poppins font-bold text-[2rem] -mb-12 text-white">
            the
          </h1>
          <h2 className="font-poppins font-bold capitalize text-white mb-5 text-[2rem]">
            <br className="sm:hidden block" /> coffee roasters
          </h2>
        </div>
        <div className="bg-yellow-900/80 sm:ml-3 px-5 py-5 rounded-[6px] max-w-[400px]">
          <p className="font-poppins text-center font-normal text-white leading-[32px] text-[20px]">
            We source our coffee seasonally,
            <br className="sm:hidden " /> from farmers who care,
            <br className="sm:hidden " /> and roast to highlight
            <br className="sm:hidden " /> what makes them special.
          </p>
        </div>
      </div>

      <div id="features" className=" relative top-20 justify-center items-center flex ">
        <a href="#features" className="cursor-pointer">
          <Button />
        </a>
      </div>
    </div>
  </section>
);


export default Hero