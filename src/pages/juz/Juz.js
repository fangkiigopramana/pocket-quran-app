// import { Fragment } from "react";
import "../../component/card/surah/index.css";
import "../../App.css";
import { Link } from "react-router-dom";

export default function Juz() {

  const items = []

  for (let id = 1; id < 31; id++) {
    items.push(
      <article className="card">
              <table>
                  <tr>
                      <div className="card__img__container">
                          <img className="card__img" src="https://www.majesticquran.co.uk/wp-content/uploads/2018/11/Why-is-the-Quran-important-1030x542.jpg" alt="dancing-with-music-illustration"/>
                      </div>
                  </tr>
                  <tr>
                      <div className="card_detail" style={{paddingTop: "20px", paddingLeft: "20px", paddingRight:"20px", paddingBottom: "20px"}}>
                          <h3 className="title-content" style={{color: "black"}}>Juz Ke-{id}
                          </h3>
                          
                          <Link to={`/juz/${id}`}>
                              <button className="btn detail_btn" style={{marginLeft:"auto"}}> More Detail</button>
                          </Link>                        
                      </div>
                  </tr>
              </table>
        </article>
    )
  }

  return (
    <>
        <p className="title-page">Daftar Juz</p>
          <section className="main-section">
            {items}   
          </section>
    </>

  );
}
