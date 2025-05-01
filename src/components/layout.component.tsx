import { Outlet } from 'react-router'
import Navbar from './navbar.component'
function Layout() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center w-full p-4 fixed top-0 bg-background z-50 m-0 max-w-[1280px] ">
        <Navbar />
      </div>
      <div className="flex-1 w-full max-w-[1280px] mt-16 mx-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout