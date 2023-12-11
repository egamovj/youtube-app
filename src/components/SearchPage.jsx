/** @format */
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CtxProvider } from "../context/GlobalState";

function SearchPage() {
  const { bgMode, asideText, setShowAside, queryRef, depArrSearch, setLoader } =
    useContext(CtxProvider);
  const [videos, setVideos] = useState(null);

  const q = queryRef.current.value;

  const options = {
    method: "GET",
    url: "https://youtube-v3-alternative.p.rapidapi.com/search",
    params: {
      query: q ? q : "",
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
        if (item.type === "channel") {
          ("");
        } else {
          return (
            <Link
              to={`/video/${item.videoId}/${item.title}/${item.publishedText}/${item.channelTitle}/${item.viewCount}`}
              key={index}
              onClick={setShowAside(false)}
              className={`w-full kpx:flex kpx:justify-center`}
            >
              <div className='flex justify-start w-fit gap-10 cursor-pointer hover:scale-95  transition-all kpx:flex-col kpx:gap-1 kpx:text-center kpx:justify-center kpx:w-full'>
                <div className={`relative`}>
                  <img
                    className='w-[400px] h-[250px] object-cover rounded-[14px] hover:rounded-none transition-all kpx:mx-auto kpx:w-full'
                    src={item.thumbnail[0].url}
                    alt='video'
                  />
                  <span
                    className={`absolute right-[7px] bottom-[7px] py-[2px] px-[6px] text-[12px] text-white bg-black/70 rounded-[12px] font-semibold`}
                  >
                    {item.lengthText}
                  </span>
                </div>
                {/* <img
                  className='w-[400px] h-[250px] object-cover rounded-[14px] hover:rounded-none transition-all kpx:mx-auto kpx:w-full'
                  src={item.thumbnail[0].url}
                  alt='video'
                /> */}
                <div className='flex max-w-[600px] flex-col gap-1 p-4 kpx:mx-auto kpx:w-full'>
                  <h3
                    className={`line-clamp text-[18px] font-bold nvs:text-[14px]`}
                  >
                    {item.title}
                  </h3>
                  <div
                    className={`flex flex-col gap-2 text-[18px] nvs:text-[12px] kpx:w-full`}
                  >
                    Channel name: {item.channelTitle}
                    <span className={`text-[16px] nvs:text-[10px]`}>
                      {item.publishedText}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        }
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
  }, [depArrSearch]);

  return (
    <main
      className={`${
        bgMode ? "bg-[#17171E]/[0.99]" : "bg-white"
      } h-auto w-full pt-[84px]  nvs:pt-[76px] pr-[20px] pb-[20px] ${
        asideText ? "pl-[97px]" : "pl-[244px]"
      } kpx:pl-5 kpx:pr-5`}
    >
      <div className='container'>
        <section
          className={`flex flex-col items-start justify-center gap-y-5 kpx:gap-y-10 ${
            bgMode ? "text-white" : "text-black"
          }`}
        >
          {videos}
        </section>
      </div>
    </main>
  );
}

export default SearchPage;