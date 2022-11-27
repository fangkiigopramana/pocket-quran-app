// index.js
import React from "react";
import "./index.css";
import { Link } from "react-router-dom";


export default function index({ data }) {
    return (
    
        <article class="card">
            <table>
                <tr>
                    <div class="card__img__container">
                        <img class="card__img" src="https://www.whyislam.org/wp-content/uploads/2017/03/Quran-Read.jpg" alt="dancing-with-music-illustration"/>
                    </div>
                </tr>
                <tr>
                    <div class="card_detail" style={{paddingTop: "20px", paddingLeft: "20px", paddingRight:"20px", paddingBottom: "20px"}}>
                        <h3 className="title-content" style={{color: "black", fontSize: "20px"}}>
                            {data.name.ar}    /
                            <span style={{"font-size": "15px", "font-style": "italic"}}>{data.name.id}</span>
                        </h3>
                        
                        <Link to={`/surah/${data.number}`}>
                            <button class="btn detail_btn" style={{marginLeft:"auto"}}> More Detail</button>
                        </Link>                        
                    </div>
                </tr>
            </table>
      </article>

    );
}