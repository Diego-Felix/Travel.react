import React, {useEffect} from "react";
import './footer.css'
import video2 from '../../Assets/ocean.mp4'
import { FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'


import Aos, { init } from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
    // Lets create a react hook to add a scroll animation....
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])



    return (
        // video section
        <section className='footer'>
            Footer
            <div className="videoDiv2">
                <video src={video2} type="video/mp4" muted autoPlay loop></video>
            </div>

            {/* Text-video */}
            <div className="secContent2 container">
                <div className="contactDiv2 flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv2 flex">
                        <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
                        <button data-aos="fade-up" className="btn flex" type="submit">
                            SEND <FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'>
                                <MdOutlineTravelExplore className="" icon2 /> Travel.
                            </a>
                        </div>
                        <div data-aos="fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam alias, sapiente doloribus minima delectus tempore ab libero, dolor voluptates vero quae, architecto accusamus quas numquam expedita eveniet eos praesentium necessitatibus.
                        </div>
                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter className="icon" />
                            <AiFillYoutube className="icon" />
                            <AiFillInstagram className="icon" />
                            <FaTripadvisor className="icon" />
                        </div>
                    </div>

                    <div className="footerLinks grid">

                        {/* Group One */}
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Payment
                            </li>
                        </div>

                        {/* Group two */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Bookings
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Rentcars
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                HostelWorld
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Trivago
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                TripAdvisor
                            </li>
                        </div>

                        {/* Group Three */}
                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                London
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                California
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Indonesia
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Europe
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Oceania
                            </li>
                        </div>

                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHTS RESERVED - ISRATECH 2022</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer