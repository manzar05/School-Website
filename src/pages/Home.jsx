import React from 'react'
import homeStyle from "../assets/css/home.module.css"
import { Link } from 'react-router-dom'
import SimpleCards from '../components/ui/Cards/SimpleCards'
import { MdFence } from "react-icons/md";
import { GiHandBag } from "react-icons/gi";
import { SiIfood } from "react-icons/si";
import { FaCar } from "react-icons/fa";
import { SiCraftcms } from "react-icons/si";
import { PiMusicNotesPlusFill } from "react-icons/pi";
import ImageOne from "../assets/images/img/about-1.jpg"
import ImageTwo from "../assets/images/img/about-2.jpg"
import ClassOne from "../assets/images/img/class-1.jpg"
import ClassTwo from "../assets/images/img/class-2.jpg"
import ClassThree from "../assets/images/img/class-3.jpg"
import { MdOutlineCheck } from "react-icons/md";
import PopularCards from '../components/ui/Cards/PopularCards';
import ProfileCard from '../components/ui/Cards/ProfileCard';
import TeamPic1 from '../assets/images/img/team-1.jpg'
import TeamPic2 from '../assets/images/img/team-2.jpg'
import TeamPic3 from '../assets/images/img/team-3.jpg'

const Home = () => {
  return (
    <div className='grid gap-5 grid-cols-4 auto-rows-[minmax(220px,auto)] text-[#171717]'>
        <div className={`col-span-4 row-span-1 border sm:row-span-2 px-4 py-2 sm:py-5 flex flex-col items-start justify-center bg-[#17a2b8] `}>
            <div className='grid gap-5 grid-cols-4 auto-rows-[minmax(200px,auto)] py-4'>
                <div className={`col-span-2 row-span-1 sm:row-span-2 px-4 py-2 sm:py-5 flex flex-col items-start justify-center`}>
                    <div className="flex items-start justify-center flex-col gap-4 ms-4 w-[80%]">
                        <h1 className="text-lg font-semibold text-[#dddddd]">Kids Learning Center</h1>
                        <h1 className="text-6xl font-bold text-[#dddddd]">New Approach to Kids Education</h1>
                        <h1 className="text-lg font-semibold text-[#dddddd]">Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet sed sit.
                            Ipsum dolor no justo dolor et, lorem ut dolor erat dolore sed ipsum at ipsum nonumy amet. Clita
                            lorem dolore sed stet et est justo dolore.</h1>
                        <div className="text-center"><Link to="/about" className="block min-w-[100px] text-center w-full h-full px-6 py-2 rounded-full hover:cursor-pointer transition-all duration-150 bg-[#00394f] text-[#fff] hover:bg-[#00394ff0] hover:text-[#f6f6f6]">Learn More</Link></div>
                    </div>  
                </div>
                <div className={`col-span-2 row-span-1 sm:row-span-2 px-4 py-2 sm:py-5 flex flex-col items-start justify-center ${homeStyle.landing_div}`}>
                </div>
            </div>
        </div>
        <div className={`col-span-4 row-span-1 sm:row-span-2 py-2 mt-[2rem] sm:py-5 px-[10%]`}>
            <div className="grid grid-cols-9 auto-rows-[minmax(150px,auto)] gap-4">
                <div className="col-span-8 sm:col-span-4 md:col-span-3 row-span-1">
                    <SimpleCards data={{title:"Play Ground", description: "Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...", icon: <MdFence className='text-[32px] text-[#17a2b8]' />}}/>
                </div>
                <div className="col-span-8 sm:col-span-4 md:col-span-3 row-span-1">
                    <SimpleCards data={{title:"Music and Dance", description: "Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...", icon: <PiMusicNotesPlusFill className='text-[32px] text-[#17a2b8]' />}}/>
                </div>
                <div className="col-span-8 sm:col-span-4 md:col-span-3 row-span-1">
                    <SimpleCards data={{title:"Arts and Crafts", description: "Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...", icon: <SiCraftcms className='text-[32px] text-[#17a2b8]' />}}/>
                </div>
                <div className="col-span-8 sm:col-span-4 md:col-span-3 row-span-1">
                    <SimpleCards data={{title:"Safe Transportation", description: "Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...", icon: <FaCar className='text-[32px] text-[#17a2b8]' />}}/>
                </div>
                <div className="col-span-8 sm:col-span-4 md:col-span-3 row-span-1">
                    <SimpleCards data={{title:"Healthy food", description: "Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...", icon: <SiIfood className='text-[32px] text-[#17a2b8]' />}}/>
                </div>
                <div className="col-span-8 sm:col-span-4 md:col-span-3 row-span-1">
                    <SimpleCards data={{title:"Educational Tour", description: "Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...", icon: <GiHandBag className='text-[32px] text-[#17a2b8]' />}}/>
                </div>
            </div>
        </div>
        <div className={`col-span-4 row-span-2 sm:row-span-2 py-[3rem] bg-[#f5f5f5] px-[10%]`}>
            <div className="flex items-center justify-center flex-grow h-100">
                <div className="w-1/3 w-100 rounded-md">
                    <img src={ImageOne} alt="" className='rounded-md'/>
                </div>
                <div className="w-2/3 px-[2rem]">
                    <div className="flex flex-col items-start justify-center gap-4">
                        <h1 className="text-2xl font-semibold text-[#17a2b8] uppercase title relative pe-10"><span className=''>Learn About Us</span> </h1>
                        <h1 className="text-5xl font-semibold">Best School For Your Kids</h1>
                        <h1 className="text-md font-normal w-2/3">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</h1>
                    </div>
                    <div className="flex items-center justify-start w-100 pt-6">
                        <div className="rounded-md w-36 h-30">
                            <img src={ImageTwo} alt="" className='w-100 h-50 rounded-md'/>
                        </div>
                        <ul className="flex-2 m-0 p-0 px-4 text-lg">
                            <li className="px-4 py-2 flex items-center justify-start border-b">
                                <span className="w-6 text-[#17a2b8]">
                                    <MdOutlineCheck />
                                </span>
                                <span>
                                    Labore eos amet dolor amet diam
                                </span>
                            </li>
                            <li className="px-4 py-2 flex items-center justify-start border-b">
                                <span className="w-6 text-[#17a2b8]">
                                    <MdOutlineCheck />
                                </span>
                                <span>
                                Etsea et sit dolor amet ipsum
                                </span>
                            </li>
                            <li className="px-4 py-2 flex items-center justify-start border-b">
                                <span className="w-6 text-[#17a2b8]">
                                    <MdOutlineCheck />
                                </span>
                                <span>
                                    Diam dolor diam elitripsum vero.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="text-left mt-4"><Link to="/about" className="inline-block min-w-[100px] px-6 py-2 rounded-full hover:cursor-pointer transition-all duration-150 bg-[#00394f] text-[#fff] hover:bg-[#00394ff0] hover:text-[#f6f6f6]">Learn More</Link></div>
                </div>
            </div>
        </div>
        <div className={`col-span-4 row-span-1 border sm:row-span-2 px-4 py-2 sm:py-5`}>
            <div className="flex flex-col items-canter justify-start gap-4">
                <h1 className=" relative centertitle  inline-block text-center">
                    <span className='text-xl font-semibold uppercase relative bg-[#eeeded] w-[100px] text-center px-4 z-1 text-[#17a2b8]'>Popular Classes</span> 
                </h1>
                <h1 className="text-4xl block text-center">Classes for Your Kids</h1>
                <div className="flex items-center justify-evenly flex-wrap gap-6 py-[1rem]">
                    <PopularCards 
                        title="Drawing Class"
                        description="Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo"
                        image={ClassOne}
                        tableData={{
                            firstHeader: "Age of Kids",
                            secondHeader: "Total Seats",
                            thirdHeader: "Class Time",
                            forthHeader: "Tution Fee",
                            firstData: "3 - 6 Years",
                            secondData: "40 Seats",
                            thirdData: "08:00 - 10:00",
                            forthData: "$290 / Month"
                        }}
                    />
                    <PopularCards 
                        title="Language Learning"
                        description="Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo"
                        image={ClassTwo}
                        tableData={{
                            firstHeader: "Age of Kids",
                            secondHeader: "Total Seats",
                            thirdHeader: "Class Time",
                            forthHeader: "Tution Fee",
                            firstData: "3 - 6 Years",
                            secondData: "40 Seats",
                            thirdData: "08:00 - 10:00",
                            forthData: "$290 / Month"
                        }}
                    />
                    <PopularCards 
                        title="Basic Science"
                        description="Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo"
                        image={ClassThree}
                        tableData={{
                            firstHeader: "Age of Kids",
                            secondHeader: "Total Seats",
                            thirdHeader: "Class Time",
                            forthHeader: "Tution Fee",
                            firstData: "3 - 6 Years",
                            secondData: "40 Seats",
                            thirdData: "08:00 - 10:00",
                            forthData: "$290 / Month"
                        }}
                    />
                </div>
            </div> 
        </div>
        <div className={`col-span-4 row-span-2 sm:row-span-2 py-[3rem] bg-[#f5f5f5] px-[10%]`}>
            <div className="flex items-center justify-center flex-grow h-100">
                <div className="w-2/3 px-[2rem]">
                    <div className="flex flex-col items-start justify-center gap-4">
                        <h1 className="text-2xl font-semibold text-[#17a2b8] uppercase title relative pe-10"><span className=''>Book a Seat</span> </h1>
                        <h1 className="text-5xl font-semibold">Book A Seat For Your Kid</h1>
                        <h1 className="text-md font-normal w-2/3">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</h1>
                    </div>
                    <ul className="flex-2 m-0 p-0 text-lg py-[3rem]">
                        <li className="px-4 py-2 flex items-center justify-start border-b">
                            <span className="w-6 text-[#17a2b8]">
                                <MdOutlineCheck />
                            </span>
                            <span>
                                Labore eos amet dolor amet diam
                            </span>
                        </li>
                        <li className="px-4 py-2 flex items-center justify-start border-b">
                            <span className="w-6 text-[#17a2b8]">
                                <MdOutlineCheck />
                            </span>
                            <span>
                            Etsea et sit dolor amet ipsum
                            </span>
                        </li>
                        <li className="px-4 py-2 flex items-center justify-start border-b">
                            <span className="w-6 text-[#17a2b8]">
                                <MdOutlineCheck />
                            </span>
                            <span>
                                Diam dolor diam elitripsum vero.
                            </span>
                        </li>
                    </ul>
                    <div className="text-left mt-4"><Link to="/about" className="inline-block min-w-[100px] px-6 py-2 rounded-full hover:cursor-pointer transition-all duration-150 bg-[#00394f] text-[#fff] hover:bg-[#00394ff0] hover:text-[#f6f6f6]">Learn More</Link></div>
                </div>
                <div className="w-1/3 w-100 rounded-md">
                    <img src={ImageOne} alt="" className='rounded-md'/>
                </div>
            </div>
        </div>
        <div className={`col-span-4 row-span-1 border sm:row-span-2 px-4 py-2 sm:py-5`}>
            <div className="flex flex-col items-canter justify-start gap-4">
                <h1 className=" relative centertitle  inline-block text-center">
                    <span className='text-xl font-semibold uppercase relative bg-[#eeeded] w-[100px] text-center px-4 z-1 text-[#17a2b8]'>Our Teachers</span> 
                </h1>
                <h1 className="text-4xl block text-center">Meet Our Teachers</h1>
                <div className="flex items-center justify-evenly flex-wrap gap-6 py-[1rem]">
                    <ProfileCard data={{teacherPic: TeamPic1, teacherName: "Julia Smith",teacherBranch: "Music Teacher", profile: {facebook:"facebook", linkedIn: "facebook", discord: "facebook"} }}/>
                    <ProfileCard data={{teacherPic: TeamPic2, teacherName: "Jhon Doe",teacherBranch: "Language Teacher", profile: {facebook:"facebook", linkedIn: "facebook", discord: "facebook"} }}/>
                    <ProfileCard data={{teacherPic: TeamPic3, teacherName: "Mollie Ross",teacherBranch: "Dance Teacher", profile: {facebook:"facebook", linkedIn: "facebook", discord: "facebook"} }}/>
                </div>
            </div> 
        </div>
        {/* <div className={`col-span-4 sm:col-span-2 row-span-1 border sm:row-span-2 px-4 py-2 sm:py-5`}>
                Box 7
        </div>
        <div className={`col-span-4 sm:col-span-2 row-span-1 border sm:row-span-2 px-4 py-2 sm:py-5`}>
                Box 8
        </div>
        <div className={`col-span-4 sm:col-span-2 row-span-1 border sm:row-span-2 px-4 py-2 sm:py-5`}>
                Box 9
        </div> */}
    </div>
  )
}

export default Home