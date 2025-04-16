import React from 'react'
import { NavLink } from 'react-router-dom';
import { Send, Layers } from "lucide-react";
import { FaHandPointRight, FaXTwitter } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaLink } from "react-icons/fa6";
import { TokenList } from '../config';

export default function HomePage() {
  // const [selectFaqData, setSelectFaqData] = React.useState(null);

  // const selectFaq = (index) => {
  //   if (selectFaqData === index) {
  //     setSelectFaqData(null);
  //   } else {
  //     setSelectFaqData(index);
  //   }
  // }

  return (
    <div className='flex flex-row w-full h-full min-h-[calc(100vh-80px)] duration-300'>
      <div className='relative flex flex-col w-full duration-300'>
        <img src={"./../images/home_top_bg.png"} alt="Home Page" className='-top-4 z-[1] absolute mx-auto w-full object-cover' />
        <img src={"./../images/Homebg.png"} alt="Home Page" className='-top-4 left-0 absolute w-full object-cover' />
        <div className='z-20 relative flex flex-col justify-center items-center gap-16 mx-auto px-4 py-16 w-full max-w-[1440px] h-full duration-300'>
          <div className='flex md:flex-row flex-col justify-center items-center gap-10 mx-auto w-full max-w-[1120px] duration-300'>
            <div className='flex flex-col justify-center items-center w-full max-w-[560px]'>
              <h1 className='px-6 w-full font-bold text-3xl md:text-5xl text-center'>Welcome to SUI FUN</h1>
              <p className='mt-4 text-white text-sm md:text-lg text-center'>Sui Fun allow anyone launch their own tokens on the Sui blockchain. All tokens on Sui Fun are fair-launch. Everyone has the same chance to buy or sell the moment the token goes live.</p>
              <div className='flex flex-col items-start p-2'>
                <p className='flex flex-row items-center gap-2 mt-2 text-[#C0E6FF] text-[12px] md:text-sm text-center'>
                  <FaHandPointRight className='text-[#4DA2FF]' />
                  Step 1: Pick a token that catches your eye.
                </p>
                <p className='flex flex-row items-center gap-2 mt-2 text-[#C0E6FF] text-[12px] md:text-sm text-center'>
                  <FaHandPointRight className='text-[#4DA2FF]' />
                  Step 2: Buy it through the bonding curve.
                </p>
                <p className='flex flex-row items-center gap-2 mt-2 text-[#C0E6FF] text-[12px] md:text-sm text-center'>
                  <FaHandPointRight className='text-[#4DA2FF]' />
                  Step 3: Sell anytime to lock in profits (or cut your losses).
                </p>
              </div>

              <NavLink to={'/create-token'} className='hover:bg-[#6699EE] bg-gradient-to-b from-[#2343E9] to-[#1E99F2] mt-4 px-6 py-2 rounded-full text-white transition duration-300 cursor-pointer'>
                Create New Token
              </NavLink>

            </div>
            <div className='hidden md:flex flex-col justify-center items-center mt-8 w-full min-w-[260px] max-w-[360px] h-full min-h-[260px] max-h-[360px]'>
              <div className='relative flex flex-col justify-center items-center bg-[#1F1F1F] shadow-[#4DA2FF] shadow-[0px_8px_8px_0px] border-[#4DA2FF] border-[1px] rounded-lg w-full h-full object-cover overflow-hidden'>
                <img src={"./../images/suifun-logo.png"} alt="Logo" className='w-full h-full object-cover' />
              </div>
            </div>
          </div>
          <div className='mx-auto w-full max-w-[1240px] duration-300'>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                414: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              navigation={false}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
              {TokenList.map((token) => (
                <SwiperSlide key={token.id} className='relative flex bg-[#030F1C] shadow-lg p-2 md:p-4 border border-[#C0E6FF] rounded-lg text-center'>
                  <img src={"./../images/Abstract Design.png"} alt="Logo" className='top-0 left-0 absolute w-[33%] object-cover' />
                  <img src={"./../images/Abstract Design.png"} alt="Logo" className='right-0 bottom-0 absolute w-[33%] object-cover rotate-180' />
                  <div className='z-10 relative flex flex-row justify-start items-center gap-1 md:gap-3 w-full'>
                    <img src={token.img} alr={token.name} className='rounded-full w-16 h-16' />
                    <div className='flex flex-col justify-center items-center gap-3 w-full'>
                      <div className='flex flex-row justify-center items-center gap-1'>
                        <p className='text-white text-sm md:text-lg'>{token.name}</p>
                        <p className='text-[#C0E6FF] text-[12px] md:text-base'>( {token.symbol} )</p>
                      </div>
                      <div className='flex flex-row justify-center items-center gap-1'>
                        <p className='text-[#C0E6FF] text-sm md:text-base'>{token.address.slice(0, 6)}...{token.address.slice(-6)}</p>
                        <a href={token.url} target="_blank" rel="noopener noreferrer" className='flex justify-center items-center'>
                          <FaLink className='text-[#C0E6FF] hover:text-white text-sm md:text-base cursor-pointer' />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className='z-10 flex flex-col bg-black pt-12 pb-24 w-full duration-300'>
          <div className='flex flex-col gap-3 mx-auto px-4 pt-6 w-full max-w-[1440px]'>
            <div className='flex flex-row justify-center items-center gap-1 mx-auto w-full'>
              <img src='./../images/star.png' alt="Star" className='w-6 h-6' />
              <img src='./../images/star.png' alt="Star" className='w-4 h-4' />
              <img src='./../images/star.png' alt="Star" className='w-3 h-3' />
            </div>
            <p className='w-full font-bold text-2xl md:text-5xl text-center'>Have Any Questions?</p>

            <div className='flex flex-col items-center gap-4 w-full'>
              <div className='flex md:flex-row flex-col justify-center items-center gap-6 w-full max-w-[620px] text-[12px] md:text-base text-center'>
                If you have any questions or would like to become an investor or partner you can email us here or for 24 hour communication you can join our Discord here.
              </div>
              <div className='flex sm:flex-row flex-col justify-center items-center gap-4 w-full'>
                <div className='flex flex-col bg-gradient-to-b from-[#2343E9] to-[#1E99F2] shadow-[1.96px_1.96px] px-6 py-1 border-[1px] border-white border-solid rounded-lg text-white cursor-pointer'>
                  Contact Us
                </div>
                <div onClick={() => window.open("https://x.com/suidotfun", "_blank")} className='flex flex-col bg-gradient-to-b from-[#2343E9] to-[#1E99F2] shadow-[1.96px_1.96px] px-6 py-1 border-[1px] border-white border-solid rounded-lg text-white cursor-pointer'>
                  Join Our Telegram
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='z-10 flex flex-col bg-[#0D1121] w-full h-full duration-300'>
          <div className='flex flex-col gap-3 mx-auto px-4 py-3 w-full max-w-[1440px]'>
            <div className='flex flex-row justify-between items-center w-full'>
              <div className='flex flex-col justify-center items-center text-[12px] text-white md:text-sm text-center'>
                © 2025 SUI FUN. All rights reserved.
              </div>
              <div className='flex flex-row justify-end items-center gap-2'>
                <button
                  onClick={() => window.open("https://x.com/suidotfun", "_blank")}
                  className="flex justify-center items-center bg-[#4DA2FF] shadow-[2.96px_2.96px] border-[2.78px] border-black border-solid rounded-[5.33px] w-[35px] h-[35px] text-black">
                  <FaXTwitter size={18} />
                </button>

                <button
                  onClick={() => window.open("https://t.me/suidotfun", "_blank")}
                  className="flex justify-center items-center bg-[#4DA2FF] shadow-[2.96px_2.96px] border-[2.78px] border-black border-solid rounded-[5.33px] w-[35px] h-[35px] text-black">
                  <Send size={18} />
                </button>

                <button
                  onClick={() => window.open("https://sui.fun/docs", "_blank")}
                  className="flex justify-center items-center bg-[#4DA2FF] shadow-[2.96px_2.96px] border-[2.78px] border-black border-solid rounded-[5.33px] w-[35px] h-[35px] text-black">
                  <Layers size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
