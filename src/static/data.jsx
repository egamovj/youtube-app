import { AiFillHome } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic} from "react-icons/si";
import { MdVideoLibrary } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiLike } from "react-icons/bi";

export const AsideItems = {
  Top: [
    { icon: <AiFillHome size={21} />, name: "Home" },
    { icon: <SiYoutubemusic size={21} />, name: "Shorts" },
    { icon: <MdOutlineSubscriptions size={21} />, name: "Subscriptions" },
  ],
  Middle: [
    { icon: <MdVideoLibrary size={21} />, name: "Library" },
    { icon: <VscHistory size={21} />, name: "History" },
    { icon: <AiOutlinePlaySquare size={21} />, name: "Your videos" },
    { icon: <AiOutlineClockCircle size={21} />, name: "Watch later" },
    { icon: <BiLike size={21} />, name: "Liked videos" },
  ],
};