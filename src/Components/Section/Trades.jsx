import React, { Fragment, useState, useEffect } from 'react'
import Pagination from '../Widget/Pagination'
import { getSpecificMemeTokenTradeWeb2 } from '../../Lib/web2'
import moment from 'moment/moment'
import { TailSpin } from 'react-loader-spinner'


const Trades = () => {
  const [txns, setTxns] = useState([]);
  const [page, setPage] = useState(1);
  const [temp, setTemp] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

  }, [page, temp]);

  const changePage = async (type, pageData) => {
    
  }

  return (
    <Fragment>

      <div className="gap-[24px] grid grid-cols-1">
        <div className="p-3 border !border-[rgba(221,221,221,0.12)] rounded-2xl w-full">
          <div className="gap-2 grid grid-cols-1">
            <div className="grid grid-cols-6 xs:grid-cols-7">
              <div className="col-span-2 p-[4px_12px] text-[#999999] text__14">Account</div>
              <div className="p-[4px_12px] text-[#999999] text__14">Type</div>
              <div className="p-[4px_12px] text-[#999999] text__14">SUI</div>
              <div className="p-[4px_12px] text-[#999999] text__14">Token</div>
              <div className="hidden md:block p-[4px_12px] text-[#999999] text__14">Date</div>
              <div className="xs:col-span-2 md:col-span-1 p-[4px_12px] text-[#999999] text-right text__14"><span className='hidden xs:block'>Transaction</span><span className='xs:hidden'>txn</span></div>
            </div>
            <div className='bg-[rgba(255,255,255,0.12)] w-full h-[1px]'></div>

            {loading &&
              <div className='flex justify-center'>
                <TailSpin
                  visible={true}
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            }

            {
              !loading && txns.map((obj, i) => {
                return <div key={i}>
                  <div className="items-center grid grid-cols-6 xs:grid-cols-7">
                    <div className="col-span-2 p-[4px_12px]">

                      <div className="flex gap-2 w-full">
                        <img
                          src='./../images/user_avatar.png'
                          className='hidden ss:block border-[#4DA2FF] border-[2px] rounded-full w-[30px] h-[30px] object-cover'
                          alt="User Avatar"
                        />
                        {/* <img src={obj?.tokenData && JSON.parse(obj.tokenData).icon} className='hidden ss:block rounded-full w-[30px] h-[30px] object-cover' alt="" /> */}
                        <div className="bg-[#F8C0A2] p-[2px_10px] rounded-full font-medium text-[#4D4D4D] text__16">
                          <a href={`${SCAN_EXPLORER}/account/${obj.wallet}`}>
                            {obj.walletAlias === "true" ? "dev" : `${obj.wallet.slice(0, 5)}...${obj.wallet.slice(-3)}`}
                          </a>
                        </div>
                      </div>

                    </div>
                    <div className="p-[4px_12px]">
                      <p className={'font-medium text__14 ' + (obj.type === "buy" ? "text-[#429782]" : "text-[#F08174]")}>{obj.type}</p>
                    </div>
                    <div className="p-[4px_12px]">
                      <p className='text__14'>{Math.abs(Number(obj.suiAmount)).toFixed(3)}</p>
                    </div>
                    <div className="p-[4px_12px]">
                      <p className='text__14'>{Math.abs(Number(obj.tokenAmount)).toFixed(3)}</p>
                    </div>
                    <div className="hidden md:block p-[4px_12px]">
                      <p className='text__14'>{moment(obj.created_at).utc().format('YYYY:MM:DD HH:mm:ss')}</p>
                    </div>
                    <div className="xs:col-span-2 md:col-span-1 p-[4px_12px]">
                      <a href={`${SCAN_EXPLORER}/tx/${obj.tx}`} className="inline-block w-full text-right text__14">
                        <div className="hidden xs:flex justify-end items-center gap-2">
                          <p>{obj.tx.slice(0, 5)}...{obj.tx.slice(-5)}</p>
                          {/* <img src={LoadFile("images/Warning.svg")} alt="" /> */}
                        </div>
                        {/* <img src={LoadFile("images/ArrowUpRighta.svg")} className='xs:hidden ml-auto' alt="" /> */}
                      </a>
                    </div>
                  </div>

                  {
                    i < txns.length - 1 ? <div className='bg-[rgba(255,255,255,0.12)] w-full h-[1px]'></div> : ""
                  }
                </div>
              })
            }

          </div>

        </div>

        <div className="">
          <Pagination page={page} totalPages={Math.ceil(txns.length / 20)} changePage={changePage} />
        </div>
      </div>
    </Fragment>
  )
}

export default Trades
