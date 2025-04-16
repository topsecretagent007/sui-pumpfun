import React, { Fragment, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ModalHowItWorks from '../Modal/ModalHowItWorks';
import ModalConnect from '../Modal/ModalConnect';
import ModalProfile from '../Modal/ModalProfile';
import { NavLink } from 'react-router-dom';
import {
  ConnectButton,
  ErrorCode,
} from "@suiet/wallet-kit";
import { useGlobalContext } from '../../Hook/GlobalProvider';
import ModalCreateToken from '../Modal/ModalCreateToken';
import { Send, Layers } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const { showCreateMemeModal, setShowCreateMemeModal, newMeme, newTrade } = useGlobalContext();
  const [showHowIt, setShowHowIt] = useState(false);
  const handleCloseHowIt = () => setShowHowIt(false);
  const [showConnect, setShowConnect] = useState(false);
  const handleCloseConnect = () => setShowConnect(false);
  const handleCloseCreateToken = () => setShowCreateMemeModal(false);
  const [showProfile, setShowProfile] = useState(false);
  const handleCloseProfile = () => setShowProfile(false);
  const [ani, setAni] = useState(false);
  const [ani1, setAni1] = useState(false);

  useEffect(() => {
    setAni(true);
    setTimeout(() => {
      setAni(false)
    }, 1000);
  }, [newMeme]);

  useEffect(() => {
    setAni1(true);
    setTimeout(() => {
      setAni1(false)
    }, 1000);
  }, [newTrade])

  const handleShowProfileAfterConnect = () => {
    setShowConnect(false)
    setTimeout(() => {
      setShowProfile(true); // Buka modal kedua setelah modal pertama ditutup
    }, 300);
  };

  const [ToogleMenu, setToogleMenu] = useState(false);

  return (
    <Fragment>
      <div className="z-[90] fixed w-full">
        <div className="relative flex items-center bg-[#0D1121] py-3 md:py-4 h-[80px]">
          <Container className='z-[1] relative'>
            <div className="flex justify-between items-center header-logo">
              <NavLink to={"/"} className='flex flex-row items-center gap-2 font-semibold text-white text__14'>
                <img src={"./../images/suifun-logo.png"} alt="" className='w-12' />
                <p className='text-2xl'>SUI FUN</p>
              </NavLink>

              <div className='hidden lg:flex flex-row justify-center items-center gap-4 font-semibold text-white text-lg'>
                <NavLink to={"/"} className='flex items-center gap-2 hover:text-[#4DA2FF]'>
                  Home
                </NavLink>
                <NavLink to={"/create-token"} className='flex items-center gap-2 hover:text-[#4DA2FF]'>
                  Create Token
                </NavLink>
              </div>

              <div className="hidden lg:flex items-center gap-[44px] font-medium text__14">
                <div className='flex gap-[8px]'>
                  <button
                    onClick={() => window.open("https://x.com/suidotfun", "_blank")}
                    className="flex justify-center items-center bg-[#4DA2FF] shadow-[#4DA2FF] shadow-[1.96px_1.96px] border-[2.78px] border-black border-solid rounded-[5.33px] w-[35px] h-[35px] text-black">
                    <img
                      src='./../twitter.svg'
                      size={18}
                      width={18} height={18}
                    />
                  </button>

                  <button
                    onClick={() => window.open("https://t.me/suidotfun", "_blank")}
                    className="flex justify-center items-center bg-[#4DA2FF] shadow-[#4DA2FF] shadow-[1.96px_1.96px] border-[2.78px] border-black border-solid rounded-[5.33px] w-[35px] h-[35px] text-black">
                    <Send size={18} />
                  </button>

                  <button
                    onClick={() => window.open("https://sui.fun/docs", "_blank")}
                    className="flex justify-center items-center bg-[#4DA2FF] shadow-[#4DA2FF] shadow-[1.96px_1.96px] border-[2.78px] border-black border-solid rounded-[5.33px] w-[35px] h-[35px] text-black">
                    <Layers size={18} />
                  </button>

                  <ConnectButton
                    className='hidden md:block bg-[#1F1F1F] p-[8px_20px] border !border-[rgba(255,255,255,0.12)] rounded-full font-medium cursor-pointer text__16 connect_wallet'
                    onConnectError={(error) => {
                      if (error.code === ErrorCode.WALLET__CONNECT_ERROR__USER_REJECTED) {
                        console.warn(
                          "user rejected the connection to " + error.details?.wallet
                        );
                      } else {
                        console.warn("unknown connect error: ", error);
                      }
                    }}
                  >
                    Connect Wallet
                  </ConnectButton>
                </div>
              </div>

              <div onClick={() => setToogleMenu(!ToogleMenu)} className="lg:hidden relative flex flex-wrap justify-center items-center bg-transparent py-2 border !border-white rounded-full w-[40px] h-[40px] cursor-pointer">
                <div className={"w-[20px] inline-block h-[1px] transition-all duration-300 bg-white " + (ToogleMenu ? "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" : "")}></div>
                <div className={"w-[20px] inline-block h-[1px] transition-all duration-300 bg-white " + (ToogleMenu ? "opacity-0" : "")}></div>
                <div className={"w-[20px] inline-block h-[1px] transition-all duration-300 bg-white " + (ToogleMenu ? "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45" : "")}></div>
              </div>
            </div>
          </Container>

          <div className={"lg:hidden absolute py-3 rounded-lg bg-black border-[1px] border-[#4DA2FF] shadow-[0px_20px_30px_#e3e3e30a] transition-all duration-300 right-8 " + (ToogleMenu ? "top-[73px]" : "-top-[20rem] opacity-0 pointer-events-none")}>
            <div className="gap-3 grid grid-cols-1">
              <div className="flex flex-col justify-center items-start gap-2">
                <div className='flex flex-col gap-2 px-2 w-full'>
                  <NavLink to={"/"} className='flex items-center gap-2 hover:text-[#4DA2FF]'>
                    Home
                  </NavLink>
                  <NavLink to={"/create-token"} className='flex items-center gap-2 hover:text-[#4DA2FF]'>
                    Create Token
                  </NavLink>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 px-2 py-2 border-t-[#4DA2FF] border-t-[1px] border-b-[#4DA2FF] border-b-[1px] w-full'>
                  <button
                    onClick={() => window.open("https://x.com/suidotfun", "_blank")}
                    className="flex justify-center items-center bg-[#4DA2FF] shadow-[2.96px_2.96px] border-[2.78px] border-black border-solid rounded-[5.33px] w-[35px] h-[35px] text-black">
                    <FaXTwitter size={14} />
                  </button>

                  <button
                    onClick={() => window.open("https://t.me/suidotfun", "_blank")}
                    className="flex justify-center items-center bg-[#4DA2FF] shadow-[2.96px_2.96px] border-[2.78px] border-black border-solid rounded-[5.33px] w-[35px] h-[35px] text-black">
                    <Send size={14} />
                  </button>

                  <button
                    onClick={() => window.open("https://sui.fun/docs", "_blank")}
                    className="flex justify-center items-center bg-[#4DA2FF] shadow-[2.96px_2.96px] border-[2.78px] border-black border-solid rounded-[5.33px] w-[35px] h-[35px] text-black">
                    <Layers size={14} />
                  </button>
                </div>

                <div className='flex flex-col px-2 w-full'>
                  <ConnectButton
                    className='md:block bg-[#1F1F1F] p-[8px_20px] border !border-[rgba(255,255,255,0.12)] rounded-full font-medium cursor-pointer text__16 connect_wallet'
                    onConnectError={(error) => {
                      if (error.code === ErrorCode.WALLET__CONNECT_ERROR__USER_REJECTED) {
                        console.warn(
                          "user rejected the connection to " + error.details?.wallet
                        );
                      } else {
                        console.warn("unknown connect error: ", error);
                      }
                    }}
                  >
                    Connect Wallet
                  </ConnectButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalHowItWorks show={showHowIt} handleClose={handleCloseHowIt} />

      <ModalConnect show={showConnect} handleClose={handleCloseConnect} handleShowProfileAfterConnect={handleShowProfileAfterConnect} />

      <ModalProfile show={showProfile} handleClose={handleCloseProfile} />

      <ModalCreateToken show={showCreateMemeModal} handleClose={handleCloseCreateToken} />

    </Fragment>
  )
}

export default Navbar
