import React, { Fragment } from 'react'
import { LoadFile } from '../../Helper/LoadFile';
import ModalWrapper from './ModalWrapper';

const ModalConnect = ({ show, handleClose, handleShowProfileAfterConnect }) => {
    return (
        <Fragment>
            <ModalWrapper show={show} handleClose={handleClose}>
                <div className="p-4">

                    <div className="mb-[32px] text-center">
                        <h3 className='font-medium text__28'>Create a Token</h3>
                        <p className='text-[#999999] text__16'>We prevent rugs by making sure that all created tokens are safe.</p>
                    </div>

                    <div className="gap-[20px] grid grid-cols-1">

                        <div className="">
                            <p className='mb-1 text-[#B3B3B3] text__14'>Email Address</p>
                            <div className="flex items-center gap-2 bg-[#242424] px-3 border !border-[rgba(255,255,255,0.20)] rounded-xl h-[46px]">
                                <img src={LoadFile("images/EnvelopeSimple.svg")} alt="" />
                                <input type="text" className='bg-transparent shadow-none active:hover:focus:shadow-none outline-none active:hover:focus:outline-none w-full placeholder:text-[#999999] text__14' placeholder='e.x johndoe@gmail.com' />
                            </div>
                        </div>

                        <div className="relative text-center">
                            <div className="top-1/2 left-1/2 absolute bg-[rgba(255,255,255,0.16)] w-full h-[1px] -translate-x-1/2 -translate-y-1/2"></div>
                            <div className='inline-block z-[1] relative bg-[#1F1F1F] px-3 text-[#999999] text__14'>Or connect wallet:</div>
                        </div>

                        <div className="gap-3 grid grid-cols-1">
                            <div onClick={handleShowProfileAfterConnect} className='inline-block relative p-[10px_16px] border !border-[rgba(255,255,255,0.20)] rounded-full w-full font-medium text-[#F3F3F3] text-center cursor-pointer text__16'>
                                <img src={"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80NTkyMl84OCkiPgo8cGF0aCBkPSJNMTI3LjYxIDYzLjgwNDlDMTI3LjYxIDEwNy44NTMgMTA3Ljg1MyAxMjcuNjEgNjMuODA0OSAxMjcuNjFDMTkuNzU2OCAxMjcuNjEgMCAxMDcuODUzIDAgNjMuODA0OUMwIDE5Ljc1NjggMTkuNzU2OCAwIDYzLjgwNDkgMEMxMDcuODUzIDAgMTI3LjYxIDE5Ljc1NjggMTI3LjYxIDYzLjgwNDlaIiBmaWxsPSIjM0JEMjNEIi8+CjxwYXRoIGQ9Ik02OS41Njk5IDI3LjA1NTdMNTEuODE5NyAyNy4wNTU3TDQ4LjcwNTYgMzYuNDcxOUg1OC41NjQ1TDU4LjU2NDUgNTYuMzA2M0g2OS41Njk5VjI3LjA1NTdaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTg0LjA0ODYgODAuMzExMUM4NC4wNDg2IDkxLjQ5MTIgNzQuOTg1NCAxMDAuNTU0IDYzLjgwNTMgMTAwLjU1NEM1Mi42MjUzIDEwMC41NTQgNDMuNTYyMSA5MS40OTEyIDQzLjU2MjEgODAuMzExMUM0My41NjIxIDY5LjEzMTEgNTIuNjI1MyA2MC4wNjc4IDYzLjgwNTMgNjAuMDY3OEM3NC45ODU0IDYwLjA2NzggODQuMDQ4NiA2OS4xMzExIDg0LjA0ODYgODAuMzExMVpNNzQuODU4NCA4MC4zMTExQzc0Ljg1ODQgODYuNDE1NSA2OS45MDk3IDkxLjM2NDEgNjMuODA1MyA5MS4zNjQxQzU3LjcwMDggOTEuMzY0MSA1Mi43NTIyIDg2LjQxNTUgNTIuNzUyMiA4MC4zMTExQzUyLjc1MjIgNzQuMjA2NiA1Ny43MDA4IDY5LjI1OCA2My44MDUzIDY5LjI1OEM2OS45MDk3IDY5LjI1OCA3NC44NTg0IDc0LjIwNjYgNzQuODU4NCA4MC4zMTExWiIgZmlsbD0iYmxhY2siLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80NTkyMl84OCI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="} className='top-1/2 left-4 absolute size-8 -translate-y-1/2' alt="" />
                                Sui Wallet (or wallet connect)
                            </div>
                            <div onClick={handleShowProfileAfterConnect} className='inline-block relative p-[10px_16px] border !border-[rgba(255,255,255,0.20)] rounded-full w-full font-medium text-[#F3F3F3] text-center cursor-pointer text__16'>
                                <img src={LoadFile("images/image 4.svg")} className='top-1/2 left-4 absolute -translate-y-1/2' alt="" />
                                Phantom (Coming Soon)
                            </div>
                        </div>

                        <div className="text-center">
                            <p className='inline-block font-medium underline cursor-pointer text__16'>Show All Wallet</p>
                        </div>

                    </div>

                </div>
            </ModalWrapper>
        </Fragment>
    )
}

export default ModalConnect
