const jurassicWorldDominionPicture = "../assets/assetgambar/assetgambarberanda/filmnya/jurassicworlddominion.png";


import "../filmComponents/filmobjectcss.css"
function JurassicWorldDominion(){
    return(
        <>
        <div className="filmobject" style={{ backgroundImage:`url(${jurassicWorldDominionPicture})`}}></div>
        </>
    )
}

export default JurassicWorldDominion