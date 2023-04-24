import React from 'react'
import './TeamLogo.css'

export const TeamLogo = ({team}) => {

  return (
    <div className='container-teamLogo'>
        <img src={team.src} alt="logo team" />
        <h4>{team.name}</h4>
    </div>
  )
}
