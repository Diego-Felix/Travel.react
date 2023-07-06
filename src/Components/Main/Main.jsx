import React, {useEffect} from "react";
import './main.css'

//import icons
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsClipboardCheck } from 'react-icons/bs'

//let me paste the array named data  
import img from '../../Assets/pexels-julie.jpg'
import img2 from '../../Assets/pexels-julie-a.jpg'
import img3 from '../../Assets/pexels-aleksandra.jpg'
import img4 from '../../Assets/pexels-jonas.jpg'
import img5 from '../../Assets/pexels-vincent.jpg'

import Aos, { init } from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Changed',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: ' $700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is Known for its luxurious stays and adventurous activities'
    },


    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: ' $600',
        description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so called Lost City of Incas. This Place is popular among tourists as the sunrise from the Sun Gate is simply spectacular'

    },


    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Paris',
        location: 'France',
        grade: 'CULTURAL RELAX',
        fees: ' $900',
        description: 'France is one of the oldest nations on Earth and the most ethnically diverse country in Europe. These deep and broad influences have made France a world leader throughout history in nearly all aspects of culture, including cuisine, wine-making, politics, philosophy, music, art, film, fashion, literature, and sports.'
    },


    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Amazônia',
        location: 'Brasil',
        grade: 'CULTURAL RELAX',
        fees: ' $330',
        description: 'The Amazon basin is home to the world’s largest forest and longest river, the Amazon River, which flows for 6.992 kilometers, from the Andes to the Atlantic Ocean, carrying more water than any other river in the world.'
    },


    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Roma',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: ' $1000',
        description: 'Rome, the capital of Italy, is a city like no other. For more than two millennia, this city has been the center of European culture, politics and religion. Walking around the streets of Rome feels like taking a tour through the history of humankind. Rome is densely populated with ancient churches, Roman ruins, beautiful fountains, spacious squares (piazzas) and expensive shops. In simple words, it is a city for everyone.'
    },

]

const Main = () => {
    // Lets create a react hook to add a scroll animation....
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])



    return (
        <section className="main container section">

            <div className="secTitle">
                <h3 data-aos="fade-rights" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {/* Se guys, here we are going to use high ordfer array method(map).
                To do that we shall use a list of object in one array> I'm going to
                create on array named data and from that we shall .map() array to
                fetch each destination at once. I hope this will make sence to you!
                 */}

                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees,
                        description }) => {
                        return (
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                {/* Here it will return single id from the map array */}

                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destTitle}
                                    </h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">
                                            {location}
                                        </span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className='btn flex'>
                                       <div className="det">DETAILS</div>  <BsClipboardCheck className="icon" />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main