const theLittleMermaidPicture = "/assets/assetgambar/assetgambarberanda/filmnya/thelittlemermaid.png";
import { useState } from "react";

import "../filmComponents/filmobjectcss.css"

function TheLittleMermaid(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <div className="filmobject"  onClick={() => setIsOpen(true)} style={{ backgroundImage:`url(${theLittleMermaidPicture})`} }></div>
            {isOpen && (
            <div className="overlay">
                <div className="filmpopup">
                    <div className="bigpicture"><img src={theLittleMermaidPicture}/></div>
                    <button onClick={()=>setIsOpen(false)}>X</button>
                    <div className="keterangan">
                        2021 8 episodes 16+ 
                        <br/>
                        Description for Movie Title 3.
                        <br/>
                        Cast: Cast Members 3
                        <br/>
                        Genre: Genre 3
                    </div>
                </div>
            </div>
            )}
        </>
    )
}

export default TheLittleMermaid