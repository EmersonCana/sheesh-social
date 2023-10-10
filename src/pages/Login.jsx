import React, { useState } from "react";
import Sheesh from "../components/icons/sheesh.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  //   const [user, setUser] = useState({
  //     email: null,
  //     password: null,
  //     checked: null,
  //   });
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [remember, setRemember] = useState(null);

  const navigate = useNavigate();

  const submitLogin = (e) => {
    e.preventDefault();

    setEmail(e.target.email.value);
    setPassword(e.target.password.value);
    setRemember(e.target.remember.checked);

    email !== null || password !== null
      ? localStorage.setItem(
          "data",
          JSON.stringify({
            email: email,
            password: password,
            remember: remember,
          })
        )
      : false;
    console.log(email, password, remember);
    if (localStorage.getItem("data")) {
      navigate("/home");
    }
  };
  return (
    <>
      <div className="grid h-screen w-full place-items-center">
        <div className="login-card px-4 py-8 rounded-sm shadow-xl w-[500px] bg-dark">
          <img src={Sheesh} alt="" className="h-auto w-[100px]" />
          <form
            action="/"
            method="post"
            className="flex flex-col"
            onSubmit={submitLogin}
          >
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="my-3 text-xl p-2"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="my-3 text-xl p-2"
            />
            <div className="remember-group flex gap-3 items-center text-white">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="h-[20px] w-[20px]"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className="button-group flex justify-between items-center">
              <span className="text-white">
                Don't have an account?{" "}
                <a href="#" className="underline">
                  Register.
                </a>
              </span>
              <button type="submit" className="bg-white px-6 py-2">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
