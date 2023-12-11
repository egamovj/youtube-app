/** @format */
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CtxProvider } from "../context/GlobalState";

export default function Main() {
  const { bgMode, asideText, setShowAside, setLoader } =
    useContext(CtxProvider);
  const [videos, setVideos] = useState(null);

  const options = {
    method: "GET",
    url: "https://youtube-v3-alternative.p.rapidapi.com/trending",
    params: {
      geo: "US",
      lang: "en",
    },
    headers: {
      "X-RapidAPI-Key": "0f5873d190msh3e48907368eb692p1a1fc9jsn029332610ea3",
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    try {
      setLoader(true);
      const response = await axios.request(options);
      const myData = await response.data;
      setLoader(false);
      const video = myData.data.map((item, index) => {
        return (
          <Link
            to={`/video/${item.videoId}/${item.title}/${item.publishedText}/${item.channelTitle}/${item.viewCount}`}
            key={index}
            onClick={setShowAside(false)}
          >
            <div className='flex flex-col max-w-[280px] gap-3 cursor-pointer hover:scale-110 transition-all'>
              <div className={`relative`}>
                <img
                  className='w-[280px] h-[150px] object-cover rounded-[14px]'
                  src={item.thumbnail[2].url}
                  alt='video'
                />
                <span
                  className={`absolute right-[7px] bottom-[7px] py-[2px] px-[6px] text-[12px] text-white bg-black/70 rounded-[12px] font-semibold`}
                >
                  {item.lengthText}
                </span>
              </div>
              <div className={`flex gap-2 w-full justify-start items-start`}>
                <div
                  className={`w-9 h-9 rounded-full overflow-hidden border-[1px] border-solid border-black/50`}
                >
                  <img
                    src={item.channelThumbnail[0].url}
                    alt='channel logo'
                    className={`w-[36px] h-[36px] object-cover`}
                  />
                </div>
                <div className='w-fit flex flex-col gap-1 p-1 pt-0'>
                  <h3 className={`text-[14px] line-clamp line-clamp-2`}>
                    {item.title}
                  </h3>
                  <div
                    className={`flex flex-col text-[11px] 
                  text-[#C2C2C2C2]
                  `}
                  >
                    {item.channelTitle}
                    <span className={`text-[11px] text-[#C2C2C2C2]`}>
                      {item.publishedText}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      });
      setVideos(video);
    } catch (error) {
      console.error(error);
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main
      className={`${
        bgMode ? "bg-[#17171E]/[0.99]" : "bg-white"
      } h-auto w-full pt-[84px]  nvs:pt-[76px] pr-[20px] pb-[20px] ${
        asideText ? "pl-[97px]" : "pl-[244px]"
      } md:pl-5 md:pr-5`}
    >
      <div className='container'>
        <section
          className={`flex flex-wrap justify-around gap-x-5 gap-y-10 ${
            bgMode ? "text-white" : "text-black"
          }`}
        >
          {videos}
          {videos}
          {videos}
          {videos}
        </section>
      </div>
    </main>
  );
}