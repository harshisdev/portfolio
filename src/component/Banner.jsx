import React from 'react'
import harshImages from '../assets/images/harshimg.png'
import { Typewriter } from "react-simple-typewriter";


const Banner = ({ homeSectionRef }) => {

  return (
    <div className='container' ref={homeSectionRef}>
      <div className="row">
        <div className="col-12 col-lg-9">
          <h1 className='fs-6 text-center mb-4'>Ohh you found me? Hello!!!!</h1>
          <span className='fs-4 text-center'>
            Hi, I'm Harsh, &nbsp;
            <span className='text-primary'>
              <Typewriter
                words={['Frontend Developer, Web Developer, Ui Developer, Software Developer']}
                loop={5}
                cursor
                typeSpeed={100}
                deleteSpeed={150}
                delaySpeed={2000}
              />
            </span>
          </span>
          <br />
          <br />
          <span style={{ lineHeight: '1.8' }}>A Dedicated Frontend Web Developer with <b className="text-primary">2 year's 7 months</b> of hands-on experience in creating intuitive and visually appealing user interfaces. <br />Adept at translating design concepts into responsive and user-friendly web applications. Experienced in optimizing websites for search engines and implementing efficient web performance techniques. <br />Strong collaborative skills demonstrated through successful cross-functional teamwork with product and marketing teams. I stay current with evolving technologies and I am committed to continuous learning and growth.</span>
        </div>
        <div className="col-12 col-lg-3 my-4 my-lg-0 justify-content-center justify-content-lg-end d-flex">
          <img src={harshImages} style={{ width: 'auto', height: '280px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', borderRadius:'10px' }} alt="Harsh Kumar" />
        </div>
      </div>
    </div>
  )
}

export default Banner
