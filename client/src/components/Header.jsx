import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      {/* ---------------- Left Side -------------- */}
      <div>
        <h1>Remove the <br /> <span>background</span>from <br/> images from free.</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever.</p>
        <div>
            <input type="file" name="" id="upload1" hidden />
            <label htmlFor="upload1">
                <img src={assets.upload_btn_icon} alt="" />
                <p>Upload your image</p>
            </label>
        </div>
      </div>
      {/* ---------------- right side --------------- */}
      <div>

      </div>
    </div>
  )
}

export default Header
