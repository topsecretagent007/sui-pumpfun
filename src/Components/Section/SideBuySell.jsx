import React, { Fragment, useEffect, useState } from 'react'
import { LoadFile } from '../../Helper/LoadFile';
import { buyMath, buyWeb3, sellMath, sellWeb3 } from '../../Lib/web3';
import { useSuiClient, useWallet } from '@suiet/wallet-kit';
import { buyMemeTokenWeb2, getSpecificMemeHolderWeb2, sellMemeTokenWeb2 } from '../../Lib/web2';
import { toast } from 'react-hot-toast';
import { useGlobalContext } from '../../Hook/GlobalProvider';

const SideBuySell = ({ memeData }) => {
  const { setBondingCurve } = useGlobalContext();
  const [ToogleBuySell, setToogleBuySell] = useState("Buy");
  const [balance, setBalance] = useState(0);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [Amount, setAmount] = useState(0);
  const [EstAmount, setEstAmount] = useState(0);
  const [MemeAmount, setMemeAmount] = useState(0);
  const [EstMemeAmount, setEstMemeAmount] = useState(0);
  const [realCurve, setRealCurve] = useState();
  const [holders, setHolders] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const wallet = useWallet();
  const client = useSuiClient();

  const buyHandle = async () => {
    if (!wallet?.account?.address) {
      return toast.error("Wallet Connect");
    }
    if (Amount === 0 || Amount === "") {
      return toast.error("Input Amount");
    }
    const tt = toast.loading("Buying Meme ...");
    if ( ) {
      
      toast.success("Bought successfully", { id: tt });
    } else {
      toast.error("Buying Meme Error", { id: tt });
    }
  }

  const sellHandle = async () => {
    if (!wallet?.account?.address) {
      return toast.error("Wallet Connect");
    }
    if (MemeAmount === 0 || MemeAmount === "") {
      return toast.error("Input Amount");
    }
    const tt = toast.loading("Selling Meme ...");
   
  }

  const estimatedBuy = async () => {
    setEstMemeAmount(out / Number(1000000))
  }

  useEffect(() => {
  }, [wallet, memeData, refresh])

  useEffect(() => {
  }, [realCurve, Amount])

  useEffect(() => {
  }, [realCurve, MemeAmount])

  useEffect(() => {
    if (memeData) {
      client.getObject({
        id: memeData && JSON.parse(memeData.bondingCurve)[0].objectId,
        options: {
          showContent: true
        }
      }).then(data => {
        console.log("curve ", data, memeData && JSON.parse(memeData.bondingCurve)[0].objectId)
      })
    }
  }, [memeData]);

  useEffect(() => {
    setLoading(true);
    if (page >= 100000000000) { setLoading(false); return; }
      setLoading(false);
    }).catch(err => {
      setLoading(false);
    });
  }, [page]);


  return (
    <Fragment>
      <div className="gap-[20px] grid grid-cols-1 pt-2">
        <div className="grid grid-cols-2 p-[2px] border !border-[#4DA2FF] border-solid rounded-[9px] outline-none">
          <div onClick={() => setToogleBuySell("Buy")} className={"font-[700] cursor-pointer text-center text-[15.41px] text__12 px-[20px] py-[6px] rounded-[9px] " + (ToogleBuySell === "Buy" ? "bg-[#039855] border !border-[rgba(221,221,221,0.12)]" : "")}>Buy</div>
          <div onClick={() => setToogleBuySell("Sell")} className={"cursor-pointer text-center font-[700] text-[15.41px] text__12 px-[20px] py-[6px] rounded-[9px] " + (ToogleBuySell === "Sell" ? "bg-[#FE6666] border !border-[rgba(221,221,221,0.12)]" : "")}>Sell</div>
        </div>

        <div className="">
          {
            ToogleBuySell === "Buy" ?
              <>
                <div className='flex justify-between'>
                  <label htmlFor="" className='mb-1 text-[#B3B3B3] text__14'>Amount (SUI)</label>
                  <label htmlFor="" className='text-[#B3B3B3] text__14'> {balance} (SUI)</label>
                </div>
                <div className="flex items-center gap-2 pr-3 border !border-[#4DA2FF]/30 rounded-xl h-[46px] overflow-hidden">
                  <div className="flex flex-shrink-0 justify-center items-center bg-transparent px-2 !border-[#4DA2FF]/30 border-r h-full font-bold text__16">
                    <div className="flex items-center gap-2 px-2 tradeLabel">
                      <img src={LoadFile("images/sui.svg")} alt="" className='w-5 h-5' />
                      <p className='font-bold text__14'>SUI</p>
                    </div>
                  </div>
                  <input onChange={(e) => setAmount(e.target.value)} type="text" className='bg-transparent shadow-none active:hover:focus:shadow-none outline-none active:hover:focus:outline-none w-full placeholder:text-[#999999] text-right text__14' placeholder='00' value={Amount} />
                </div>
              </>
              :
              <>
                <div className='flex justify-between'>
                  <label htmlFor="" className='mb-1 text-[#B3B3B3] text__14'>Amount ({memeData && JSON.parse(memeData.token).name})</label>
                  <label htmlFor="" className='text-[#B3B3B3] text__14'> {tokenBalance} ({memeData && JSON.parse(memeData.token).name})</label>
                </div>
                <div className="flex items-center gap-2 pr-3 border !border-[#4DA2FF]/30 rounded-xl h-[46px] overflow-hidden">
                  <div className="flex flex-shrink-0 justify-center items-center bg-transparent px-2 !border-[#4DA2FF]/30 border-r h-full font-bold text__16">
                    <div className="flex flex-row items-center gap-2 bg-transparent px-2">
                      <img src={memeData && JSON.parse(memeData.token).icon} alt="" className='flex rounded-full w-6 h-6 object-cover overflow-hidden' />
                      <p className='font-bold text__14'>{memeData && JSON.parse(memeData.token).name}</p>
                    </div>
                  </div>
                  <input onChange={(e) => setMemeAmount(e.target.value)} type="text" className='bg-transparent shadow-none active:hover:focus:shadow-none outline-none active:hover:focus:outline-none w-full placeholder:text-[#999999] text-right text__14' placeholder='00' value={MemeAmount} />
                </div>
              </>
          }
        </div>

        {
          ToogleBuySell === "Buy" ?
            <div className="flex flex-wrap justify-start items-center gap-2 lg:gap-2 xx:gap-3">
              <div className="hover:bg-white/10 p-[4px_12px] border !border-[#4DA2FF]/30 rounded-full font-medium cursor-pointer text__14" onClick={() => setAmount(0)}>Reset</div>
              <div className="hover:bg-white/10 p-[4px_12px] border !border-[#4DA2FF]/30 rounded-full font-medium cursor-pointer text__14" onClick={() => setAmount(0.1)}>0.1 SUI</div>
              <div className="hover:bg-white/10 p-[4px_12px] border !border-[#4DA2FF]/30 rounded-full font-medium cursor-pointer text__14" onClick={() => setAmount(0.5)}>0.5 SUI</div>
              <div className="hover:bg-white/10 p-[4px_12px] border !border-[#4DA2FF]/30 rounded-full font-medium cursor-pointer text__14" onClick={() => setAmount(1)}>1 SUI</div>
            </div>
            :
            <div className="flex flex-wrap justify-start items-center gap-2 lg:gap-2 xx:gap-3">
              <div className="hover:bg-white/10 p-[4px_12px] border !border-[#4DA2FF]/30 rounded-full font-medium cursor-pointer text__14" onClick={() => setMemeAmount(0)}>Reset</div>
              <div className="hover:bg-white/10 p-[4px_12px] border !border-[#4DA2FF]/30 rounded-full font-medium cursor-pointer text__14" onClick={() => setMemeAmount(tokenBalance * 0.1)}>10 %</div>
              <div className="hover:bg-white/10 p-[4px_12px] border !border-[#4DA2FF]/30 rounded-full font-medium cursor-pointer text__14" onClick={() => setMemeAmount(tokenBalance * 0.25)}>25 %</div>
              <div className="hover:bg-white/10 p-[4px_12px] border !border-[#4DA2FF]/30 rounded-full font-medium cursor-pointer text__14" onClick={() => setMemeAmount(tokenBalance * 0.5)}>50 %</div>
              <div className="hover:bg-white/10 p-[4px_12px] border !border-[#4DA2FF]/30 rounded-full font-medium cursor-pointer text__14" onClick={() => setMemeAmount(tokenBalance)}>100%</div>
            </div>
        }

        {
          ToogleBuySell === "Buy" ?
            <>
              <div className="flex justify-center lg:justify-between items-center gap-2 lg:gap-2 xx:gap-3">
                You receive {EstMemeAmount.toFixed(3)} {memeData && JSON.parse(memeData.token).name}
              </div>

              <div onClick={() => {
                if (Number(balance) >= Number(Amount)) buyHandle();
              }}
                className={`${Number(balance) >= Number(Amount) ? "cursor-pointer" : ""} bg-[#039855] flex items-center text-center justify-between gap-2 rounded-[5.33px] w-full h-[46px] px-3 border !border-[rgba(255,255,255,0.20)]`}>
                <p className='w-full font-medium text__14 clamp-1'>
                  <span className='font-[700] text-[15.41px] text-white'>
                    {Number(balance) >= Number(Amount) ? "Trade" : "Insufficient Sui Balance"}
                  </span>
                </p>
              </div>
            </>
            :
            <>
              <div className="flex justify-center lg:justify-between items-center gap-2 lg:gap-2 xx:gap-3">
                You receive {EstAmount && EstAmount.toFixed(3)} SUI
              </div>

              <div onClick={() => {
                if (Number(tokenBalance) >= Number(MemeAmount)) sellHandle();
              }}
                className={`${Number(tokenBalance) >= Number(MemeAmount) ? "cursor-pointer" : ""} bg-[#FE6666] flex items-center text-center justify-between gap-2 rounded-[5.33px] w-full h-[46px] px-3 border !border-[rgba(255,255,255,0.20)]`}>
                <p className='w-full font-medium text__14 clamp-1'>
                  <span className='font-[700] text-[15.41px] text-white'>
                    {Number(tokenBalance) >= Number(MemeAmount) ? "Trade" : `Insufficient Balance`}
                  </span>
                </p>
              </div>
            </>
        }

        <div className="p-4 border !border-[#4DA2FF]/30 rounded-[12px]">
          <img src={memeData && JSON.parse(memeData.token).icon} className='rounded-[8px] w-[88px] h-[88px] object-cover' alt="" />

          <div className="mt-4">
            <h5 className='mb-1 font-medium text__20'>
              {memeData && JSON.parse(memeData.token).name}
            </h5>
            <p className='text-[#999999] text__14'>
              {memeData && JSON.parse(memeData.token).description}
            </p>
          </div>
        </div>

        <div className="gap-[12px] grid grid-cols-1">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <p>Bonding Curve Progress</p>
              <img src={LoadFile("images/Info.svg")} alt="" />
            </div>
            <h5 className='font-medium text__16'>
              {realCurve && (((800_000_000_000_000 - realCurve?.data?.content?.fields?.available_token_reserves) / 800_000_000_000_000) * 100).toFixed(3)}%</h5>
          </div>

          <div className="relative bg-[rgba(255,255,255,0.16)] rounded-full w-full h-[16px] overflow-hidden">
            <div className="top-0 left-0 absolute bg-[#039855] rounded-full h-full" style={{ width: `${realCurve && (((800_000_000_000_000 - realCurve?.data?.content?.fields?.available_token_reserves) / 800_000_000_000_000) * 100).toFixed(3)}%` }}></div>
          </div>

          <p className='text-[#B3B3B3] text__14'>When the total liquidity reaches, 6,000 SUI, all the liquidity from the bonding curve will be deposited into Cetus and burned. Progression increases as the price goes up.There is {realCurve && (Number(realCurve?.data?.content?.fields?.sui_balance) / Number(1000000000)).toFixed(3)} SUI in the bonding curve.</p>
        </div>
      </div>
    </Fragment>
  )
}

export default SideBuySell
