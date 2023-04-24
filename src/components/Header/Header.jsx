import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'

import CottageIcon from '@mui/icons-material/Cottage';
import GroupsIcon from '@mui/icons-material/Groups';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StadiumIcon from '@mui/icons-material/Stadium';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/"><div><CottageIcon /></div>Home</Link>
        <Link to="/club"><div><StadiumIcon /></div>Club</Link>
        <Link to="/team"><div><GroupsIcon /></div>Equipo</Link>
        <Link to="/match"><div><SportsSoccerIcon /></div>Partidos</Link>
        <Link to="/trajectory"><div><AccountCircleIcon /></div>Carrera</Link>
      </nav>
    </header>
  )
}

export default Header