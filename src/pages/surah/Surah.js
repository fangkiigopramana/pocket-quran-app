// import { Fragment } from "react";
import "../../component/card/surah/index.css";

import axios from "axios";
import React, { useEffect, useState } from 'react'
// import {Card, Col, Row} from 'react-bootstrap'
import Card from "../../component/card/surah";
import "../../App.css";


export default function Surah() {

  const [users, setUsers] = useState([]);
  
  const getUsers = async () => {
    try {
      let response = await axios({ 
        method: 'GET', 
        url: 'https://quranme-api.vercel.app/quran/surah/',
        headers: {
        'auth-token': process.env.REACT_APP_API_KEY
        }
        });
        setUsers(response.data.data)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    getUsers();
  })

  return (
    <>
     <p className="title-page" >Daftar Surah</p>
     <section class="main-section">
      {users.map((item, index) => {
        return (
          
            <Card data={item} key={item.id}
            // onClick={() => handleClick(item)} 
            />
            );
          })}
    </section>
     
  
   
    </>

  );
}
