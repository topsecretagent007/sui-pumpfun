import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { calculateTimeAgo } from '../../Lib/common';
import { MdOutlineContentCopy } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { HiUser } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';

const CardListToken = ({ dataChart = false }) => {
  const [timeAgo, setTimeAgo] = useState("");

  const copyToClipboard = (event, text) => {
    event.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(() => console.log("Copied:", text))
        .catch((err) => console.error("Clipboard API failed, using fallback:", err));
    } else {
      fallbackCopyText(text);
    }
  };

  const fallbackCopyText = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    toast.success("Copied to clipboard", { duration: 5000 });
    document.execCommand("copy");
    document.body.removeChild(textArea);
    console.log("Copied (fallback):", text);
  };

  useEffect(() => {
    if (dataChart) {
      console.log("dataChart ", dataChart);
      const { days, hours, minutes } = calculateTimeAgo(dataChart.created_at);
      let timeAgoString = '';

      if (days > 0) {
        timeAgoString = `${days} day${days > 1 ? 's' : ''} ago`;
      } else if (hours > 0) {
        timeAgoString = `${hours} hour${hours > 1 ? 's' : ''} ago`;
      } else if (minutes > 0) {
        timeAgoString = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
      }

      setTimeAgo(timeAgoString);
    }
  }, [dataChart]);


  return (
    <NavLink to={`/trading-view/${(JSON.parse(dataChart.publishedObject)).packageId}`}>
      <div className="flex items-center gap-3 w-full h-full">
        <div className='flex flex-col justify-center items-center gap-2 min-w-[88px] h-full'>
          <img src={JSON.parse(dataChart.token)?.icon} className='rounded-full w-[80px] ss:w-[88px] h-[80px] ss:h-[88px] object-cover aspect-square' alt="token_img" />
          <div className='flex flex-col justify-center items-center gap-1 w-full max-w-[80px]'>
            <div className='bg-[#ffffff29] rounded-full w-full h-1'>
              <div
                className='bg-[#4DA2FF] rounded-full w-full h-full'
                style={{ width: `57%` }}
              ></div>
            </div>
            <span className='text-[12px] text-white'>57%</span>
          </div>
        </div>
        <div className='flex md:flex-row flex-col justify-between items-center w-full h-full'>
          <div className='flex flex-col justify-between items-start gap-4'>
            <div className='flex items-center gap-2'>
              <span className="font-semibold text-white text-base">
                {JSON.parse(dataChart.token)?.symbol}
              </span>
              <span className="font-semibold text-white/60 text-sm" >
                {JSON.parse(dataChart.token)?.name}
              </span>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <p className='text-[#B3B3B3] text__14'>
                {(JSON.parse(dataChart.publishedObject)).packageId.slice(0, 3)}...{(JSON.parse(dataChart.publishedObject)).packageId.slice(-3)}
              </p>
              <p
                onClick={(event) => {
                  event.preventDefault(); // Prevents navigation but allows NavLink to work normally when clicked elsewhere
                  copyToClipboard(event, JSON.parse(dataChart.publishedObject).packageId);
                }}
                className='text-white/60 hover:text-white text-sm cursor-pointer'>
                <MdOutlineContentCopy />
              </p>
              <p className='text-white/60 text-sm cursor-pointer'>
                <BiMessageRounded />
              </p>
              <div className='flex flex-row items-center gap-1 px-1.5'>
                <p className='text-white/60 text-sm cursor-pointer'>
                  <TbWorld />
                </p>
                <p className='text-white/60 text-sm cursor-pointer'>
                  <FaXTwitter />
                </p>
                <p className='text-white/60 text-sm cursor-pointer'>
                  <FaTelegramPlane />
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-between items-end gap-4'>
            <span className='text-[#F3F3F3] text-sm'>{timeAgo}</span>

            <div className='flex flex-row items-center gap-2'>
              <p className='flex flex-row items-center gap-1 text-white/60 text-sm'>
                <HiUser />
                <span className='text-[12px]'>{dataChart?.replies}</span>
              </p>
              <p className='flex flex-row items-center gap-1 text-white/60 text-sm'>
                V:
                <span className='text-[12px] text-green-500'>$10K</span>
              </p>
              <p className='flex flex-row items-center gap-1 text-white/60 text-sm'>
                MC:
                <span className='text-[12px]'>${dataChart && Number(dataChart?.mc).toFixed(0)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default CardListToken
