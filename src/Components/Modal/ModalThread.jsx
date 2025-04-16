import React, { Fragment, useState } from 'react'
import ModalWrapper from './ModalWrapper'
import { useWallet } from '@suiet/wallet-kit';
import { toast } from 'react-hot-toast';
import { sendMsgWeb2 } from '../../Lib/web2';
import { useGlobalContext } from '../../Hook/GlobalProvider';

const ModalThread = ({ show, replyMsg, handleClose }) => {
    const wallet = useWallet()
    const [msg, setMsg] = useState("");
    const { reloadThread, setReloadThread } = useGlobalContext();

    const createMessageHandle = async () => {
        try {
            
        } catch (err) {
            console.log(err);
        }
    }

    const replyMessageHandle = async () => {
        try {
            
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Fragment>
            <ModalWrapper show={show} handleClose={handleClose}>
                <div className="gap-[30px] grid grid-cols-1 p-4">

                    <div className="text-center">
                        <h3 className='font-medium text__28'>{replyMsg ? "Reply" : "New Post"} </h3>
                    </div>

                    <div className="gap-[14px] grid grid-cols-1">

                        <div className="">
                            <label htmlFor="" className='mb-1 text-[#B3B3B3] text__14'></label>
                            <textarea
                                value={msg}
                                onChange={(e) => { setMsg(e.target.value) }}
                                name="" rows={3} className='bg-transparent shadow-none active:hover:focus:shadow-none p-3 border !border-[rgba(255,255,255,0.20)] rounded-xl outline-none active:hover:focus:outline-none w-full placeholder:text-[#999999] text__14'
                                placeholder='Enter description' id=""></textarea>
                        </div>
                    </div>

                    <div className="gap-[14px] grid grid-cols-1">
                        <p className='text__14'>Tip: Lets go to the moon</p>
                        <button
                            onClick={() => replyMsg ? replyMessageHandle() : createMessageHandle()}
                            className='bg-[#6699EE] p-[12px_32px] rounded-[3.5px] font-[700] text-[#232323]'>
                            {replyMsg ? "Reply" : "Create a post"}
                        </button>
                        <p className='text-center text__14'></p>
                    </div>

                </div>
            </ModalWrapper>
        </Fragment>
    )
}

export default ModalThread
