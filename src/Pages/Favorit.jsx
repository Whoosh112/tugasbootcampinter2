import { useEffect } from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


import "./cssPages/styleFavorit.css"

function Favorit () {
useEffect(() => {
        document.body.classList.add("favoritpage");
    
        return () => {
          document.body.classList.remove("favoritpage");
        };
      }, []);

return (
    <>
    <div className="beranda">
      <div className="navbar">
          <Navbar />
      </div>
      <div className="favoritarray">
        
      </div>
      <div className="footer">
            <Footer />
        </div>
    </div>
    </>
    )
};

export default Favorit;