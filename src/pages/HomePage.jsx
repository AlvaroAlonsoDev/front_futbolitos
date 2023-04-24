import React from 'react'
import LastMatches from '../components/HomePage/LastMatches/LastMatches'
import Stadium from '../components/HomePage/Stadium/Stadium'
import Calendar from '../components/HomePage/Calendar/Calendar'

const HomePage = () => {
  const match = {
    teamA: {
      name: 'Andalusia SL',
      src: 'https://i.pinimg.com/originals/8e/6c/9c/8e6c9c9b4ae53a08cdcfa8c5c620fcf7.png'
    },
    teamB: {
      name: 'Malaga SK',
      src: 'https://i.pinimg.com/originals/9f/35/6f/9f356f815b52b6ab044ae7e1ef298ad2.png'
    },
    result: '5-0',
    date: '23-07-2022',
    type: 'Liga'
  }

  return (
    <main className='container-home'>

      <LastMatches match={match}/>
      <Stadium />
      <Calendar />

    </main>
  )
}

export default HomePage
