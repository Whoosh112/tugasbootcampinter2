const theLittleMermaidPicture = "/assets/assetgambar/assetgambarberanda/filmnya/thelittlemermaid.png";
import { useState } from "react";

import "../filmComponents/filmobjectcss.css"

function TheLittleMermaid(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <div className="filmobject"  onClick={() => setIsOpen(true)} style={{ backgroundImage:`url(${theLittleMermaidPicture})`} }>
            {isOpen && (
            <div className="overlay">
                <div className="filmpopup">
                    <div className="bigpicture" style={{backgroundImage:` url(${theLittleMermaidPicture})`}}></div>
                    <button onClick={()=>setIsOpen(false)}>X</button>
                </div>
            </div>
            )}
        </div>
        </>
    )
}

export default TheLittleMermaid