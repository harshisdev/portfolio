import React from 'react'
import harshImages from '../assets/images/harshimg.png'

const Banner = () => {
  return (
    <div className='container' id='home'>
      <div className="row pt-4">
        <div className="col-9">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ipsa illo, esse voluptatibus labore ipsam perferendis adipisci assumenda cum quae autem nisi ratione at exercitationem eius ad dolor vitae consequuntur, ea, unde beatae cumque doloremque vel? Odit adipisci cupiditate dicta vel distinctio quis, fugit reiciendis, ea labore voluptatibus vero veniam, quo ipsa vitae officia consequuntur necessitatibus cumque illum! Optio eveniet cumque a quibusdam quisquam ut! Possimus ab modi culpa laborum excepturi, nobis quia accusantium natus suscipit at eos repudiandae. Distinctio totam inventore odio? Quia nihil omnis in, ex distinctio doloremque, fugit eum amet illum minima praesentium? Ut hic commodi placeat expedita esse reprehenderit temporibus? Numquam asperiores hic itaque aperiam dolore repudiandae, a quisquam non distinctio
        </div>
        <div className="col-3 justify-content-end d-flex">
          <img src={harshImages} style={{ width: 'auto', height: '250px', boxShadow: 'rgba(57, 76, 96, 0.15) 0px 0px 10px 13px' }} alt="Harsh Kumar" />
        </div>
      </div>
    </div>
  )
}

export default Banner
