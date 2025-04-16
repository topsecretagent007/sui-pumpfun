import React, { Fragment, useState } from 'react'
import { LoadFile } from '../../Helper/LoadFile';
import ModalWrapper from './ModalWrapper'
import Turnstile from 'react-turnstile';
const ModalBuyToken = ({ show, handleClose }) => {
    const [token, setToken] = useState("");

    const handleVerify = (token) => {
        console.log("Turnstile token:", token);
        setToken(token);
    };
    return (
        <Fragment>
            <ModalWrapper show={show} handleClose={handleClose}>
                <div className="gap-[32px] grid grid-cols-1 p-4">
                    <div className="text-center">
                        <h3 className='font-medium text__28'>Choose how many [$TICKR] you want to buy (optional)</h3>
                        <p className='text-[#999999] text__16'>Tip: its optional but buying a small amount of coins helps protect your coin from snipers.</p>
                    </div>
                    <div className="gap-[16px] grid grid-cols-1">
                        <div className="flex justify-center items-center">
                            <div className="flex justify-center items-center gap-2 cursor-pointer">
                                <img src={LoadFile("images/Swap.svg")} alt="" />
                                <p className='font-normal underline text__16'>Switch to 1am</p>
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="" className='mb-1 text-[#B3B3B3] text__14'>Amount (SUI)</label>
                            <div className="flex items-center gap-2 pr-3 border !border-[rgba(255,255,255,0.20)] rounded-xl h-[46px] overflow-hidden">
                                <div className="flex flex-shrink-0 justify-center items-center bg-[#2E2E2E] px-2 !border-[rgba(255,255,255,0.16)] border-r h-full font-bold text__16">
                                    <div className="flex items-center gap-2">
                                        <img src="./../../images/sol.svg" alt="" />
                                        <p className='font-bold text__14'>SUI</p>
                                    </div>
                                </div>
                                <input type="text" className='bg-transparent shadow-none active:hover:focus:shadow-none outline-none active:hover:focus:outline-none w-full placeholder:text-[#999999] text-right text__14' placeholder='00' />
                            </div>
                        </div>
                    </div>
                    <button className='bg-[#A9E6BD] p-[12px_32px] rounded-full w-full font-medium text-[#232323]'>Create a coin</button>
                    <div className="w-full">
                        <Turnstile
                            sitekey="1x00000000000000000000AA" // Ganti dengan Site Key dari Cloudflare
                            onVerify={handleVerify}
                            options={{
                                theme: "light", // Pilihan tema: light, dark, atau auto
                                action: "Buy $TICKR", // Aksi spesifik untuk verifikasi
                            }}
                            style={{ display: "block", width: "100%" }}
                            className="customTurnstile"
                        />
                    </div>
                </div>
            </ModalWrapper>
        </Fragment>
    )
}

export default ModalBuyToken
