/** @format */
import { useContext } from "react";
import { CtxProvider } from "../../context/GlobalState";

const History = () => {
  const { bgMode, asideText } = useContext(CtxProvider);

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
          className={`flex flex-col text-center gap-2 ${
            bgMode ? "text-white" : "text-black"
          }`}
        >
          <h1 className={`text-[36px]`}>History</h1>
          <div className={`text-[18px]`}>The API is not free😉</div>
        </section>
      </div>
    </main>
  );
};

export default History;