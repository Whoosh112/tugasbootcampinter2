import { useEffect } from "react";

import Username from "../Components/Username";
import KataSandi from "../Components/KataSandi";
import LoginButtonBox from "../Components/LoginButtonBox";
import SudahPunyaAkun from "../Components/SudahPunyaAkun";

const logoChill = "/assets/assetgambar/logochill.png";

import "./cssPages/styleLogin.css"


function Login () {
  useEffect(() => {
    document.body.classList.add("loginpage");

    return () => {
      document.body.classList.remove("loginpage");
    };
  }, []);

   return (
    <div className="loginscreen">
      <div className="logo">
          <img src={logoChill} width="50%"/>
      </div>
        <div className="judul">
          <h1>Masuk</h1>
          <p>Selamat datang kembali!</p>
        </div>
          <div className="username">
            <Username />
          </div>
          <div className="katasandi">
           <KataSandi />
          </div>
          <div className="masalahlogin">
            <SudahPunyaAkun />
          </div>
          <div className="loginbuttonbox">
            <LoginButtonBox/>
        </div>
    </div>
    )
};

export default Login;