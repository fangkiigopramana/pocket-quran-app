// import { Fragment } from "react";
import "../../../component/card/surah/index.css";
// import Card from "../../component/card/surah/index.js";

import axios from "axios";
import React, { useEffect, useState } from 'react'
// import {Card, Col, Row} from 'react-bootstrap'
// import Card from "../../component/card/surah";
import { useParams } from "react-router-dom";
import "../../../App.css";
import "../ayat/Ayat.css";
// import "../../App.css";
import persianJs from "../../../../node_modules/persianjs/persian"



export default function Ayat() {
  const idJuz = useParams();
  const [ayats, setAyats] = useState([]);
  const [juz, setJuz] = useState();  

  const getAyats = async () => {
    try {
      let response = await axios({ 
        method: 'GET', 
        url: `https://quranme-api.vercel.app/quran/juz/${idJuz.id}`,
        headers: {
        'auth-token': process.env.REACT_APP_API_KEY
        }
        });
        setAyats(response.data.data.ayah)
        setJuz(response.data.data.juz)
        // console.log(ayats.ayah);
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    getAyats();
  })

  return (
    <>
    <p className="title-content" style={{backgroundColor: "rgb(34, 146, 53)", paddingTop: "10px", paddingBottom: "10px"}}>Daftar Ayat Juz Ke-{juz}</p>
     <section className="main-section" style={{marginRight: "35px"}}>
      {ayats.map((item, index) => {
        return (
          <div className="extract">
                  <div className="extract-inner">
                      <div className="extract-title">
                          <h2 style={{fontSize:"40px", color: "black"}}><span style={{fontSize: "20px"}}>({persianJs(`${item.ayah}`).englishNumber().toString()})   </span> {item.text.ar}</h2>
                          <audio controls>
                              <source src={item.audio}></source>
                          </audio>
                      </div>
                      <div className="extract-description" style={{textAlign: "right", marginTop: "25px", color:"black"}}>            
                          <p>
                          {item.text.id} ({item.name.id}:[{item.ayah}])
                          </p>
                      </div>
                          <p></p>
              </div>
          </div>          
            );
          })}
    </section> 
    </>

  );
}
