import React, { Fragment, useEffect, useState, useRef } from 'react'
import { Container } from 'react-bootstrap';
import { faker } from '@faker-js/faker';
import CardListToken from '../Components/Widget/CardListToken';
import { useGlobalContext } from '../Hook/GlobalProvider';
import { TailSpin } from 'react-loader-spinner'
import { getMemeTokenWeb2, getTopMemeWeb2 } from '../Lib/web2';
import { calculateTimeAgo } from '../Lib/common';
import moment from 'moment/moment';
import { IoWater } from "react-icons/io5";
import { FaWater } from "react-icons/fa";

const CreateTokenPage = () => {
  const { setShowCreateMemeModal } = useGlobalContext();
  const searchRef = useRef();
  const generateLabels = (startDate, days) => {
    const labels = [];
    const start = new Date(startDate);

    for (let i = 0; i < days; i++) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      labels.push(date.toISOString().split("T")[0]); // Format YYYY-MM-DD
    }

    return labels;
  };
  const generateData = () => {
    return Array.from({ length: 25 }, () =>
      faker.number.int({ min: 10, max: 1000 })
    );
  };

  const dataListToken = []

  for (let i = 1; i <= 10; i++) {
    dataListToken.push({
      img: `./../images/avatar (${i}).png`,
      title: `Title Here`,
      mc: `$${(Math.random() * 10).toFixed(1)}K`,
      dataChart: {
        label: generateLabels("2023-12-01", 25),
        data: generateData(),
        type: Math.random() > 0.5 ? "up" : "down",
      },
      created: `6VJnqo`,
      time: `${Math.floor(Math.random() * 60)}m ago`,
      replies: Math.floor(Math.random() * 50),
    });
  }

  const [memes, setMemes] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [topMeme, setTopMeme] = useState();
  const [tempChart, setTempChart] = useState([]);
  const [, setTopChart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [, setTimeAgo] = useState();

  useEffect(() => {
    if (topMeme) {
      const { days, hours, minutes } = calculateTimeAgo(topMeme.created_at);
      let timeAgoString = '';
      if (days > 0) {
        timeAgoString += `${days} day${days > 1 ? 's' : ''} `;
      }
      timeAgoString += `${hours} hr${hours !== 1 ? 's' : ''} ${minutes} min${minutes !== 1 ? 's' : ''} ago`;
      // console.log(timeAgoString)
      if (days > 1) {
        setTimeAgo(moment(topMeme.created_at).utc().format('YYYY:MM:DD HH:mm:ss'))
      } else {
        setTimeAgo(timeAgoString)
      }
    }
  }, [topMeme])

  useEffect(() => {
    if (page < 10000000000) {
      setLoading(true);
      getMemeTokenWeb2({ page, search }).then(data => {
        console.log("getMemeTokenWeb2 ", data)
        if (!data || !data.memes) {
          console.log("No coin data sent from BE")
          return
        }
        if (page === 1) { setMemes(data?.memes); setTempChart(data?.chart) }
        else if (data?.memes.length > 0 && search === "") { setMemes([...memes, ...data.memes]); setTempChart([...tempChart, ...data?.chart]) }
        else if (data?.memes.length > 0 && search !== "") { setMemes([...memes, ...data.memes]); setTempChart([...tempChart, ...data?.chart]) }
        else if (data?.memes.length === 0) setPage(10000000000)
        setLoading(false);
      }).catch(err => {
        setLoading(false);
      })
    }
  }, [page, search]);

  useEffect(() => {
    getTopMemeWeb2().then(data => {
      console.log("getTopMemeWeb2 ", data)
      setTopMeme(data?.meme);
      setTopChart(data?.chart)
    }).catch(err => {
    })
  }, [])


  // modal Create Token
  const handleShowCreateToken = () => setShowCreateMemeModal(true);

  const moreMemeHandle = () => {
    console.log("page ", page)
    if (page < 10000000000) {
      setPage(page + 1);
    }
  }

  const searchHandle = async () => {
    setSearch(searchRef.current.value)
    setPage(1)
  }

  return (
    <Fragment>
      <div className='relative pt-5 lg:pt-10 pb-10 lg:pb-20 w-full overflow-hidden'>
        <Container>
          <div className="mb-[2rem] text-center">
            <h3 className='potential-topic text-4xl md:text-5xl'>Trending Tokens</h3>
          </div>
          <div className="flex justify-around items-center mt-[2rem] w-full">
            <div className="flex justify-between items-center bg-transparent mx-auto px-1 py-4 pr-1 pl-4 !border-[#4DA2FF] border-[2px] border-solid rounded-full w-full max-w-[590px] h-[52px]">
              <input type="text"
                ref={searchRef}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    searchHandle();
                  }
                }}
                className='bg-transparent shadow-none active:hover:focus:shadow-none pl-3 md:pl-4 outline-none active:hover:focus:outline-none w-full placeholder:text-[#999999] text-sm md:text-lg'
                placeholder='Search token ...' />
              <div
                onClick={searchHandle}
                className="flex flex-shrink-0 justify-center items-center bg-[#4DA2FF] rounded-full w-[40px] h-[40px] cursor-pointer">
                <img src={"./../images/Search.svg"} alt="" />
              </div>
            </div>

            <div className="flex justify-center items-center gap-3 p-2 min-w-[200px]">
              <div onClick={handleShowCreateToken} className="relative bg-[#6699EE] hover:bg-[#4DA2FF] p-[10px_20px] rounded-full font-medium text-black cursor-pointer">
                <p className='flex flex-row justify-center items-center gap-1 text-lg'>
                  <IoWater />
                  Create a Coin
                </p>
              </div>
            </div>
          </div>

          <div className="gap-[30px] grid md:grid-cols-2 pt-4">
            {
              memes.map((obj, index) => {
                return <div className="px-[32px] py-[9px] border-[#6699EE] border-[2px] hover:border-[#4DA2FF] border-solid rounded-[15px]" key={index}>
                  <CardListToken dataChart={obj} chart={tempChart[index]} />
                </div>
              })
            }
          </div>

          <div className="flex justify-center mt-[2rem] text-center cursor-pointer" >
            {loading ?
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
              : <></>}
          </div>
          {page < 10000000000 ?
            <div className="flex flex-col mt-[58px] px-[12px] w-full text-center" >
              <div onClick={moreMemeHandle} className='flex flex-row items-center gap-2 bg-[#6699EE] hover:bg-[#4DA2FF] shadow-[4.74px_4.74px_black] mx-auto px-16 py-2 rounded-full font-[700] text-[#000000] text-[24.65px] text-lg cursor-pointer'>
                <FaWater />
                See All
              </div>
            </div>
            : <></>
          }
        </Container>
      </div>
    </Fragment >
  )
}

export default React.memo(CreateTokenPage);
