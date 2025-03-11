const missingPicture = "/assets/assetgambar/assetgambarberanda/filmnya/missing.png";


import "../filmComponents/filmobjectcss.css"
function Missing(){
    return(
        <>
        <div className="filmobject" style={{ backgroundImage:`url(${missingPicture})`}}></div>
        </>
    )
}

export default Missing