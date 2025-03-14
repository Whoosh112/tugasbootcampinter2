const bigHero6Picture = "../assets/assetgambar/assetgambarberanda/filmnya/bighero6.png";

import { useState } from "react";

import "../filmComponents/filmobjectcss.css"
function BigHero6(){
const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <div className="filmobject" onClick={() => setIsOpen(true)} style={{ backgroundImage:`url(${bigHero6Picture})`}}>
        {isOpen && (
                <div className="overlay">
                    <div className="filmpopup">
                        Film, no 2
                        <button onClick={()=>setIsOpen(false)}>X</button>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}

export default BigHero6