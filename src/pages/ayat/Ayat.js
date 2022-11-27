// import { Fragment } from "react";
// import "../../component/card/ayat/index.css";

import axios from "axios";
import React, { useEffect, useState } from 'react'
import "../../App.css";
import "../ayat/Ayat.css";
import { useParams } from "react-router-dom";
import persianJs from "../../../node_modules/persianjs/persian"

export default function Ayat() {
    const params = useParams()
    
    const [ayats, setUsers] = useState([]);
    const [surat, setSurat] = useState({});

    const getUsers = async () => {
        try {
            let response = await axios({ 
                method: 'GET', 
                url: `https://quranme-api.vercel.app/quran/surah/${params.number}`,
                headers: {
                'auth-token': process.env.REACT_APP_API_KEY
                }
                });

                setUsers(response.data.data.ayah);
                setSurat(response.data.data.surah);

        } catch (e) {
            console.log(e.message)
        }
    }

  useEffect(() => {
    getUsers();
  })

  return (
      <>
     <p className="title-content" style={{backgroundColor: "rgb(34, 146, 53)", paddingTop: "10px", paddingBottom: "10px"}}>{surat?.name?.id}</p>
     <div style={{margin:"35px 35px",paddingBottom: "100px"}}>

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
    </div>
    </>

  );
}
