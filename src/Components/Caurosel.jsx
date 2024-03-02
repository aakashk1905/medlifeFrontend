
import { Swiper, SwiperSlide } from 'swiper/react';
import fbrev from "../Assests/fbrev.png";
import revstars from "../Assests/revstars.png";
import 'swiper/swiper-bundle.css';


import Swipperbtn from './Swipperbtn';


const Caurosel = () => {
    return (
      <div className='flex justify-center relative mx-2  lg:mx-9'>
          <Swiper slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2
            },
            375: {
              slidesPerView: 1
            },
            425: {
              slidesPerView: 1
            },
            1024: {
              slidesPerView: 2
            },
            1366 : {
              slidesPerView: 3
            }
          }}
          pagination = {{
              clickable: true
          }}
          
          modules={[]} className="carousel">
            
        <SwiperSlide>
        <div className='px-[35px]'>
        <div className="bg-white w-full  p-3 rounded-xl shadow-md cursor-pointer transform transition-transform duration-300 hover:-translate-y-2">
            <div className="flex gap-2 mb-3">
              <img src={fbrev} alt=""/>
              <div>
              <p className="text-md text-gray-800">Sarvesh Mishra</p>
              <div className="flex items-center gap-2">
              <img src={revstars} alt="" />
              <p className="text-md text-gray-600">4.8/5</p>
              </div>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <g clip-path="url(#clip0_253_1800)">
                  <path
                    d="M11.1447 1.75006L6.43796 6.45679C6.12361 6.77113 5.94519 7.20442 5.94519 7.65471V16.1421C5.94519 17.0767 6.70982 17.8413 7.64437 17.8413H15.2907C15.9704 17.8413 16.5821 17.4335 16.8539 16.8133L19.6236 10.3479C20.3372 8.66572 19.1053 6.79662 17.2787 6.79662H12.4785L13.2856 2.9055C13.3706 2.48071 13.2432 2.04742 12.9373 1.74156C12.4361 1.2488 11.6374 1.2488 11.1447 1.75006ZM2.54684 17.8413C3.48138 17.8413 4.24601 17.0767 4.24601 16.1421V9.34539C4.24601 8.41084 3.48138 7.64621 2.54684 7.64621C1.61229 7.64621 0.847656 8.41084 0.847656 9.34539V16.1421C0.847656 17.0767 1.61229 17.8413 2.54684 17.8413Z"
                    fill="#00A298"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_253_1800">
                    <rect width="20.3901" height="20.3901" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Highly Recommends</span>
            </div>

            <p className="text-gray-800">
            एक किडनी रोगी के रूप में मेड लाइफ इज़ी से मुझे जो असाधारण देखभाल मिली, उससे मैं अविश्वसनीय रूप से संतुष्ट हूं। उनकी विशेषज्ञ चिकित्सा टीम के साथ मिलकर व्यक्तिगत उपचार योजना ने एक सुचारू और प्रभावी पुनर्प्राप्ति प्रक्रिया सुनिश्चित की। चौकस और दयालु स्टाफ ने मेरी चिंताओं को दूर करने के लिए हर संभव प्रयास किया, जिससे मुझे वास्तव में मेरी देखभाल का एहसास हुआ। सर्वोच्च चिकित्सा सेवाएं प्रदान करने की मेड लाइफ ईज़ी की प्रतिबद्धता ने एक स्थायी सकारात्मक प्रभाव छोड़ा है। किडनी से संबंधित समस्याओं के लिए व्यापक और विश्वसनीय स्वास्थ्य देखभाल चाहने वाले किसी भी व्यक्ति को मैं पूरे दिल से उनकी सेवाओं की अनुशंसा करता हूं। उस उत्कृष्ट समर्थन के लिए आभारी हूं जिसने मेरी भलाई में महत्वपूर्ण योगदान दिया।
            </p>
          </div>
        </div>
        </SwiperSlide>
            
        <SwiperSlide>
        <div className='px-[35px]'>
        <div className="bg-white w-full  p-3 rounded-xl shadow-md cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:border-teal-500">
            <div className="flex gap-2 mb-3">
              <img src={fbrev} alt=""/>
              <div>
              <p className="text-md text-gray-800">Sarvesh Mishra</p>
              <div className="flex items-center gap-2">
              <img src={revstars} alt="" />
              <p className="text-md text-gray-600">4.8/5</p>
              </div>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <g clip-path="url(#clip0_253_1800)">
                  <path
                    d="M11.1447 1.75006L6.43796 6.45679C6.12361 6.77113 5.94519 7.20442 5.94519 7.65471V16.1421C5.94519 17.0767 6.70982 17.8413 7.64437 17.8413H15.2907C15.9704 17.8413 16.5821 17.4335 16.8539 16.8133L19.6236 10.3479C20.3372 8.66572 19.1053 6.79662 17.2787 6.79662H12.4785L13.2856 2.9055C13.3706 2.48071 13.2432 2.04742 12.9373 1.74156C12.4361 1.2488 11.6374 1.2488 11.1447 1.75006ZM2.54684 17.8413C3.48138 17.8413 4.24601 17.0767 4.24601 16.1421V9.34539C4.24601 8.41084 3.48138 7.64621 2.54684 7.64621C1.61229 7.64621 0.847656 8.41084 0.847656 9.34539V16.1421C0.847656 17.0767 1.61229 17.8413 2.54684 17.8413Z"
                    fill="#00A298"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_253_1800">
                    <rect width="20.3901" height="20.3901" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Highly Recommends</span>
            </div>

            <p className="text-gray-800">
            एक किडनी रोगी के रूप में मेड लाइफ इज़ी से मुझे जो असाधारण देखभाल मिली, उससे मैं अविश्वसनीय रूप से संतुष्ट हूं। उनकी विशेषज्ञ चिकित्सा टीम के साथ मिलकर व्यक्तिगत उपचार योजना ने एक सुचारू और प्रभावी पुनर्प्राप्ति प्रक्रिया सुनिश्चित की। चौकस और दयालु स्टाफ ने मेरी चिंताओं को दूर करने के लिए हर संभव प्रयास किया, जिससे मुझे वास्तव में मेरी देखभाल का एहसास हुआ। सर्वोच्च चिकित्सा सेवाएं प्रदान करने की मेड लाइफ ईज़ी की प्रतिबद्धता ने एक स्थायी सकारात्मक प्रभाव छोड़ा है। किडनी से संबंधित समस्याओं के लिए व्यापक और विश्वसनीय स्वास्थ्य देखभाल चाहने वाले किसी भी व्यक्ति को मैं पूरे दिल से उनकी सेवाओं की अनुशंसा करता हूं। उस उत्कृष्ट समर्थन के लिए आभारी हूं जिसने मेरी भलाई में महत्वपूर्ण योगदान दिया।
            </p>
          </div>
        </div>
        </SwiperSlide>
            
        <SwiperSlide>
        <div className='px-[35px]'>
        <div className="bg-white w-full  p-3 rounded-xl shadow-md cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:border-teal-500">
            <div className="flex gap-2 mb-3">
              <img src={fbrev} alt=""/>
              <div>
              <p className="text-md text-gray-800">Sarvesh Mishra</p>
              <div className="flex items-center gap-2">
              <img src={revstars} alt="" />
              <p className="text-md text-gray-600">4.8/5</p>
              </div>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <g clip-path="url(#clip0_253_1800)">
                  <path
                    d="M11.1447 1.75006L6.43796 6.45679C6.12361 6.77113 5.94519 7.20442 5.94519 7.65471V16.1421C5.94519 17.0767 6.70982 17.8413 7.64437 17.8413H15.2907C15.9704 17.8413 16.5821 17.4335 16.8539 16.8133L19.6236 10.3479C20.3372 8.66572 19.1053 6.79662 17.2787 6.79662H12.4785L13.2856 2.9055C13.3706 2.48071 13.2432 2.04742 12.9373 1.74156C12.4361 1.2488 11.6374 1.2488 11.1447 1.75006ZM2.54684 17.8413C3.48138 17.8413 4.24601 17.0767 4.24601 16.1421V9.34539C4.24601 8.41084 3.48138 7.64621 2.54684 7.64621C1.61229 7.64621 0.847656 8.41084 0.847656 9.34539V16.1421C0.847656 17.0767 1.61229 17.8413 2.54684 17.8413Z"
                    fill="#00A298"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_253_1800">
                    <rect width="20.3901" height="20.3901" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Highly Recommends</span>
            </div>

            <p className="text-gray-800">
            एक किडनी रोगी के रूप में मेड लाइफ इज़ी से मुझे जो असाधारण देखभाल मिली, उससे मैं अविश्वसनीय रूप से संतुष्ट हूं। उनकी विशेषज्ञ चिकित्सा टीम के साथ मिलकर व्यक्तिगत उपचार योजना ने एक सुचारू और प्रभावी पुनर्प्राप्ति प्रक्रिया सुनिश्चित की। चौकस और दयालु स्टाफ ने मेरी चिंताओं को दूर करने के लिए हर संभव प्रयास किया, जिससे मुझे वास्तव में मेरी देखभाल का एहसास हुआ। सर्वोच्च चिकित्सा सेवाएं प्रदान करने की मेड लाइफ ईज़ी की प्रतिबद्धता ने एक स्थायी सकारात्मक प्रभाव छोड़ा है। किडनी से संबंधित समस्याओं के लिए व्यापक और विश्वसनीय स्वास्थ्य देखभाल चाहने वाले किसी भी व्यक्ति को मैं पूरे दिल से उनकी सेवाओं की अनुशंसा करता हूं। उस उत्कृष्ट समर्थन के लिए आभारी हूं जिसने मेरी भलाई में महत्वपूर्ण योगदान दिया।
            </p>
          </div>
        </div>
        </SwiperSlide>
            
        <SwiperSlide>
        <div className='px-[35px]'>
        <div className="bg-white w-full  p-3 rounded-xl shadow-md cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:border-teal-500">
            <div className="flex gap-2 mb-3">
              <img src={fbrev} alt=""/>
              <div>
              <p className="text-md text-gray-800">Sarvesh Mishra</p>
              <div className="flex items-center gap-2">
              <img src={revstars} alt="" />
              <p className="text-md text-gray-600">4.8/5</p>
              </div>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <g clip-path="url(#clip0_253_1800)">
                  <path
                    d="M11.1447 1.75006L6.43796 6.45679C6.12361 6.77113 5.94519 7.20442 5.94519 7.65471V16.1421C5.94519 17.0767 6.70982 17.8413 7.64437 17.8413H15.2907C15.9704 17.8413 16.5821 17.4335 16.8539 16.8133L19.6236 10.3479C20.3372 8.66572 19.1053 6.79662 17.2787 6.79662H12.4785L13.2856 2.9055C13.3706 2.48071 13.2432 2.04742 12.9373 1.74156C12.4361 1.2488 11.6374 1.2488 11.1447 1.75006ZM2.54684 17.8413C3.48138 17.8413 4.24601 17.0767 4.24601 16.1421V9.34539C4.24601 8.41084 3.48138 7.64621 2.54684 7.64621C1.61229 7.64621 0.847656 8.41084 0.847656 9.34539V16.1421C0.847656 17.0767 1.61229 17.8413 2.54684 17.8413Z"
                    fill="#00A298"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_253_1800">
                    <rect width="20.3901" height="20.3901" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Highly Recommends</span>
            </div>

            <p className="text-gray-800">
            एक किडनी रोगी के रूप में मेड लाइफ इज़ी से मुझे जो असाधारण देखभाल मिली, उससे मैं अविश्वसनीय रूप से संतुष्ट हूं। उनकी विशेषज्ञ चिकित्सा टीम के साथ मिलकर व्यक्तिगत उपचार योजना ने एक सुचारू और प्रभावी पुनर्प्राप्ति प्रक्रिया सुनिश्चित की। चौकस और दयालु स्टाफ ने मेरी चिंताओं को दूर करने के लिए हर संभव प्रयास किया, जिससे मुझे वास्तव में मेरी देखभाल का एहसास हुआ। सर्वोच्च चिकित्सा सेवाएं प्रदान करने की मेड लाइफ ईज़ी की प्रतिबद्धता ने एक स्थायी सकारात्मक प्रभाव छोड़ा है। किडनी से संबंधित समस्याओं के लिए व्यापक और विश्वसनीय स्वास्थ्य देखभाल चाहने वाले किसी भी व्यक्ति को मैं पूरे दिल से उनकी सेवाओं की अनुशंसा करता हूं। उस उत्कृष्ट समर्थन के लिए आभारी हूं जिसने मेरी भलाई में महत्वपूर्ण योगदान दिया।
            </p>
          </div>
        </div>
        </SwiperSlide>
            
        <SwiperSlide>
        <div className='px-[35px]'>
        <div className="bg-white w-full  p-3 rounded-xl shadow-md cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:border-teal-500">
            <div className="flex gap-2 mb-3">
              <img src={fbrev} alt=""/>
              <div>
              <p className="text-md text-gray-800">Sarvesh Mishra</p>
              <div className="flex items-center gap-2">
              <img src={revstars} alt="" />
              <p className="text-md text-gray-600">4.8/5</p>
              </div>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <g clip-path="url(#clip0_253_1800)">
                  <path
                    d="M11.1447 1.75006L6.43796 6.45679C6.12361 6.77113 5.94519 7.20442 5.94519 7.65471V16.1421C5.94519 17.0767 6.70982 17.8413 7.64437 17.8413H15.2907C15.9704 17.8413 16.5821 17.4335 16.8539 16.8133L19.6236 10.3479C20.3372 8.66572 19.1053 6.79662 17.2787 6.79662H12.4785L13.2856 2.9055C13.3706 2.48071 13.2432 2.04742 12.9373 1.74156C12.4361 1.2488 11.6374 1.2488 11.1447 1.75006ZM2.54684 17.8413C3.48138 17.8413 4.24601 17.0767 4.24601 16.1421V9.34539C4.24601 8.41084 3.48138 7.64621 2.54684 7.64621C1.61229 7.64621 0.847656 8.41084 0.847656 9.34539V16.1421C0.847656 17.0767 1.61229 17.8413 2.54684 17.8413Z"
                    fill="#00A298"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_253_1800">
                    <rect width="20.3901" height="20.3901" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Highly Recommends</span>
            </div>

            <p className="text-gray-800">
            एक किडनी रोगी के रूप में मेड लाइफ इज़ी से मुझे जो असाधारण देखभाल मिली, उससे मैं अविश्वसनीय रूप से संतुष्ट हूं। उनकी विशेषज्ञ चिकित्सा टीम के साथ मिलकर व्यक्तिगत उपचार योजना ने एक सुचारू और प्रभावी पुनर्प्राप्ति प्रक्रिया सुनिश्चित की। चौकस और दयालु स्टाफ ने मेरी चिंताओं को दूर करने के लिए हर संभव प्रयास किया, जिससे मुझे वास्तव में मेरी देखभाल का एहसास हुआ। सर्वोच्च चिकित्सा सेवाएं प्रदान करने की मेड लाइफ ईज़ी की प्रतिबद्धता ने एक स्थायी सकारात्मक प्रभाव छोड़ा है। किडनी से संबंधित समस्याओं के लिए व्यापक और विश्वसनीय स्वास्थ्य देखभाल चाहने वाले किसी भी व्यक्ति को मैं पूरे दिल से उनकी सेवाओं की अनुशंसा करता हूं। उस उत्कृष्ट समर्थन के लिए आभारी हूं जिसने मेरी भलाई में महत्वपूर्ण योगदान दिया।
            </p>
          </div>
        </div>
        </SwiperSlide>
            
        <SwiperSlide>
        <div className='px-10'>
        <div className="bg-white w-full  p-3 rounded-xl shadow-md cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:border-teal-500">
            <div className="flex gap-2 mb-3">
              <img src={fbrev} alt=""/>
              <div>
              <p className="text-md text-gray-800">Sarvesh Mishra</p>
              <div className="flex items-center gap-2">
              <img src={revstars} alt="" />
              <p className="text-md text-gray-600">4.8/5</p>
              </div>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <g clip-path="url(#clip0_253_1800)">
                  <path
                    d="M11.1447 1.75006L6.43796 6.45679C6.12361 6.77113 5.94519 7.20442 5.94519 7.65471V16.1421C5.94519 17.0767 6.70982 17.8413 7.64437 17.8413H15.2907C15.9704 17.8413 16.5821 17.4335 16.8539 16.8133L19.6236 10.3479C20.3372 8.66572 19.1053 6.79662 17.2787 6.79662H12.4785L13.2856 2.9055C13.3706 2.48071 13.2432 2.04742 12.9373 1.74156C12.4361 1.2488 11.6374 1.2488 11.1447 1.75006ZM2.54684 17.8413C3.48138 17.8413 4.24601 17.0767 4.24601 16.1421V9.34539C4.24601 8.41084 3.48138 7.64621 2.54684 7.64621C1.61229 7.64621 0.847656 8.41084 0.847656 9.34539V16.1421C0.847656 17.0767 1.61229 17.8413 2.54684 17.8413Z"
                    fill="#00A298"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_253_1800">
                    <rect width="20.3901" height="20.3901" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Highly Recommends</span>
            </div>

            <p className="text-gray-800">
            एक किडनी रोगी के रूप में मेड लाइफ इज़ी से मुझे जो असाधारण देखभाल मिली, उससे मैं अविश्वसनीय रूप से संतुष्ट हूं। उनकी विशेषज्ञ चिकित्सा टीम के साथ मिलकर व्यक्तिगत उपचार योजना ने एक सुचारू और प्रभावी पुनर्प्राप्ति प्रक्रिया सुनिश्चित की। चौकस और दयालु स्टाफ ने मेरी चिंताओं को दूर करने के लिए हर संभव प्रयास किया, जिससे मुझे वास्तव में मेरी देखभाल का एहसास हुआ। सर्वोच्च चिकित्सा सेवाएं प्रदान करने की मेड लाइफ ईज़ी की प्रतिबद्धता ने एक स्थायी सकारात्मक प्रभाव छोड़ा है। किडनी से संबंधित समस्याओं के लिए व्यापक और विश्वसनीय स्वास्थ्य देखभाल चाहने वाले किसी भी व्यक्ति को मैं पूरे दिल से उनकी सेवाओं की अनुशंसा करता हूं। उस उत्कृष्ट समर्थन के लिए आभारी हूं जिसने मेरी भलाई में महत्वपूर्ण योगदान दिया।
            </p>
          </div>
        </div>
        </SwiperSlide>


        <div className='absolute top-56 w-full z-10'>
        <Swipperbtn></Swipperbtn>
        </div>
      </Swiper>
      </div>
    );
};
export default Caurosel