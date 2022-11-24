import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (): JSX.Element => {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => {
    setShowNav((prev) => (prev = !prev))
  }

  return (
    <nav className=" bg-slate-500">
      <div className=" max-w-6xl mx-auto">
        <div className="flex justify-between items-center text-gray-100">
          <ul className="flex justify-between items-center">
            <li className="m-4">
              <NavLink to="/" className=" text-2xl">
                LOGO
              </NavLink>
            </li>
            <li className=" py-4 px-3">
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
          <ul className="hidden md:flex ml-auto">
            <li className=" py-4 px-3">
              <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Register
              </NavLink>
            </li>
            <li className=" py-4 px-3">
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
          <div className=" md:hidden cursor-pointer mx-2">
            <div onClick={() => toggleNav()}>Burger</div>
          </div>
        </div>
        <div className={` text-gray-100 ${showNav ? ' md:flex' : ' hidden'}`}>
          <ul className="flex flex-col items-center gap-4">
            <li className=" py-2">
              <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Register
              </NavLink>
            </li>
            <li className=" py-2">
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
