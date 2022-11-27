import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { HiBookOpen, HiDocument } from 'react-icons/hi'
import { MdGroup } from 'react-icons/md'
import './App.css'

import Ayat from './pages/ayat/Ayat'
import Surah from './pages/surah/Surah'
import Juz from './pages/juz/Juz'
import OneJuz from './pages/juz/ayat/Ayat'
import Profile from './pages/profile/Profile'

const App = () => {

  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup" style={{color: "black", textAlign: "left", padding: "5px 5px"}}>Pocket Quran App</p>
      </header>
      <Routes>
        <Route path="/" element={<Surah />} />
        <Route path="/surah" element={<Surah />} />
        <Route path="/surah/:number" element={<Ayat />} />
        <Route path="/juz" element={<Juz />} />
        <Route path="/juz/:id" element={<OneJuz />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <footer>
        <NavLink to="/surah" className={({ isActive }) => isActive ? "activeLink" : "normalLink"}>
          <HiDocument className="icon" />
        </NavLink>
        <NavLink to="/juz" className={({ isActive }) => isActive ? "activeLink" : "normalLink"}>
          <HiBookOpen className="icon" />
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? "activeLink" : "normalLink"}>
          <MdGroup className="icon" />
        </NavLink>
      </footer>
    </BrowserRouter>
  )
}

export default App
