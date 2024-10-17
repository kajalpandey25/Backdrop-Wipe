import React from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {
  return (
    <div>
      <img src={assets.logo} alt="" />
      <button>
        Get started <img src={assets.arrow_icon} alt='' />
      </button>
    </div>
  )
}

export default Navbar
