const TheLittleMermaid = "/assets/assetgambar/assetgambarberanda/filmnya/thelittlemermaid.png";
const DutyAfterSchool = "/assets/assetgambar/assetgambarberanda/filmnya/dutyafterschool.png";
const BigHero6 = "/assets/assetgambar/assetgambarberanda/filmnya/bighero6.png";
const AllOfUsAreDead = "/assets/assetgambar/assetgambarberanda/filmnya/allofusaredead.png";
const Missing = "/assets/assetgambar/assetgambarberanda/filmnya/missing.png";
const TombolKiri = "/assets/assetgambar/assetgambarberanda/arrow-left.png";
const TombolKanan = "/assets/assetgambar/assetgambarberanda/arrow-right.png";


import "./cssComponents/film.css"


const rilisBaru = [TheLittleMermaid, DutyAfterSchool, BigHero6, AllOfUsAreDead, Missing ]

function RilisBaru () {
  return(
    <>
      <div className="arrayfilm">
        <div className="tombolkiri"><img src={TombolKiri}/></div>
        
        {rilisBaru.map((film, index) => (
          <div key={index} className={`films${index}`} style={{ backgroundImage:`url(${film})`}}>

            {index == 0 && (
                        <div className="top10">Top<br/>10</div>

            )}

            {[1, 3].includes(index) &&  (
            <div className="episodebaru">Episode Baru</div>
          )}
          </div>
        ))}
        <div className="tombolkanan"><img src={TombolKanan}/></div>
    </div>
    </>

  )
}
export default RilisBaru