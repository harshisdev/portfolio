import React from 'react'
import harshImages from '../assets/images/harshimg.png'
import { Typewriter } from "react-simple-typewriter";


const Banner = () => {
  return (
    <div className='container' id='home'>
      <div className="row pt-4">
        <div className="col-9">
          <h1 className='fs-6 text-center'>Ohh you found me? Hello!!!!</h1>
          <span className='fs-4 text-center'>
            <Typewriter
              words={['I am Harsh Kumar Frontend Developer, Web Developer, Ui Developer']}
              loop={5}
              cursor
              typeSpeed={100}
              deleteSpeed={150}
              delaySpeed={2000}
            />
          </span>
          <br />
          <span style={{lineHeight:'2'}}>A Dedicated Frontend Web Developer with <b>2 years 3 months</b> of hands-on experience in creating intuitive and visually appealing user interfaces. <br />Adept at translating design concepts into responsive and user-friendly web applications. Experienced in optimizing websites for search engines and implementing efficient web performance techniques. <br />Strong collaborative skills demonstrated through successful cross-functional teamwork with product and marketing teams. I stay current with evolving technologies and I am committed to continuous learning and growth.</span>
        </div>
        <div className="col-3 justify-content-end d-flex">
          <img src={harshImages} style={{ width: 'auto', height: '280px', boxShadow: 'rgba(57, 76, 96, 0.15) 0px 0px 10px 13px' }} alt="Harsh Kumar" />
        </div>
      </div>
    </div>
  )
}

export default Banner
