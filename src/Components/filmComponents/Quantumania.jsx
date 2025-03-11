const quantumaniaPicture = "/assets/assetgambar/assetgambarberanda/filmnya/quantumania.png";


import "../filmComponents/filmobjectcss.css"
function Quantumania(){
    return(
        <>
        <div className="filmobject" style={{ backgroundImage:`url(${quantumaniaPicture})`}}></div>
        </>
    )
}

export default Quantumania