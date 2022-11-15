import { useState } from 'react'

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
              <h1 className=" text-2xl">LOGO</h1>
            </li>
            <li className=" py-4 px-3">
              <a href="#">Dashboard</a>
            </li>
          </ul>
          <ul className="hidden md:flex items-center space-x-1 gap-4">
            <li className=" py-4 px-3">
              <a href="#">Register</a>
            </li>
            <li className=" py-4 px-3">
              <a href="#">Login</a>
            </li>
          </ul>
          <div className=" md:hidden">
            <div onClick={() => toggleNav()}>Burger</div>
          </div>
        </div>
        <div className={` text-gray-100 ${showNav ? ' md:flex' : ' hidden'}`}>
          <ul className="flex flex-col items-center gap-4">
            <li className=" py-2">
              <a href="#">Register</a>
            </li>
            <li className=" py-2">
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
