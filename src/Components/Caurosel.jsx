import { useEffect, useRef, useState } from "react";
import { BiSolidUserPin } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { IoBagAdd } from "react-icons/io5";


const Caurosel = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const array = [
        {
          name: "Rahul",
          specialization: ["Specialization1", "Specialization2", "Specialization3"],
          degree: "MBBS, MS- Hernia",
          stats: {
            bagAdd: 45,
            userPin: 2000,
            location: "Hello",
          },
          contact: "+98 765 432 10",
        },
        {
          name: "Rahul",
          specialization: ["Specialization1", "Specialization2", "Specialization3"],
          degree: "MBBS, MS- Hernia",
          stats: {
            bagAdd: 45,
            userPin: 2000,
            location: "Hello",
          },
          contact: "+98 765 432 10",
        },
        {
          name: "Rahul",
          specialization: ["Specialization1", "Specialization2", "Specialization3"],
          degree: "MBBS, MS- Hernia",
          stats: {
            bagAdd: 45,
            userPin: 2000,
            location: "Hello",
          },
          contact: "+98 765 432 10",
        },
      ];
    // The slider images array
    const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? array.length - 2 : currentSlider - 1));
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === array.length - 2 ? 0 : currentSlider + 1));
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlider]);

    const isSmallScreen = window.innerWidth <= 768;
    return (
        <div >
            <div className="flex justify-between items-center mb-10">
                <button onClick={prevSlider}>Prev</button>
                <button onClick={nextSlider}>Next</button>
            </div>

            <div className="max-w-full min-w-[350px]  mx-auto h-[400px] flex flex-row items-center overflow-hidden gap-5 lg:gap-10 px-8 md:px-16 lg:px-24">
            <div className="relative overflow-hidden">
                <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
                    {/* arrow left */}
                    <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                        <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="black"> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"><path fill="black" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g>
                        </svg>
                    </button>
                    {/* arrow right */}
                    <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                        <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="black" transform="rotate(180)"> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path fill="black" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z" ></path></g>
                        </svg>
                    </button>
                </div>
                {/* slider container */}
                <div
                    className="ease-linear duration-300 flex"
                    style={{transform: `translateX(-${currentSlider * (isSmallScreen ? 100 : 50)}%)`}}>
                    {/* sliders */}
                    {
                array.map((i,idx) => 
                    <div key={idx} className="dd-card">
                <div className="dd-top">
                  <div className="dd-top-left mr-2">
                    <img src="../Assests/404.png" alt="ddrc" />
                  </div>
                  <div className="dd-top-right">
                    <div className="dd-top-head">Rahul</div>
                    <div className="dd-top-text">
                      {" "}
                      MBBS, MS-{" "}
                      <b style={{ color: "#00A0AA", fontSize: "17px" }}>
                        Hernia
                      </b>
                    </div>
                    <div className="dd-top-sub-head"> Specialization</div>
                    <div className="dd-top-sp-cont">
                      <div className="dd-top-sp text-base">
                        Hello
                      </div>
                      <div className="dd-top-sp">Hello</div>
                      <div className="dd-top-sp">Hello</div>
                    </div>
                    <div className="dd-top-stats-cont">
                      <div className="dd-top-stats">
                      <IoBagAdd></IoBagAdd>
                        45
                      </div>
                      <div className="dd-top-stats">
                      <BiSolidUserPin></BiSolidUserPin>
                        2k
                      </div>
                      <div className="dd-top-stats">
                      <HiLocationMarker></HiLocationMarker>         Hello
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dd-btm">
                  <div className="dd-call">Call now +98 765 432 10</div>
                  <div className="dd-book">Book Appointment</div>
                </div>
              </div>
                )
            }
                </div>
            </div>
        </div>


            {/* <div className="ease-linear duration-300 flex gap-10"
                    style={{transform: `translateX(-${currentSlider * (isSmallScreen ? 100 : 50)}%)`}}>
            {
                array.map((i,idx) => 
                    <div key={idx} className="dd-card">
                <div className="dd-top">
                  <div className="dd-top-left mr-2">
                    <img src="../Assests/404.png" alt="ddrc" />
                  </div>
                  <div className="dd-top-right">
                    <div className="dd-top-head">Rahul</div>
                    <div className="dd-top-text">
                      {" "}
                      MBBS, MS-{" "}
                      <b style={{ color: "#00A0AA", fontSize: "17px" }}>
                        Hernia
                      </b>
                    </div>
                    <div className="dd-top-sub-head"> Specialization</div>
                    <div className="dd-top-sp-cont">
                      <div className="dd-top-sp text-base">
                        Hello
                      </div>
                      <div className="dd-top-sp">Hello</div>
                      <div className="dd-top-sp">Hello</div>
                    </div>
                    <div className="dd-top-stats-cont">
                      <div className="dd-top-stats">
                      <IoBagAdd></IoBagAdd>
                        45
                      </div>
                      <div className="dd-top-stats">
                      <BiSolidUserPin></BiSolidUserPin>
                        2k
                      </div>
                      <div className="dd-top-stats">
                      <HiLocationMarker></HiLocationMarker>         Hello
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dd-btm">
                  <div className="dd-call">Call now +98 765 432 10</div>
                  <div className="dd-book">Book Appointment</div>
                </div>
              </div>
                )
            }
              

              

              </div> */}
        </div>
    );
};
export default Caurosel