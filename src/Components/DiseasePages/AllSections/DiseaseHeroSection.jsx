import { MdOutlineDone } from "react-icons/md";
import roundedShape from "../../../Assests/rounded-shape.png";
import { Link } from "react-router-dom";
import AppointmentModal from "../../AppointmentModal";
import { Helmet } from "react-helmet-async";
import Form from "../../Form";

const DiseaseHeroSection = ({ content, subDisease, diseaseName }) => {
  // const appointmentModalProps = {
  //   fontWeight: "normal",
  //   fontSize: "base",
  //   text: "Book Your Appointment",
  //   minWidth: "280px",
  //   width: "100%",
  //   height: "64px",
  //   backgroundColor: "#00a0aa",
  //   color: "#fff",
  //   borderRadius: "8px",
  // };
  return (
    <div className="bg-[#fcf8ff] flex flex-col items-center">
      <Helmet>
        <title>
          {diseaseName} | {subDisease}
        </title>
      </Helmet>
      {/* Breadcrumbs menu */}
      <div className="text-sm breadcrumbs w-[94%] lg:w-[90%]">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={`/${diseaseName.toLowerCase()}`}>{diseaseName}</Link>
          </li>
          <li className="capitalize">{subDisease}</li>
        </ul>
      </div>

      <div className="w-[94%] lg:w-[90%] xl:w-4/5 grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-10 relative">
        <div className="pt-4 pb-10 z-10 col-span-3">
          {/* Main heading */}
          <h1 className="text-5xl text-gray-600 font-semibold mb-5">
            {content ? content.heroHeader : ""}
          </h1>
          {/* Sub heading */}
          <h2 className="text-4xl text-[#2ca9e1] font-semibold mb-5">
            {content ? content.subHeading : ""}
          </h2>
          {/* Description */}
          <p className="text-gray-600 mb-5">{content ? content.details : ""}</p>

          {/* Bullet points (Tick icons) */}
          <div className="mb-6">
            {content?.subLists?.length > 0
              ? content.subLists.map((list, idx) => (
                  <div key={idx} className="flex items-center gap-2 mb-2">
                    <div className="bg-[#2ca9e1] p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
                      <MdOutlineDone></MdOutlineDone>
                    </div>
                    <p className="font-semibold text-gray-800">{list}</p>
                  </div>
                ))
              : "No Content Here"}
          </div>

          <div className="flex flex-col lg:flex-row gap-3 w-full md:max-w-[350px] lg:max-w-full">
            <button className="w-full md:w-full lg:w-[220px] xl:w-[250px] h-[64px] border border-[#00a0aa] rounded-lg text-[#00a0aa]">
              Call now +98 765 432 10
            </button>
            <AppointmentModal
              className="w-full lg:w-[220px] xl:w-[240px] h-[64px]"
              text={"Book Your Appointment"}
            ></AppointmentModal>
          </div>
        </div>

        <img
          className="hidden xl:flex absolute bottom-0 left-[600px] w-[350px]"
          src={roundedShape}
          alt=""
        />

        {/* Right side image and bottom card */}
        <div className="relative col-span-2">
          <div className="mt-1 lg:-mt-4 flex md:justify-center lg:justify-end">
            <Form header={"Book Free Consultation"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseHeroSection;
