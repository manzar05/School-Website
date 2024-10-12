import React from 'react'
import { Link } from 'react-router-dom'
// import LogoImage from ""
const Navbar = () => {
  return (
    <div className='w-full px-[5%] flex items-center justify-between sticky top-0 z-100 py-4 border-b bg-[#fcfcfc]'>
        <div className="flex items-center justify-between">
            {/* <img src={LogoImage} alt="" className="w-20" /> */}
            <span className="text-5xl font-bold text-[#17a2b8]">Kid Kinder</span>
        </div>
            <ul className='flex items-center justify-evenly m-0 p-0 text-lg'>
                <li className="">
                    <Link to="/" className="block min-w-[100px] text-center w-full h-full px-4 py-2 rounded-md hover:cursor-pointer transition-all duration-150 hover:bg-[#17a2b814] text-[#17a2b8]">Home</Link>
                </li>
                <li className="">
                    <Link to="/about" className="block min-w-[100px] text-center w-full h-full px-4 py-2 rounded-md hover:cursor-pointer transition-all duration-150 hover:bg-[#17a2b814] text-[#17a2b8]">About</Link>
                </li>
                <li className="">
                    <Link to="/about" className="block min-w-[100px] text-center w-full h-full px-4 py-2 rounded-md hover:cursor-pointer transition-all duration-150 hover:bg-[#17a2b814] text-[#17a2b8]">Classes</Link>
                </li>
                <li className="">
                    <Link to="/about" className="block min-w-[100px] text-center w-full h-full px-4 py-2 rounded-md hover:cursor-pointer transition-all duration-150 hover:bg-[#17a2b814] text-[#17a2b8]">Teachers</Link>
                </li>
                <li className="">
                    <Link to="/about" className="block min-w-[100px] text-center w-full h-full px-4 py-2 rounded-md hover:cursor-pointer transition-all duration-150 hover:bg-[#17a2b814] text-[#17a2b8]">Gallery</Link>
                </li>
                <li className="relative group">
                    <span className="block min-w-[100px] text-center w-full h-full px-4 py-2 rounded-md hover:cursor-pointer transition-all duration-150 hover:bg-[#17a2b814] text-[#17a2b8] ">Pages</span>
                    <ul className="m-0 p-1 w-full border rounded-md absolute top-[102%] left-[0%] bg-[#fff] min-w-[150px] hidden flex-col items-start justify-center gap-2 group-hover:flex z-10">
                        <li className="w-full"> 
                            <Link to="/about" className="block w-full h-full px-4 py-2 rounded-md hover:cursor-pointer transition-all duration-150 hover:bg-[#17a2b814] text-[#17a2b8]">Page 1</Link>
                        </li>
                        <li className="w-full"> 
                            <Link to="/about" className="block w-full h-full px-4 py-2 rounded-md hover:cursor-pointer transition-all duration-150 hover:bg-[#17a2b814] text-[#17a2b8]">Page 2</Link>
                        </li>
                    </ul>
                </li>
                <li className="">  
                    <Link to="/about" className="block min-w-[100px] text-center w-full h-full px-4 py-2 rounded-md hover:cursor-pointer transition-all duration-150 hover:bg-[#17a2b814] text-[#17a2b8]">Contact</Link>
                </li>
            </ul>
        <button className='px-6 py-2 rounded-full shadow-sm bg-[#17a2b8] text-[#fff] hover:cursor-pointer hover:bg-[#17a2b814] hover:text-[#17a2b8] ' type='button'>Join Class</button>
    </div>
  )
}

export default Navbar