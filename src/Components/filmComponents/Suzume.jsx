const suzumePicture = "../assets/assetgambar/assetgambarberanda/filmnya/suzume.png";

import "../filmComponents/filmobjectcss.css"
function Suzume(){
    return(
        <>
        <div className="filmobject" style={{ backgroundImage:`url(${suzumePicture})`}}></div>
        </>
    )
}

export default Suzume