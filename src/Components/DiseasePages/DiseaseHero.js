import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Form from "../Form";


const DiseaseHero = ({content, disease}) => {
  return (
    <div className="bg-[#fcf8ff] px-5 md:px-9">
      <Helmet>
        <title>Medlife Easy | {disease}</title>
      </Helmet>
      {/* Breadcrumbs menu */}
      <div className="text-sm breadcrumbs mt-3">
        <ul>
          <li>
          <Link to={"/"}>Home</Link>
          </li>
          <li className="capitalize">{disease}</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-10">
      <div className="pt-4 pb-10 z-10 col-span-2">
        {/* Main heading */}
        <h1 className="text-5xl text-gray-600 font-semibold mb-5">
        {content.heroHeader ? content.heroHeader : ""}
        </h1>
        {/* Sub heading */}
        <h2 className="text-4xl text-[#2ca9e1] font-semibold mb-8">
        {content.subHeading ? content.subHeading : ""}
        </h2>
        {/* Description */}
        <p className="text-gray-500 mb-8 max-w-xl">
        {content.details ? content.details : ""}
        </p>

          <button className="w-full md:w-[350px] h-[64px] border border-[#00a0aa]  rounded-lg text-[#00a0aa]">
            Call now +98 765 432 10
          </button>
      </div>

      {/* Right side image and bottom card */}
      <div className="relative">

        <div className="mt-1 lg:-mt-6">
          <Form header={"Book Free Consultation"} />
        </div>

        


      </div>
    </div>
    </div>
  );
};

export default DiseaseHero;