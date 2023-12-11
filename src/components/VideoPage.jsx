/** @format */
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { CtxProvider } from "../context/GlobalState";

export default function VideoPage() {
  const { id, title, time, userName, viewCount } = useParams();
  const [viewCountSorted, setViewCountSorted] = useState("");
  const { bgMode, showAside, setShowAside, setLoader } =
    useContext(CtxProvider);
  const [videos, setVideos] = useState(null);
  const [subs, setSubs] = useState(false);

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
      console.log(myData);
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

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    switch (String(viewCount).length) {
      case 4:
        setViewCountSorted(
          String(viewCount).slice(0, 1) +
            "," +
            String(viewCount).slice(1, 2) +
            "k"
        );
        break;
      case 5:
        setViewCountSorted(
          String(viewCount).slice(0, 2) +
            "," +
            String(viewCount).slice(2, 3) +
            "k"
        );
        break;
      case 6:
        setViewCountSorted(
          String(viewCount).slice(0, 3) +
            "," +
            String(viewCount).slice(3, 4) +
            "k"
        );
        break;
      case 7:
        setViewCountSorted(
          String(viewCount).slice(0, 1) +
            "," +
            String(viewCount).slice(1, 2) +
            "m"
        );
        break;
      case 8:
        setViewCountSorted(
          String(viewCount).slice(0, 2) +
            "," +
            String(viewCount).slice(2, 3) +
            "m"
        );
        break;
      case 9:
        setViewCountSorted(
          String(viewCount).slice(0, 3) +
            "," +
            String(viewCount).slice(3, 4) +
            "m"
        );
        break;
      default:
        setViewCountSorted(viewCount);
    }
  }, [viewCount]);

  return (
    <main
      className={`${
        bgMode ? "bg-[#17171E]" : "bg-white"
      } h-fit w-full pt-[84px] relative left-0 nvs:pt-[76px] px-4 pb-4 kpx:px-0 md:pb-[101px] videoPage`}
    >
      <div
        className={`${
          showAside ? "fixed left-0 top-[61px] bg-black/20 z-[99999]" : "hidden"
        }`}
      ></div>
      <div className='container'>
        <section
          className={`flex justify-between  ${
            bgMode ? "text-white" : "text-black"
          }`}
        >
          <article className={`w-full pr-[36px] kpx:pr-0`}>
            <div
              className={`relative overflow-hidden w-full pt-[40%] xl:pt-[60%] lg:pt-[70%] md:pt-[80%] sm:pt-[100%]`}
            >
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                allowFullScreen
                className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-[14px]`}
              ></iframe>
            </div>
            <div className={`my-5`}>
              <h3
                className={`mb-5 text-[36px] ${
                  bgMode ? "text-white" : "text-black"
                } font-semibold md:text-center sm:text-[24px]`}
              >
                {title}
              </h3>
              <div
                className={`flex justify-between items-center mins:flex-col mins:gap-2 nvs:flex-col nvs:gap-3`}
              >
                <span
                  className={`flex items-center gap-2 text-[20px]  ${
                    bgMode ? "text-[#C2C2C2]" : "text-black"
                  } `}
                >
                  <i className={`fa-solid fa-eye text-[16px]`}></i>{" "}
                  {viewCountSorted} views
                </span>
                <div
                  className={`flex mins:justify-around mins:w-full items-center gap-3`}
                >
                  <button
                    className={`w-[70px] h-[40px] rounded-[20px] cursor-pointer ${
                      bgMode ? "bg-white/20" : "bg-black/10"
                    }`}
                  >
                    <i className={`fa-solid fa-thumbs-up`}></i>
                  </button>
                  <button
                    className={`w-[70px] h-[40px] rounded-[20px] cursor-pointer ${
                      bgMode ? "bg-white/20" : "bg-black/10"
                    }`}
                  >
                    <i className={`fa-solid fa-thumbs-down`}></i>
                  </button>
                  <button
                    className={`w-[70px] h-[40px] rounded-[20px] cursor-pointer ${
                      bgMode ? "bg-white/20" : "bg-black/10"
                    }`}
                  >
                    <i className={`fa-solid fa-share`}></i>
                  </button>
                </div>
              </div>
            </div>
            <hr className={`${bgMode ? "" : "bg-black"}`} />
            <div
              className={`flex justify-between items-center md:flex-col md:text-center`}
            >
              <div className={`my-4 flex gap-5 hab:gap-2`}>
                <div
                  className={`flex justify-center items-center w-[70px] h-[70px] rounded-full  ${
                    bgMode ? "bg-white/[0.5]" : "bg-black/[0.1]"
                  }`}
                >
                  <i className='fa-solid fa-user text-[36px] opacity-50'></i>
                </div>
                <div className={`hab:flex md:flex-col hab:items-center`}>
                  <h2
                    className={`text-[24px] ${
                      bgMode ? "text-white" : "text-black"
                    } font-medium mr-2 md:text-[18px]`}
                  >
                    {userName}
                  </h2>
                  <span className={`md:text-[14px]`}>{time}</span>
                </div>
              </div>
              <button
                onClick={() => setSubs(!subs)}
                className={`w-[125px] h-[40px] rounded-[20px] cursor-pointer ${
                  subs ? "bg-gray-500" : "bg-red-600"
                } text-white text-center text-[16px] mins:w-fit mins:bg-transparent ${
                  subs ? "mins:text-gray-500" : "mins:text-red-500"
                }`}
              >
                {subs ? "Subscribed" : "Subscribe"}
              </button>
            </div>
          </article>
          <article className={`flex flex-col gap-5 kpx:hidden`}>
            <h4
              className={`text-[36px] ${
                bgMode ? "text-white" : "text-black"
              } font-semibold`}
            >
              Next video
            </h4>
            {videos}
          </article>
        </section>
      </div>
    </main>
  );
}