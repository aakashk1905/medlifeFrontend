import React, { useRef } from "react";
import "./styles/Patientslove.css";

import fbrev from "../Assests/fbrev.png";
import revstars from "../Assests/revstars.png";
import { Link, useLocation } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";
const Patientslove = () => {
  const cardsContainerRef = useRef(null);
  const elementRef = useRef(null);
  const { pathname } = useLocation();
  const { scrollToTop } = useScrollToTop(pathname);

  const handleScroll = (direction) => {
    const width = elementRef?.current.getBoundingClientRect().width;

    const scrollAmount = width || 500;
    const container = cardsContainerRef.current;

    if (container) {
      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        container.scrollLeft += scrollAmount;
      }
    }
  };
  return (
    <div className="pl-cont">
      <div className="hero-btm-head">Our Patient Love Us</div>
      <div className="rev-car-cont">
        <div className="arrow-div" onClick={() => handleScroll("left")}>
          &lt;
        </div>
        <div ref={cardsContainerRef} className="rev-cards-cont">
          <div className="pl-card" ref={elementRef}>
            <div className="rev-card-img-cont">
              <div className="rev-card-img">
                <img src={fbrev} alt="review" />
                <div className="rev-name-cont">
                  <div className="rev-name mb-1">Sarvesh Mishra</div>
                  <div className="star-cont">
                    <img src={revstars} alt="" />
                    <div className="five">
                      <b className="fpf">4.8</b>/5
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rev-rec-cont">
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
            <div className="pl-text">
              एक किडनी रोगी के रूप में मेड लाइफ इज़ी से मुझे जो असाधारण देखभाल
              मिली, उससे मैं अविश्वसनीय रूप से संतुष्ट हूं। उनकी विशेषज्ञ
              चिकित्सा टीम के साथ मिलकर व्यक्तिगत उपचार योजना ने एक सुचारू और
              प्रभावी पुनर्प्राप्ति प्रक्रिया सुनिश्चित की। चौकस और दयालु स्टाफ
              ने मेरी चिंताओं को दूर करने के लिए हर संभव प्रयास किया, जिससे मुझे
              वास्तव में मेरी देखभाल का एहसास हुआ। सर्वोच्च चिकित्सा सेवाएं
              प्रदान करने की मेड लाइफ ईज़ी की प्रतिबद्धता ने एक स्थायी सकारात्मक
              प्रभाव छोड़ा है। किडनी से संबंधित समस्याओं के लिए व्यापक और
              विश्वसनीय स्वास्थ्य देखभाल चाहने वाले किसी भी व्यक्ति को मैं पूरे
              दिल से उनकी सेवाओं की अनुशंसा करता हूं। उस उत्कृष्ट समर्थन के लिए
              आभारी हूं जिसने मेरी भलाई में महत्वपूर्ण योगदान दिया।
            </div>
          </div>

          <div className="pl-card">
            <div className="rev-card-img-cont">
              <div className="rev-card-img">
                <img src={fbrev} alt="review" />
                <div className="rev-name-cont">
                  <div className="rev-name mb-1">Sarvesh Mishra</div>
                  <div className="star-cont">
                    <img src={revstars} alt="" />
                    <div className="five">
                      <b className="fpf">4.8</b>/5
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rev-rec-cont">
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
            <div className="pl-text">
              एक किडनी रोगी के रूप में मेड लाइफ इज़ी से मुझे जो असाधारण देखभाल
              मिली, उससे मैं अविश्वसनीय रूप से संतुष्ट हूं। उनकी विशेषज्ञ
              चिकित्सा टीम के साथ मिलकर व्यक्तिगत उपचार योजना ने एक सुचारू और
              प्रभावी पुनर्प्राप्ति प्रक्रिया सुनिश्चित की। चौकस और दयालु स्टाफ
              ने मेरी चिंताओं को दूर करने के लिए हर संभव प्रयास किया, जिससे मुझे
              वास्तव में मेरी देखभाल का एहसास हुआ। सर्वोच्च चिकित्सा सेवाएं
              प्रदान करने की मेड लाइफ ईज़ी की प्रतिबद्धता ने एक स्थायी सकारात्मक
              प्रभाव छोड़ा है। किडनी से संबंधित समस्याओं के लिए व्यापक और
              विश्वसनीय स्वास्थ्य देखभाल चाहने वाले किसी भी व्यक्ति को मैं पूरे
              दिल से उनकी सेवाओं की अनुशंसा करता हूं। उस उत्कृष्ट समर्थन के लिए
              आभारी हूं जिसने मेरी भलाई में महत्वपूर्ण योगदान दिया।
            </div>
          </div>

          <div className="pl-card">
            <div className="rev-card-img-cont">
              <div className="rev-card-img">
                <img src={fbrev} alt="review" />
                <div className="rev-name-cont">
                  <div className="rev-name mb-1">Sarvesh Mishra</div>
                  <div className="star-cont">
                    <img src={revstars} alt="" />
                    <div className="five">
                      <b className="fpf">4.8</b>/5
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rev-rec-cont">
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
            <div className="pl-text">
              एक किडनी रोगी के रूप में मेड लाइफ इज़ी से मुझे जो असाधारण देखभाल
              मिली, उससे मैं अविश्वसनीय रूप से संतुष्ट हूं। उनकी विशेषज्ञ
              चिकित्सा टीम के साथ मिलकर व्यक्तिगत उपचार योजना ने एक सुचारू और
              प्रभावी पुनर्प्राप्ति प्रक्रिया सुनिश्चित की। चौकस और दयालु स्टाफ
              ने मेरी चिंताओं को दूर करने के लिए हर संभव प्रयास किया, जिससे मुझे
              वास्तव में मेरी देखभाल का एहसास हुआ। सर्वोच्च चिकित्सा सेवाएं
              प्रदान करने की मेड लाइफ ईज़ी की प्रतिबद्धता ने एक स्थायी सकारात्मक
              प्रभाव छोड़ा है। किडनी से संबंधित समस्याओं के लिए व्यापक और
              विश्वसनीय स्वास्थ्य देखभाल चाहने वाले किसी भी व्यक्ति को मैं पूरे
              दिल से उनकी सेवाओं की अनुशंसा करता हूं। उस उत्कृष्ट समर्थन के लिए
              आभारी हूं जिसने मेरी भलाई में महत्वपूर्ण योगदान दिया।
            </div>
          </div>

          <div className="pl-card">
            <div className="rev-card-img-cont">
              <div className="rev-card-img">
                <img src={fbrev} alt="review" />
                <div className="rev-name-cont">
                  <div className="rev-name mb-1">Sarvesh Mishra</div>
                  <div className="star-cont">
                    <img src={revstars} alt="" />
                    <div className="five">
                      <b className="fpf">4.8</b>/5
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rev-rec-cont">
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
            <div className="pl-text">
              एक किडनी रोगी के रूप में मेड लाइफ इज़ी से मुझे जो असाधारण देखभाल
              मिली, उससे मैं अविश्वसनीय रूप से संतुष्ट हूं। उनकी विशेषज्ञ
              चिकित्सा टीम के साथ मिलकर व्यक्तिगत उपचार योजना ने एक सुचारू और
              प्रभावी पुनर्प्राप्ति प्रक्रिया सुनिश्चित की। चौकस और दयालु स्टाफ
              ने मेरी चिंताओं को दूर करने के लिए हर संभव प्रयास किया, जिससे मुझे
              वास्तव में मेरी देखभाल का एहसास हुआ। सर्वोच्च चिकित्सा सेवाएं
              प्रदान करने की मेड लाइफ ईज़ी की प्रतिबद्धता ने एक स्थायी सकारात्मक
              प्रभाव छोड़ा है। किडनी से संबंधित समस्याओं के लिए व्यापक और
              विश्वसनीय स्वास्थ्य देखभाल चाहने वाले किसी भी व्यक्ति को मैं पूरे
              दिल से उनकी सेवाओं की अनुशंसा करता हूं। उस उत्कृष्ट समर्थन के लिए
              आभारी हूं जिसने मेरी भलाई में महत्वपूर्ण योगदान दिया।
            </div>
          </div>

          <div className="pl-card">
            <div className="rev-card-img-cont">
              <div className="rev-card-img">
                <img src={fbrev} alt="review" />
                <div className="rev-name-cont">
                  <div className="rev-name mb-1">Sarvesh Mishra</div>
                  <div className="star-cont">
                    <img src={revstars} alt="" />
                    <div className="five">
                      <b className="fpf">4.8</b>/5
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rev-rec-cont">
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
            <div className="pl-text">
              एक किडनी रोगी के रूप में मेड लाइफ इज़ी से मुझे जो असाधारण देखभाल
              मिली, उससे मैं अविश्वसनीय रूप से संतुष्ट हूं। उनकी विशेषज्ञ
              चिकित्सा टीम के साथ मिलकर व्यक्तिगत उपचार योजना ने एक सुचारू और
              प्रभावी पुनर्प्राप्ति प्रक्रिया सुनिश्चित की। चौकस और दयालु स्टाफ
              ने मेरी चिंताओं को दूर करने के लिए हर संभव प्रयास किया, जिससे मुझे
              वास्तव में मेरी देखभाल का एहसास हुआ। सर्वोच्च चिकित्सा सेवाएं
              प्रदान करने की मेड लाइफ ईज़ी की प्रतिबद्धता ने एक स्थायी सकारात्मक
              प्रभाव छोड़ा है। किडनी से संबंधित समस्याओं के लिए व्यापक और
              विश्वसनीय स्वास्थ्य देखभाल चाहने वाले किसी भी व्यक्ति को मैं पूरे
              दिल से उनकी सेवाओं की अनुशंसा करता हूं। उस उत्कृष्ट समर्थन के लिए
              आभारी हूं जिसने मेरी भलाई में महत्वपूर्ण योगदान दिया।
            </div>
          </div>

          <div className="pl-card">
            <div className="rev-card-img-cont">
              <div className="rev-card-img">
                <img src={fbrev} alt="review" />
                <div className="rev-name-cont">
                  <div className="rev-name mb-1">Sarvesh Mishra</div>
                  <div className="star-cont">
                    <img src={revstars} alt="" />
                    <div className="five">
                      <b className="fpf">4.8</b>/5
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rev-rec-cont">
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
            <div className="pl-text">
              एक किडनी रोगी के रूप में मेड लाइफ इज़ी से मुझे जो असाधारण देखभाल
              मिली, उससे मैं अविश्वसनीय रूप से संतुष्ट हूं। उनकी विशेषज्ञ
              चिकित्सा टीम के साथ मिलकर व्यक्तिगत उपचार योजना ने एक सुचारू और
              प्रभावी पुनर्प्राप्ति प्रक्रिया सुनिश्चित की। चौकस और दयालु स्टाफ
              ने मेरी चिंताओं को दूर करने के लिए हर संभव प्रयास किया, जिससे मुझे
              वास्तव में मेरी देखभाल का एहसास हुआ। सर्वोच्च चिकित्सा सेवाएं
              प्रदान करने की मेड लाइफ ईज़ी की प्रतिबद्धता ने एक स्थायी सकारात्मक
              प्रभाव छोड़ा है। किडनी से संबंधित समस्याओं के लिए व्यापक और
              विश्वसनीय स्वास्थ्य देखभाल चाहने वाले किसी भी व्यक्ति को मैं पूरे
              दिल से उनकी सेवाओं की अनुशंसा करता हूं। उस उत्कृष्ट समर्थन के लिए
              आभारी हूं जिसने मेरी भलाई में महत्वपूर्ण योगदान दिया।
            </div>
          </div>
        </div>

        <div className="arrow-div" onClick={() => handleScroll("right")}>
          &gt;
        </div>
      </div>
      <div className="pl-cta-cont">
        <Link onClick={scrollToTop} to={"/review"} className="pl-va">
          View All Reviews
        </Link>
        <Link onClick={scrollToTop} to={"/review"} className="pl-wr">
          Write A Review
        </Link>
      </div>
    </div>
  );
};

export default Patientslove;
