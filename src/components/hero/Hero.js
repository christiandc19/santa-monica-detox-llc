import React from 'react'
import Fade from 'react-reveal/Fade';
import './Hero.css'

import Wave from '../../assets/waves.svg'

const Hero = () => {
    return (
<>        
        <div className='hero'>


        <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>


            <div className="hero-container">
                <div className="content">

                    <Fade right>
                        <h2 className='subtitle'>Substance Abuse Addiction and Mental Health Treatment Facility</h2>
                    </Fade>

                    <Fade right>
                        <h1>SANTA MONICA DETOX</h1>
                    </Fade>

            
                    <Fade bottom>
                        <p><i>"Walk the road of recovery with us"</i></p>
                    </Fade>



                </div>
            </div>
        </div>
</>

    )
}

export default Hero