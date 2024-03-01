import { MdOutlineDone } from "react-icons/md";
import roundedShape from "../../../Assests/rounded-shape.png";
import { Link } from "react-router-dom";
import AppointmentModal from "../../AppointmentModal";
import { Helmet } from "react-helmet-async";
import Form from "../../Form";

const DiseaseHeroSection = ({content,subDisease, diseaseName}) => {
  const appointmentModalProps = {
    fontWeight: "normal",
    fontSize: "base",
    text: "Book Your Appointment",
    minWidth: "280px",
    width: "100%",
    height: "64px",
    backgroundColor: "#00a0aa",
    color: "#fff",
    borderRadius: "8px",
  };
  return (
    <div className="bg-[#fcf8ff] px-5 md:px-9 py-2">
      <Helmet>
        <title>{diseaseName} | {subDisease}</title>
      </Helmet>
      {/* Breadcrumbs menu */}
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
          <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link>{diseaseName}</Link>
          </li>
          <li className="capitalize">{subDisease}</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-10 relative">
      <div className="pt-4 pb-10 z-10 col-span-3">
        {/* Main heading */}
        <h1 className="text-5xl text-gray-600 font-semibold mb-5">
          {content ? content.heroHeader : ""}
          {/* Advanced Laparoscopic <br /> Hernia Surgery */}
        </h1>
        {/* Sub heading */}
        <h2 className="text-4xl text-[#2ca9e1] font-semibold mb-5">
        {content ? content.subHeading : ""}
          {/* सुरक्षित एवं सफल */}
        </h2>
        {/* Description */}
        <p className="text-gray-600 mb-5">
        {content ? content.details : ""}
          {/* लेप्रोस्कोपिक हर्निया सर्जरी, एक न्यूनतम इनवेसिव दृष्टिकोण, सर्जरी के
          क्षेत्र में एक गेम-चेंजर बन गई है, जो रोगियों को कई लाभ प्रदान करती
          है। Medlife Easy में, हम इस अत्याधुनिक तकनीक को बिहार में हर्निया के
          लिए सुलभ बनाने के लिए पूरी तरह समर्पित हैं। */}
        </p>

        {/* Bullet points (Tick icons) */}
        <div className="mb-6">
          {
            content?.subLists?.length > 0 ?
            content.subLists.map((list, idx) => 
              <div key={idx} className="flex items-center gap-2 mb-2">
            <div className="bg-[#2ca9e1] p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold text-gray-800">{list}</p>
          </div>
              )
              : "No Content Here"
          }
        </div>

        <div className="flex flex-col md:flex-row items-center gap-3 w-full">
          <button className="w-full md:w-[350px] h-[64px] border border-[#00a0aa]  rounded-lg text-[#00a0aa]">
            Call now +98 765 432 10
          </button>
          {/* <button className="w-full md:w-[350px] h-[64px] bg-[#00a0aa] rounded-lg text-white border border-[#00a0aa]">
            Book Your Appoinment
          </button> */}
          <AppointmentModal {...appointmentModalProps}></AppointmentModal>
        </div>
      </div>

      <img
        className="hidden xl:flex absolute bottom-0 left-[600px] w-[350px]"
        src={roundedShape}
        alt=""
      /> 

      {/* Right side image and bottom card */}
      <div className="relative col-span-2">
        {/* hero image */}
        {/* <img className="w-full h-full" src="https://65d5d8fb8875068c49d425be--genuine-kulfi-2c5ab7.netlify.app/static/media/stomach-pain.dc3c833198638390b31f.png" alt="diseasePicture" /> */}

        <div className="mt-1 lg:-mt-6 flex md:justify-center lg:justify-end">
          <Form header={"Book Free Consultation"} />
        </div>

        {/* Bottom card */}
        {/* <div className="absolute bottom-0 w-full">
          <div className="bg-white py-3 px-6 flex gap-0 lg:gap-20 2xl:gap-40 items-center rounded-2xl">
            <div className="border-r-2 pr-12">
              <h1 className="text-2xl md:text-3xl font-bold text-[#5854a8]">
                1000+
              </h1>
              <p className="text-sm md:text-base">DOCTORS</p>
            </div>
            <div className="border-r-2 pr-12">
              <h1 className="text-2xl md:text-3xl font-bold text-[#5854a8]">
                2000+
              </h1>
              <p className="text-sm md:text-base">HOSPITALS</p>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#5854a8]">
                500+
              </h1>
              <p className="text-sm md:text-base">TREATMENTS</p>
            </div>
          </div>
        </div> */}


      </div>
    </div>
    </div>
  );
};

export default DiseaseHeroSection;