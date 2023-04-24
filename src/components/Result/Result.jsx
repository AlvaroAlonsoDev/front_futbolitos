import React from 'react'
import './result.css'

const Result = ({match}) => {
  return (
    <div className='container-result'>
        <div className='result'>{match.result}</div>
        <div className='type'>{match.type}</div>
        <div className='date'>{match.date}</div>
    </div>
  )
}

export default Result