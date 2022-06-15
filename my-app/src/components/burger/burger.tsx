import React, { useState } from 'react'
import burgerIcon from '../../assets/menu.png'
import { Menu } from '../menu/menu'
import { BurgerProps } from './types'

const Burger = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        <img src={burgerIcon} className="max-w-6 max-h-6 m-2" alt="menu" />
      </button>
      {open && (
        <div className="absolute">
          <Menu />
        </div>
      )}
    </div>
  )
}

export default Burger
