import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export const Root = () => {
  return (
    <div className=" h-screen bg-slate-400">
      <Navbar />
      <Outlet />
    </div>
  )
}
