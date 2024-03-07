import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Form from "../Form";

const DiseaseHero = ({ content, disease }) => {
  return (
    <div className="bg-[#fcf8ff] w-full flex flex-col gap-[10px] items-center pb-5">
      <Helmet>
        <title>Medlife Easy | {disease}</title>
      </Helmet>
      {/* Breadcrumbs menu */}
      <div className="text-sm breadcrumbs w-[95%] lg:w-[90%]">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li className="capitalize">{disease}</li>
        </ul>
      </div>
      <div className="flex w-[95%] lg:w-4/5 flex-col gap-10 lg:flex-row items-center justify-center">
        <div className="flex flex-col gap-4 lg:gap-7 w-[95%] lg:w-[55%] xl:w-[60%]">
          {/* Main heading */}
          <h1 className="text-3xl text-gray-600 font-semibold lg:text-[clamp(28px,3vw,64px)] font-lato">
            {content?.heroHeader ? content.heroHeader : ""}
          </h1>
          {/* Sub heading */}
          <h2 className="text-2xl text-[#2ca9e1] font-semibold lg:text-[clamp(28px,2.8vw,48px)] font-lato">
            {content?.subHeading ? content.subHeading : ""}
          </h2>
          {/* Description */}
          <p className="text-gray-500  w-[75%] lg:text-[clamp(18px,1.5vw,28px)] font-lato">
            {content?.details ? content.details : ""}
          </p>
          <button className="w-full sm:w-[70%] md:w-[60%] h-[64px] border border-[#00a0aa] rounded-lg text-[#00a0aa]">
            Call now +98 765 432 10
          </button>
        </div>

        {/* Right side form */}
        <div className="w-[95%] lg:w-[45%] xl:w-[40%] flex justify-center lg:-mt-6 box-border ">
          <div className=" w-full flex justify-center max-w-[550px] ">
            <Form header={"Book Free Consultation"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseHero;
