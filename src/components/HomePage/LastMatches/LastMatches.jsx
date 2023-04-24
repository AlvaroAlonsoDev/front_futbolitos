import React from 'react'
import './LastMatches.css'
import { TeamLogo } from '../../TeamLogo/TeamLogo'
import Result from '../../Result/Result'

const LastMatches = ({match}) => {
        console.log(match);

    return (
        <section className='last-matches'>
            <div className='last-matches-title'>&nbsp; Tu último partido</div>
            <div className='last-matches-carousel'>
                <TeamLogo team={match.teamA}/>
                <Result match={match}/>
                <TeamLogo team={match.teamB}/>
            </div>
        </section>
    )
}

export default LastMatches