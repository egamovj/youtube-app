/** @format */
import { useContext } from "react";
import { CtxProvider } from "../../context/GlobalState";

const PrivateRoute = () => {
  const { bgMode, asideText } = useContext(CtxProvider);
  const name = JSON.parse(localStorage.getItem("userName"));

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
          <h2 className={`text-[36px]`}>
            Hi{" "}
            <span className='userName'>{name?.name ? name?.name : "User"}</span>
            !{" "}
          </h2>
          <h1 className={`text-[28px]`}>Successfully logged✅</h1>
          {/* <div className={`text-[18px]`}>The API is not free😉</div> */}
        </section>
      </div>
    </main>
  );
};

export default PrivateRoute;