import React, { Fragment, useState } from 'react'
import { LoadFile } from '../../Helper/LoadFile';
import ModalWrapper from './ModalWrapper'
import CardListToken from '../Widget/CardListToken';
import Pagination from '../Widget/Pagination';
const ModalProfile = ({ show, handleClose }) => {
    const text = "";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text)
    };

    const listMenu = ["Coins Held", "Replies", "Notifications", "Coins Created", "Followers", "Following"]

    const [ToogleMenu, setToogleMenu] = useState("Coins Held")

    const followers = [
        {
            name: "GeseuJ",
            coin: "43",
            follower: false,
        },
        {
            name: "GeseuJ",
            coin: "43",
            follower: false,
        },
        {
            name: "GeseuJ",
            coin: "43",
            follower: false,
        },
        {
            name: "GeseuJ",
            coin: "43",
            follower: false,
        },
        {
            name: "GeseuJ",
            coin: "43",
            follower: true,
        },
    ]

    const following = [
        {
            name: "GeseuJ",
            coin: "43",
        },
        {
            name: "GeseuJ",
            coin: "43",
        },
        {
            name: "GeseuJ",
            coin: "43",
        },
        {
            name: "GeseuJ",
            coin: "43",
        },
        {
            name: "GeseuJ",
            coin: "43",
        },
    ]
    return (
        <Fragment>
            <ModalWrapper customWidth="customWidthProfile" show={show} handleClose={handleClose}>
                <div className="p-3">

                    <div className="gap-[32px] grid grid-cols-1">

                        <div className="gap-[24px] grid grid-cols-1">

                            <div className="flex items-center gap-3">
                                <img src={LoadFile("images/image 17.png")} className='rounded-full w-[56px] xs:w-[80px] h-[56px] xs:h-[80px] object-cover' alt="" />
                                <div className="">
                                    <h5 className='mb-2 font-medium text__20'>@1amjeet</h5>
                                    <a href='' className="flex items-center gap-2 p-[6px_16px] border !border-[rgba(255,255,255,0.12)] rounded-full">
                                        <img src={LoadFile("images/PencilSimpleLine.svg")} alt="" />
                                        <p className='font-medium text__14'>Edit Profile</p>
                                    </a>
                                </div>
                            </div>

                            <div className="gap-[32px] grid grid-cols-1">

                                <div className="ss:flex justify-between items-center gap-3 grid grid-cols-2">
                                    <div className="">
                                        <p className='text-[#B3B3B3] text__14'>Followers</p>
                                        <div className="flex items-center gap-2">
                                            <img src={LoadFile("images/User.svg")} alt="" />
                                            <h5 className='font-medium text__20'>43</h5>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className='text-[#B3B3B3] text__14'>Likes Received</p>
                                        <div className="flex items-center gap-2">
                                            <img src={LoadFile("images/Heart.svg")} alt="" />
                                            <h5 className='font-medium text__20'>400</h5>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className='text-[#B3B3B3] text__14'>Coins Created</p>
                                        <div className="flex items-center gap-2">
                                            <img src={LoadFile("images/CoinVertical.svg")} alt="" />
                                            <h5 className='font-medium text__20'>1</h5>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className='text-[#B3B3B3] text__14'>Mention Received</p>
                                        <div className="flex items-center gap-2">
                                            <img src={LoadFile("images/ChatDots.svg")} alt="" />
                                            <h5 className='font-medium text__20'>400</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex justify-between items-center gap-2 px-3 border !border-[rgba(255,255,255,0.20)] rounded-full w-full h-[46px]">
                                        <p className='w-[100px] xx:w-full font-medium text__14 clamp-1'>DoAjAr4hu35gt3hdwiuduwihiu2iiebd</p>
                                        <img src={LoadFile("images/Copy.svg")} onClick={copyToClipboard} className='cursor-pointer' alt="" />
                                    </div>
                                    <a href="" className='flex flex-shrink-0 items-center gap-2 text-[#F3F3F3]'>
                                        <span className='font-medium underline text__14'>View on solscan</span>
                                        <img src={LoadFile("images/ArrowUpRight.svg")} className='cursor-pointer' alt="" />
                                    </a>
                                </div>


                            </div>

                        </div>

                        <div className="gap-[20px] grid grid-cols-1">

                            <div className="bg-[#262626] rounded-full w-full overflow-hidden">
                                <div className="w-full overflow-auto no-scrollbar">
                                    <div className="flex justify-between items-center w-[544px] xl:w-auto">
                                        {
                                            listMenu.map((obj, index) => {
                                                return <div key={index} onClick={() => setToogleMenu(obj)} className={'cursor-pointer font-medium text__14 rounded-full p-[4px_12px] ' + (obj === ToogleMenu ? "bg-[#333333] border !border-[rgba(255,255,255,0.12)]" : "")}>{obj}</div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="relative w-full h-[313px] overflow-auto">
                                {ToogleMenu === listMenu[0] ? <>
                                    <div className="flex justify-center items-center w-full h-full">
                                        <div className="flex justify-center items-center gap-2">
                                            <div className="bg-[#A9E6BD] p-[12px_32px] rounded-full font-medium text-[#232323] cursor-pointer text__16">Add coin</div>
                                            <div className="p-[12px_32px] border !border-[rgba(255,255,255,0.12)] rounded-full font-medium cursor-pointer text__16">Hide dust coin</div>
                                        </div>
                                    </div>
                                </> : ""}
                                {ToogleMenu === listMenu[1] ? <>
                                    <div className="flex justify-center items-center w-full h-full">
                                        <div className="text-center">
                                            <img src={LoadFile("images/ChatSlash.svg")} className='mx-auto mb-2' alt="" />
                                            <p className='text-[#999999] text__16'>Only you can view your replies</p>
                                        </div>
                                    </div>
                                </> : ""}
                                {ToogleMenu === listMenu[2] ? <>
                                    <div className="flex justify-center items-center w-full h-full">
                                        <div className="text-center">
                                            <img src={LoadFile("images/BellSimpleSlash.svg")} className='mx-auto mb-2' alt="" />
                                            <p className='text-[#999999] text__16'>No notification yet!</p>
                                        </div>
                                    </div>
                                </> : ""}
                                {ToogleMenu === listMenu[3] ? <>
                                    <div className="gap-3 grid grid-cols-1 w-full">
                                        <CardListToken adjustmentOnMobile={true} dataChart={{
                                            img: LoadFile(`images/avatar (1).png`),
                                            title: `Title Here`,
                                            mc: `$6.7K`,
                                            dataChart: {
                                                label: [
                                                    "2023-12-01", "2023-12-02", "2023-12-03", "2023-12-04", "2023-12-05",
                                                    "2023-12-06", "2023-12-07", "2023-12-08", "2023-12-09", "2023-12-10",
                                                    "2023-12-11", "2023-12-12", "2023-12-13", "2023-12-14", "2023-12-15",
                                                    "2023-12-16", "2023-12-17", "2023-12-18", "2023-12-19", "2023-12-20",
                                                    "2023-12-21", "2023-12-22", "2023-12-23", "2023-12-24", "2023-12-25"
                                                ],
                                                data: [704, 675, 891, 42, 966, 191, 44, 920, 282, 77, 994, 561, 495, 746, 269, 939, 557, 817, 486, 406, 785, 520, 581, 839, 155],
                                                type: "up"
                                            },
                                            created: `6VJnqo`,
                                            time: `32m ago`,
                                            replies: 19,
                                        }} />
                                    </div>
                                </> : ""}

                                {ToogleMenu === listMenu[4] ? <>
                                    <div className="gap-[20px] grid grid-cols-1 w-full">
                                        <div className="gap-3 grid grid-cols-1 w-full">
                                            {
                                                followers.map((obj, i) => {
                                                    return <>
                                                        <div className="flex justify-between items-center">
                                                            <div className="flex items-center gap-2">
                                                                <h5 className='font-medium text__16'>{obj.name}</h5>
                                                                <h5 className='font-medium text-[#999999] text__14'>·</h5>
                                                                <h5 className='font-medium text-[#999999] text__14'>{obj.coin} coins</h5>
                                                            </div>

                                                            {
                                                                obj.follower ? <div className="flex items-center gap-2 cursor-pointer">
                                                                    <img src={LoadFile("images/Trash.svg")} alt="" />
                                                                    <p className='font-medium text-[#F8C0A2] underline text__14'>Remove</p>
                                                                </div> : <div className="flex items-center gap-2 cursor-pointer">
                                                                    <img src={LoadFile("images/UserPlus.svg")} alt="" />
                                                                    <p className='font-medium underline text__14'>Followback</p>
                                                                </div>
                                                            }

                                                        </div>
                                                        {
                                                            i < followers.length - 1 ? <div className='bg-[rgba(255,255,255,0.12)] w-full h-[1px]'></div> : ""
                                                        }

                                                    </>
                                                })
                                            }
                                        </div>

                                        <Pagination />
                                    </div>
                                </> : ""}

                                {ToogleMenu === listMenu[5] ? <>
                                    <div className="gap-[20px] grid grid-cols-1 w-full">
                                        <div className="gap-3 grid grid-cols-1 w-full">
                                            {
                                                following.map((obj, i) => {
                                                    return <>
                                                        <div className="flex justify-between items-center">
                                                            <div className="flex items-center gap-2">
                                                                <h5 className='font-medium text__16'>{obj.name}</h5>
                                                                <h5 className='font-medium text-[#999999] text__14'>·</h5>
                                                                <h5 className='font-medium text-[#999999] text__14'>{obj.coin} coins</h5>
                                                            </div>

                                                            <div className="flex items-center gap-2 cursor-pointer">
                                                                <img src={LoadFile("images/UserMinus.svg")} alt="" />
                                                                <p className='font-medium underline text__14'>Unfollow</p>
                                                            </div>


                                                        </div>
                                                        {
                                                            i < followers.length - 1 ? <div className='bg-[rgba(255,255,255,0.12)] w-full h-[1px]'></div> : ""
                                                        }
                                                    </>
                                                })
                                            }
                                        </div>

                                        <Pagination />
                                    </div>
                                </> : ""}
                            </div>

                        </div>

                    </div>

                </div>
            </ModalWrapper>
        </Fragment>
    )
}

export default ModalProfile
