const theLittleMermaidPicture = "/assets/assetgambar/assetgambarberanda/filmnya/thelittlemermaid.png";


import "../filmComponents/filmobjectcss.css"
function TheLittleMermaid(){
    return(
        <>
        <div className="filmobject" style={{ backgroundImage:`url(${theLittleMermaidPicture})`}}></div>
        </>
    )
}

export default TheLittleMermaid