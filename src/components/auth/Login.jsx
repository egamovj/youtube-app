/** @format */
import { useContext, useState } from "react";
import { CtxProvider } from "../../context/GlobalState";
import { Link } from "react-router-dom";
import firebase from "./firebase";

const Login = () => {
  const { bgMode, setShowAside, setLoader } = useContext(CtxProvider);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email && !password) {
      setError("Please fill all the fields!");
    }

    try {
      setLoader(true);
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setLoader(false);
      console.log("successfully logged!!!");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("User not found");
        setLoader(false);
      } else if (error.code === "auth/wrong-password") {
        setError("Password is incorrect");
        setLoader(false);
      } else {
        console.log(error.message);
        setLoader(false);
      }
    }
    setShowAside(false);

    setEmail("");
    setPassword("");
  };

  return (
    <main
      className={`${
        bgMode ? "bg-[#17171E]" : "bg-white"
      } h-fit w-full pt-[84px] relative left-0 nvs:pt-[76px] px-4 pb-4 kpx:px-0 mins:pb-[61px]`}
    >
      <div className='container'>
        <section
          className={`flex flex-col text-center gap-2 ${
            bgMode ? "text-white" : "text-black"
          }`}
        >
          <section
            className={`m-auto w-[600px] kpx:w-[400px] md:w-full select-none`}
          >
            <div className={``}>
              <h1 className={`text-[36px] font-bold my-7 select-none`}>
                Log in to <span className={`youtube`}>Youtube</span>
              </h1>
              <form onSubmit={handleLogin}>
                <input
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`my-5 py-[12px] pl-[23px] text-[18px] w-full bg-transparent outline-none ${
                    bgMode ? "text-white " : "text-black "
                  } rounded-[22px] ${
                    bgMode
                      ? "border-[2px] border-white/10"
                      : "border-[2px] border-black/10"
                  } select-all`}
                />
                <div className={`relative mb-7`}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`py-[12px] pl-[23px] text-[18px] w-full bg-transparent outline-none ${
                      bgMode ? "text-white " : "text-black "
                    } rounded-[22px] ${
                      bgMode
                        ? "border-[2px] border-white/10"
                        : "border-[2px] border-black/10"
                    } pr-[70px] select-all`}
                  />

                  <i
                    onClick={handleShowPassword}
                    className={`absolute top-[50%] translate-y-[-50%] right-[23px]
                      ${
                        showPassword
                          ? "fa-solid fa-eye-slash"
                          : "fa-solid fa-eye"
                      }
                    `}
                  ></i>
                </div>
                <span className={``}>{error}</span> <br />
                <button
                  className={`w-full rounded-[25px] bg-[#e52d27] text-white text-[18px] font-semibold py-3 my-3 select-none`}
                  type='submit'
                >
                  Log in
                </button>
              </form>
              <span className={``}>
                Not registered yet?{" "}
                <Link to='/register'>
                  <strong>Register</strong>
                </Link>
              </span>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default Login;