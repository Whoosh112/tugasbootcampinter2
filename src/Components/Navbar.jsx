const logoChill = "/assets/assetgambar/logochill.png";
const avatar = "/assets/assetgambar/assetgambarberanda/avatar.png";
const keyboardarrowdown = "/assets/assetgambar/assetgambarberanda/KeyboardArrowDown.png";


import "./cssComponents/navbar.css"


function Navbar(){
    return (
    <>
        <nav className="navbar">
            <ul>
                <img src={logoChill} width="30%"/>
                <li>Series</li>
                <li>Film</li>
                <li>Daftar Saya</li>
            </ul>
            <div className="profile">
                <img src={avatar} width="50" height="50" alt="avatar" className="avatar"/>
                <img src={keyboardarrowdown} width="25" height="25" alt="KeyboardArrowDown" className="KeyboardArrowDown"/>
            </div>
        </nav>
    </>
    )
}

export default Navbar