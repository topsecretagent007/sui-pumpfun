import React, { Fragment, useState } from 'react'
import { LoadFile } from '../../Helper/LoadFile';
import { useWallet } from '@suiet/wallet-kit';
import moment from 'moment/moment';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

const CommentThread = ({ updateLikeMessage, replyMessage, data }) => {
    const wallet = useWallet();


    useEffect(() => {
        if(data.like.includes(wallet?.account?.address)){
        }
    }, [data]);

    const likeHandle = async () => {
        if(!wallet?.account?.address){
            return toast.error("Wallet Connect");
        }
    };

    return (
        <Fragment>
            <div className="flex gap-3 w-full">
                {/* <img src={data.img} className='rounded-full w-[32px] h-[32px] object-cover' alt="" /> */}

                <div className="gap-[8px] grid grid-cols-1 p-3 border !border-[rgba(221,221,221,0.12)] rounded-[16px] w-full">
                    <div className="flex items-center gap-[4px]">
                        <div className="bg-[#6699EE] p-[2px_10px] rounded-full font-medium text-[#4D4D4D] text__16">
                            {data&&data?.wallet.slice(0,5)}...{data&&data?.wallet.slice(-3)}
                        </div>
                        <div className="font-medium text-[#999999] text__14">·</div>
                        <div className="font-medium text-[#999999] text__14">{moment(data.created_at).utc().format('YYYY:MM:DD HH:mm:ss')}</div>
                    </div>
                    <p className='text__16'>{data.msg}</p>

                    <div className="flex items-center gap-3">
                        <div onClick={() => likeHandle()} className="flex items-center gap-2 cursor-pointer">
                            <img src={Like ? "./../../images/Heart Fill.svg" : "./../../images/Hearta.svg"} className='cursor-pointer' alt="" />
                            <p className='font-medium text-[#B3B3B3] text__12'>{data.like.length}</p>
                        </div>
                        <div className="flex items-center gap-2 text-[#B3B3B3] cursor-pointer" onClick={()=>replyMessage(data)}>
                            <img src={LoadFile("images/ShareFat.svg")} alt="" />
                            <p className='font-medium underline text__12'>Reply</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CommentThread
