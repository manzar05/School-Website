import React from 'react'
// import teacherPic from '../../../assets/images/img/team-1.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProfileCard = ({data}) => {
  return (
    <div className="flex flex-col items-center pb-10 w-auto max-w-xs">
      <div className="relative w-40 h-40 md:w-60 md:h-60 group">
        <img
          className="w-full h-full rounded-full shadow-lg"
          src={data.teacherPic}
          alt="Teacher pic"
        />
        <div className="absolute inset-0 flex items-center justify-evenly rounded-full bg-gray-500 bg-opacity-70 opacity-0 group-hover:cursor-pointer  group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor:'#17a2b8ad'}}>
            <Link to={`https://twitter.com/your_username`} className="p-[0.3rem] rounded-full flex items-center justify-center bg-transparent hover:bg-[#fff] hover:text-[#000] text-[#fff] border border-[#fff]">
                <FaFacebook  className='w-[24px] h-[24px]'/>
            </Link>
            <Link to={`https://twitter.com/your_username`} className="p-[0.3rem]  rounded-full flex items-center justify-center bg-transparent hover:bg-[#fff] hover:text-[#000] text-[#fff] border border-[#fff]">
                <FaLinkedinIn className='w-[24px] h-[24px]'/>
            </Link>
            <Link to={`https://twitter.com/your_username`} className="p-[0.3rem]  rounded-full flex items-center justify-center bg-transparent hover:bg-[#fff] hover:text-[#000] text-[#fff] border border-[#fff]">
                <FaDiscord className='w-[24px] h-[24px]'/>
            </Link>
        </div>
      </div>

      {/* Profile info */}
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {data.teacherName}
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">{data.teacherBranch}</span>
    </div>
  )
}

export default ProfileCard