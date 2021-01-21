import React from 'react'
import adobeLogo from "./adobeLogo.svg"

function Navbar() {
    return (
        <nav className = "w-full flex h-16 bg-white border items-center p-3 justify-between text-sm">
          <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="gray" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
         <img src = {adobeLogo} height = "25px" width="25px" className="cursor-pointer"/>
            <p className="text-gray-800 hover:text-blue-400 cursor-pointer">Sign In</p>
        </nav>
    )
}
export default Navbar

