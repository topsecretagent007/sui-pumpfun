import React, { Fragment } from 'react'
import ModalWrapper from './ModalWrapper'

const ModalHowItWorks = ({ show, handleClose }) => {
  return (
    <Fragment>
      <ModalWrapper show={show} handleClose={handleClose}>

        <div className="text-center">
          <h4 className='font-medium text__28 mb-3'>How it works</h4>
          <div className="grid grid-cols-1 gap-2 text__16">
            <p>Sui Fun 🔒</p>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-1 gap-3 ss:px-4 ">

              <div className="grid grid-cols-1 gap-2 relative  ss:px-8 px-4">
                <div className="absolute top-[1rem] h-[5rem] w-full rounded-lg border !border-[rgba(255,255,255,0.2]" style={{
                  clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 50% 0)",
                }}></div>

                <div className="relative z-[1]">
                  <div className="text__12 p-[2px_8px] inline-block rounded-full border !border-[rgba(255,255,255,0.2)]  bg-[#6699EE] shadow-[2.07px_2.07px_black] text-black font-[700]">STEP 1</div>
                </div>
                <p className='text__16 relative z-[1]'>Degens will be able to create a token</p>
              </div>
              <div className="grid grid-cols-1 gap-2 relative px-8">
                <div className="absolute top-[1rem] h-[5rem] w-full rounded-lg border !border-[rgba(255,255,255,0.2]" style={{
                  clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%, 0 0)", // Memotong setengah kanan
                }}></div>

                <div className="relative z-[1]">
                  <div className="text__12 p-[2px_8px] inline-block rounded-full border !border-[rgba(255,255,255,0.2)]  bg-[#6699EE] shadow-[2.07px_2.07px_black] text-black font-[700]">STEP 2</div>
                </div>
                <p className='text__16 relative z-[1]'>Token gets added to virtual liquidity dex</p>
              </div>
              <div className="grid grid-cols-1 gap-2 relative px-8">
                <div className="absolute top-[1rem] h-[6.4rem] w-full rounded-lg border !border-[rgba(255,255,255,0.2]" style={{
                  clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 50% 0)",
                }}></div>

                <div className="relative z-[1]">
                  <div className="text__12 p-[2px_8px] inline-block rounded-full border !border-[rgba(255,255,255,0.2)]  bg-[#6699EE] shadow-[2.07px_2.07px_black] text-black font-[700]">STEP 3</div>
                </div>
                <p className='text__16 relative z-[1]'>Tokens trading on the bonding curve have 1% buy tax and 1% sell tax</p>
              </div>
              <div className="grid grid-cols-1 gap-2 relative px-8">
                <div className="absolute top-[1rem] h-[6.5rem] w-full rounded-lg border !border-[rgba(255,255,255,0.2]" style={{
                  clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%, 0 0)", // Memotong setengah kanan
                }}></div>

                <div className="relative z-[1]">
                  <div className="text__12 p-[2px_8px] inline-block rounded-full border !border-[rgba(255,255,255,0.2)]  bg-[#6699EE] shadow-[2.07px_2.07px_black] text-black font-[700]">STEP 4</div>
                </div>
                <p className='text__16 relative z-[1]'>when the token hits a desired market cap 69k it falls into a clmm pool with 1% pool fees</p>
              </div>
              <div className="grid grid-cols-1 gap-2 relative px-8">
                <div className="absolute top-[1rem] h-[6.4rem] w-full rounded-lg border !border-[rgba(255,255,255,0.2]" style={{
                    clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 50% 0)",
                  }}></div>
                <div className="relative z-[1]">
                  <div className="text__12 p-[2px_8px] inline-block rounded-full border !border-[rgba(255,255,255,0.2)]  bg-[#6699EE] shadow-[2.07px_2.07px_black] text-black font-[700]">STEP 5 </div>
                </div>
                <p className='text__16 relative z-[1]'>The fees collected are distributed to users. you can refer - Revenue Distribution</p>
              </div>
              <div className="grid grid-cols-1 gap-2 relative px-8">               
                <div className="absolute top-[1rem] h-[9.5rem] w-full rounded-lg border !border-[rgba(255,255,255,0.2]" style={{
                    clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%, 0 0)", // Memotong setengah kanan
                  }}></div>
                <div className="relative z-[1]">
                  <div className="text__12 p-[2px_8px] inline-block rounded-full border !border-[rgba(255,255,255,0.2)]  bg-[#6699EE] shadow-[2.07px_2.07px_black] text-black font-[700]">STEP 6</div>
                </div>
                <p className='text__16 relative z-[1]'>Liquidity Merger- The Liquidity Merger is a mechanism in SuiFun that consolidates liquidity from non-graduated tokens
                  into a new, stronger asset. This ensures that liquidity remains efficient, benefiting both users and the ecosystem.
                </p>
              </div>
            </div>

            <div>
              <br/>
              <img src='diagram.jpg'/>
            </div>

            <div className="mt-8">
              <div onClick={handleClose} className='cursor-pointer inline-block text__16 text-[#232323] p-[12px_32px] rounded-full bg-[#A9E6BD]'>I'm ready to SuiFun</div>
            </div>
          </div>
        </div>

      </ModalWrapper>
    </Fragment>
  )
}

export default ModalHowItWorks
