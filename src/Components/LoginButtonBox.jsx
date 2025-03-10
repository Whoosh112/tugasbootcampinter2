const logoGoogle = "/assets/assetgambar/logogoogle.svg";
import "./cssComponents/loginButtonBox.css"


function LoginButtonBox(){
    return (
      <div className="loginbuttonbox">
        <button className="loginconfirm" type="button">Masuk</button>
        <p>Atau</p>
        <button className="loginconfirmgoogle" type="button">  <img src={logoGoogle}  width="30" height="30"/> Masuk dengan Google</button>
      </div>
    )
}

export default LoginButtonBox;
