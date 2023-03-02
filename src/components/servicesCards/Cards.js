import React from 'react'
import './Cards.css'

import { Link } from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'

import Fade from 'react-reveal/Fade';


import Card1 from '../../assets/card2-1.jpg'
import Card2 from '../../assets/card2-2.jpg'
import Card3 from '../../assets/card2-3.jpg'


const Cards = () => {
  return (
    <>




            

<div>

    <div className="cards-header">
        <h1>WE OFFER VARIOUS SERVICES </h1>
            <p>We can help get you back on your feet one step at a time at Santa Monica Detox Center. </p>
        </div>

<div class="card-wrap">
<div class="tile"> 
  <Fade left>
  <img src={Card1} alt="Mental Health" loading="lazy"/>
  </Fade>
  <div class="text">
  <h1>MENTAL HEALTH TREATMENT​</h1>
  <p class="animate-text">Treatment options for a multitude of substance use disorders. Whether you suffer from alcohol, prescription drugs, or other substance abuse disorders, find better healing with us.</p>
    <div class="animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/mental-health">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>
  </div>
 </div>


<div class="tile"> 
<Fade top>
<img src={Card2} alt="Substance Use" loading="lazy"/>
</Fade>
  <div class="text">
  <h1>SUBSTANCE ABUSE TREATMENT</h1>
  <p class="animate-text">We treat a multitude of substance use disorders. Whether the client is suffering from an alcohol addiction, prescription drug addiction, we can help.</p>
  <div class="animate-text button">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/substance-abuse">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>
  </div>
 </div>


  
  <div class="tile"> 

  <Fade right>
  <img src={Card3} alt="Warehouse Employees" loading="lazy"/>
  </Fade>
  <div class="text">
  <h1>EMPLOYMENT ASSISTANCE</h1>
  <p class="animate-text">Our most unique feature sets you up with interview clothes, interview skills, resume assistance, and all the resources you need to get a job with a great company.</p>
  <div class="animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/jobs">
            <button>Learn More</button>
        </Link>
    </LinkRoll>

    </div>
  </div>
 </div>
</div>




</div>


    </>
  )
}

export default Cards