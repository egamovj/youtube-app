/** @format */
import { useContext, useState } from "react";
import { CtxProvider } from "../../context/GlobalState";
import { Link } from "react-router-dom";
import firebase from "./firebase";

const Register = () => {
  const { bgMode, setShowAside, setLoader } = useContext(CtxProvider);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name && !email && !password) {
      setError("Please fill all the fields!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password did not match!");
      return;
    }

    try {
      setLoader(true);
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      setLoader(false);
      localStorage.setItem("userName", JSON.stringify({ name: name }));
    } catch (error) {
      console.error(error);
      setLoader(false);
    }

    setShowAside(false);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
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
                Create an account
              </h1>
              <form onSubmit={handleSubmit}>
                <input
                  type='text'
                  placeholder='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`mb-5 py-[12px] pl-[23px] text-[18px] w-full bg-transparent outline-none ${
                    bgMode ? "text-white " : "text-black "
                  } rounded-[22px] ${
                    bgMode
                      ? "border-[2px] border-white/10"
                      : "border-[2px] border-black/10"
                  } select-all`}
                />
                <input
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`mb-5 py-[12px] pl-[23px] text-[18px] w-full bg-transparent outline-none ${
                    bgMode ? "text-white " : "text-black "
                  } rounded-[22px] ${
                    bgMode
                      ? "border-[2px] border-white/10"
                      : "border-[2px] border-black/10"
                  } pr-[70px] select-all`}
                />
                <div className={`relative mb-5`}>
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

                <input
                  type='password'
                  placeholder='Confirm Password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`mb-5 py-[12px] pl-[23px] text-[18px] w-full bg-transparent outline-none ${
                    bgMode ? "text-white " : "text-black "
                  } rounded-[22px] ${
                    bgMode
                      ? "border-[2px] border-white/10"
                      : "border-[2px] border-black/10"
                  } pr-[70px] select-all`}
                />
                <span className={``}>{error}</span>
                <button
                  type='submit'
                  className={`w-full rounded-[25px] bg-[#e52d27] text-white text-[18px] font-semibold py-3 my-3 select-none`}
                >
                  Create account
                </button>
              </form>
              <span className={``}>
                Do you have an account?{" "}
                <Link to='/login'>
                  <strong>Login</strong>
                </Link>
              </span>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default Register;