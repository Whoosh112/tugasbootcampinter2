const TheTomorrowWar = "/assets/assetgambar/assetgambarberanda/filmnya/thetomorrowwar.png";
const Quantumania = "/assets/assetgambar/assetgambarberanda/filmnya/quantumania.png";
const GuardianOfTheGalaxyVol3 = "/assets/assetgambar/assetgambarberanda/filmnya/guardianofthegalaxyvol3.png";
const AManCalledOtto = "/assets/assetgambar/assetgambarberanda/filmnya/amancalledotto.png";
const TheLittleMermaid = "/assets/assetgambar/assetgambarberanda/filmnya/thelittlemermaid.png";
const TombolKiri = "/assets/assetgambar/assetgambarberanda/arrow-left.png";
const TombolKanan = "/assets/assetgambar/assetgambarberanda/arrow-right.png";

import "./cssComponents/film.css"


const filmTrending = [TheTomorrowWar, Quantumania, GuardianOfTheGalaxyVol3, AManCalledOtto, TheLittleMermaid ]

function FilmTrending () {
  return(
    <>
      <div className="arrayfilm">
        <div className="tombolkiri"><img src={TombolKiri}/></div>
        
          {filmTrending.map((film, index) => (
            <div key={index} className={`films${index}`} style={{ backgroundImage:`url(${film})`}}>

              {film && (
              <div className="top10">Top <br/> 10</div>
            )}
            </div>
            
          ))}
        <div className="tombolkanan"><img src={TombolKanan}/></div>
          
    </div>
    </>

  )
}
export default FilmTrending