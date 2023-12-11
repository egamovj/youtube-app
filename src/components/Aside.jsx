/** @format */
import { useContext, useState } from "react";
import { CtxProvider } from "../context/GlobalState";
import { AsideItems } from "../static/data";
import { Link } from "react-router-dom";

import Gussie from '../assets/images/Gussie.png'
import Emma from '../assets/images/Emma.png'
import Belle from '../assets/images/Belle.png'
import Eunice from '../assets/images/Eunice.png'
import Leah from '../assets/images/Leah.png'
import Nora from '../assets/images/Nora.png'
import Settings from '../assets/images/settings.svg'

export default function Aside() {
  const { bgMode, asideText, showAside } = useContext(CtxProvider);
  const [active, setActive] = useState("Home");
  const [showMore, setShowMore] = useState(false);
 
  return (
    <aside
      className={`overflow-y-scroll fixed top-[64px] left-0 h-full md:bottom-0 md:top-auto md:h-[61px]  ${
        asideText ? "w-fit" : "w-[225px]"
      } md:w-full py-7 px-4 md:p-0 md:flex md:items-center ${
        bgMode ? "bg-[#17171E]" : "bg-white"
      } md:z-[999999] ${showAside ? "z-[999999]" : ""}`}
    >
      <div className='mb-4 md:m-0 md:flex md:flex-row md:justify-around md:items-center md:w-full'>
        {AsideItems.Top.map((item, index) => {
          return (
            <Link
              onClick={() => setActive(item.name)}
              to={`/${item.name === "Home" ? "" : item.name.toLowerCase()}`}
              key={index}
            >
              <div
                className={` h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer ${
                  asideText ? "w-fit" : ""
                } ${bgMode ? "hover:bg-white/20" : "hover:bg-black/10"} my-1 ${
                  item.name === active
                    ? `${bgMode ? "bg-white/20" : "bg-black/10"}`
                    : ""
                }`}
              >
                <span
                  className={`${asideText ? "mr-0" : "mr-5"} ${
                    bgMode ? "text-white" : ""
                  } md:m-0`}
                >
                  {item.icon}
                </span>
                <p
                  className={`p-2 text-sm font-medium ${
                    bgMode ? "text-white" : ""
                  } select-none ${asideText ? "hidden" : ""} md:hidden`}
                >
                  {item.name}
                </p>
              </div>
            </Link>
          );
        })}
        <Link to={"/privateroute"}>
          <li
            onClick={() => setActive("Private Route")}
            className={`h-10 md:w-[45px] md:h-[40px] flex justify-start px-3 rounded-xl items-center cursor-pointer ${
              asideText ? "w-fit" : ""
            } ${bgMode ? "hover:bg-white/20" : "hover:bg-black/10"} my-1 ${
              "Private Route" === active
                ? `${bgMode ? "bg-white/20" : "bg-black/10"}`
                : ""
            }`}
          >
            <i
              className={`fa-solid fa-lock text-[21px] flex justify-center items-center ${
                asideText ? "mr-0" : "mr-5"
              } ${bgMode ? "text-white" : ""} md:m-0`}
            ></i>
            <p
              className={`p-2 text-sm font-medium ${
                bgMode ? "text-white" : ""
              } select-none ${asideText ? "hidden" : ""} md:hidden`}
            >
              Private Route
            </p>
          </li>
        </Link>
      </div>
      <hr className='my-2 md:hidden' />
      <div
        className={`overflow-hidden transition-transform origin-top ${
          showMore ? "scale-y-1 h-auto" : "scale-y-0 h-0"
        } md:hidden`}
      >
        {AsideItems.Middle.map((item, index) => {
          return (
            <Link
              onClick={() =>
                setActive(item.name.toLowerCase().replace(/ /g, ""))
              }
              to={`/${item.name.toLowerCase().replace(/ /g, "")}`}
              key={index}
            >
              <div
                className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer ${
                  asideText ? "w-fit" : ""
                } ${bgMode ? "hover:bg-white/20" : "hover:bg-black/10"} my-1 ${
                  item.name.toLowerCase().replace(/ /g, "") === active
                    ? `${bgMode ? "bg-white/20" : "bg-black/10"}`
                    : ""
                }`}
              >
                <span
                  className={`${asideText ? "mr-0" : "mr-5"} ${
                    bgMode ? "text-white" : ""
                  }`}
                >
                  {item.icon}
                </span>
                <p
                  className={`p-2 text-sm font-medium ${
                    bgMode ? "text-white" : ""
                  } select-none ${asideText ? "hidden" : ""}`}
                >
                  {item.name}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      <li
        onClick={() => setShowMore(!showMore)}
        className={`h-10 flex justify-start px-3 rounded-xl items-center cursor-pointer ${
          asideText ? "w-fit" : ""
        } ${bgMode ? "hover:bg-white/20" : "hover:bg-black/10"} my-1 md:hidden`}
      >
        <i
          className={`fa-solid ${
            showMore ? "fa-chevron-up" : "fa-chevron-down"
          }  text-[21px] flex justify-center items-center ${
            asideText ? "mr-0" : "mr-5"
          } ${bgMode ? "text-white" : ""}`}
        ></i>
        <p
          className={`p-2 text-sm font-medium ${
            bgMode ? "text-white" : ""
          } select-none ${asideText ? "hidden" : ""}`}
        >
          {showMore ? "Hide" : "Show more"}
        </p>
      </li>
      <hr className='my-2 md:hidden' />
      <div className="p-2 flex flex-col gap-[30px]">
        <h1 className="text-lg font-bold">Subscriptions</h1>
        <div className="flex flex-col gap-[23px]">
          <div className="flex items-center gap-[10px] cursor-pointer">
            <img src={Gussie} alt="Gussie Singleton" />
            <span className="text-[#898989]">Gussie Singleton</span>
          </div>
          <div className="flex items-center gap-[10px] cursor-pointer">
            <img src={Nora} alt="Nora Francis" />
            <span className="text-[#898989]">Nora Francis</span>
          </div>
          <div className="flex items-center gap-[10px] cursor-pointer">
            <img src={Belle} alt="Belle Briggs" />
            <span className="text-[#898989]">Belle Briggs</span>
          </div>
          <div className="flex items-center gap-[10px] cursor-pointer">
            <img src={Eunice} alt="Eunice Cortez" />
            <span className="text-[#898989]">Eunice Cortez</span>
          </div>
          <div className="flex items-center gap-[10px] cursor-pointer">
            <img src={Emma} alt="Emma Hanson" />
            <span className="text-[#898989]">Emma Hanson</span>
          </div>
          <div className="flex items-center gap-[10px] cursor-pointer">
            <img src={Leah} alt="Leah Berry" />
            <span className="text-[#898989]">Leah Berry</span>
          </div>
        </div>
      </div>
      <div className="p-2 pt-16 pb-10 flex items-center gap-3 cursor-pointer">
        <img src={Settings} alt="Seetings icon" />
        <span className="text-[#898989]">Setting</span>
      </div>
    </aside>
  );
}