import React, { useState } from "react";
import piles from "../Assests/surgeries image/piles (2).png";
import analFistula from "../Assests/surgeries image/anal fistula.png";
import analFissure from "../Assests/surgeries image/anal fissure.png";
import gallstones from "../Assests/surgeries image/Gallstone.png";
import kidneyStones from "../Assests/surgeries image/Kidney Stones.png";
import cotaract from "../Assests/surgeries image/Cataract.png";
import lasikEye from "../Assests/surgeries image/Lasik eye surgery.png";
import hernia from "../Assests/surgeries image/hernia (2).png";
import Enlarged from "../Assests/surgeries image/enlarged prostate.png";
import LaserCircumcisio from "../Assests/surgeries image/Laser Circumcision.png";
import UterineFibroid from "../Assests/surgeries image/Uterine Fibroid.png";
import Hymenoplasty from "../Assests/surgeries image/Hymenoplasty.png";
import IVF from "../Assests/surgeries image/IVF.png";
import IUI from "../Assests/surgeries image/IUI.png";
import Gynecomastia from "../Assests/surgeries image/Gynecomastia.png";
import Liposuction from "../Assests/surgeries image/Liposuction.png";
import Lipoma from "../Assests/surgeries image/Lipoma.png";
import AclTear from "../Assests/surgeries image/Acl Tear.png";
import SpineSurgery from "../Assests/surgeries image/Spine Surgery.png";
import VaricoseVeins from "../Assests/surgeries image/Varicose Veins.png";
import DeepVeinThrombosis from "../Assests/surgeries image/Deep Vein Thrombosis.png";
import DiabeticFootUlcer from "../Assests/surgeries image/Diabetic Foot Ulcer.png";
import Varicocele from "../Assests/surgeries image/Varicocele.png";
import ZSRCircumcision from "../Assests/surgeries image/ZSR Circumcision.png";
import PilonidalSinus from "../Assests/surgeries image/Pilonidal Sinus.png";
import KneeReplacement from "../Assests/surgeries image/KneeReplacement.png";
import HipReplacement from "../Assests/surgeries image/HipReplacement.png";
import Abortion from "../Assests/surgeries image/Abortion.png";
import Hysterectomy from "../Assests/surgeries image/Hysterectomy.png";
import Vaginoplasty from "../Assests/surgeries image/Vaginoplasty.png";
import BreastAugmentation from "../Assests/surgeries image/Breast Augmentation.png";
import BreastLift from "../Assests/surgeries image/Breast Lift.png";
import BreastLump from "../Assests/surgeries image/Breast Lump.png";
import BreastReduction from "../Assests/surgeries image/Breast Reduction.png";
import HairTransplant from "../Assests/surgeries image/Hair Transplant.png";
import Rhinoplasty from "../Assests/surgeries image/Rhinoplasty.png";
import MTP from "../Assests/surgeries image/MTP.png";
import Labiaplasty from "../Assests/surgeries image/Labiaplasty.png";
import Endometriosis from "../Assests/surgeries image/Endometriosis.png";
import EctopicPregnancy from "../Assests/surgeries image/Ectopic Pregnancy.png";
import UmbilicalHernia from "../Assests/surgeries image/Umbilical Hernia.png";
import InguinalHernia from "../Assests/surgeries image/Inguinal Hernia.png";
import ShoulderDislocation from "../Assests/surgeries image/Shoulder Dislocation.png";
import CarpalTunnelSyndrome from "../Assests/surgeries image/Carpal Tunnel Syndrome.png";
import SebaceousCyst from "../Assests/surgeries image/Sebaceous Cyst.png";
import DentalImplant from "../Assests/surgeries image/Dental Implant.png";
import TeethAligners from "../Assests/surgeries image/Teeth Aligners.png";
import DentalBraces from "../Assests/surgeries image/Dental-Braces 1.png";
import Mastoidectomy from "../Assests/surgeries image/Mastoidectomy 1.png";
import Hydrocelectomy from "../Assests/surgeries image/Hydrocelectomy 1.png";
import Appendectomy from "../Assests/surgeries image/Appendectomy 1.png";
import ShoulderReplacement from "../Assests/surgeries image/Shoulder-Replacement 1.png";
import MeniscusTear from "../Assests/surgeries image/Meniscus-Tear 1.png";

import { MdKeyboardArrowDown } from "react-icons/md";

const Surgeries = () => {
  const surgeriesData = [
    { image: piles, name: "Piles" },
    { image: analFistula, name: "Anal Fistula" },
    { image: analFissure, name: "Anal Fissure" },
    { image: gallstones, name: "Gallstones" },
    { image: kidneyStones, name: "Kidney Stones" },
    { image: cotaract, name: "Cataract" },
    { image: lasikEye, name: "Lasik Eye Surgery" },
    { image: hernia, name: "Hernia" },
    { image: Enlarged, name: "Enlarged Prostate (BPH)" },

    { image: LaserCircumcisio, name: "Laser Circumcisio" },
    { image: UterineFibroid, name: "Uterine Fibroid" },
    { image: Hymenoplasty, name: "Hymenoplasty" },
    { image: IVF, name: "IVF" },
    { image: IUI, name: "IUI" },
    { image: Gynecomastia, name: "Gynecomastia" },
    { image: Liposuction, name: "Liposuction" },
    { image: Lipoma, name: "Lipoma" },
    { image: AclTear, name: "AclTear" },

    { image: SpineSurgery, name: "Spine Surgery" },
    { image: VaricoseVeins, name: "VaricoseVeins" },
    { image: DeepVeinThrombosis, name: "DeepVein Thrombosis" },
    { image: DiabeticFootUlcer, name: "Diabetic Foot Ulcer" },
    { image: Varicocele, name: "Varicocele" },
    { image: ZSRCircumcision, name: "ZSR Circumcision" },
    { image: PilonidalSinus, name: "Pilonidal Sinus" },
    { image: KneeReplacement, name: "Knee Replacement" },
    { image: HipReplacement, name: "Hip Replacement" },

    { image: Abortion, name: "Abortion" },
    { image: Hysterectomy, name: "Hysterectomy" },
    { image: Vaginoplasty, name: "Vaginoplasty" },
    { image: BreastAugmentation, name: "Breast Augmentation" },
    { image: BreastLift, name: "Breast Lift" },
    { image: BreastLump, name: "Breast Lump" },
    { image: BreastReduction, name: "Breast Reduction" },
    { image: HairTransplant, name: "Hair Transplant" },
    { image: Rhinoplasty, name: "Rhinoplasty" },

    { image: MTP, name: "MTP" },
    { image: Labiaplasty, name: "Labiaplasty" },
    { image: Endometriosis, name: "Endometriosis" },
    { image: EctopicPregnancy, name: "Ectopic Pregnancy" },
    { image: UmbilicalHernia, name: "Umbilical Hernia" },
    { image: InguinalHernia, name: "Inguinal Hernia" },
    { image: ShoulderDislocation, name: "Shoulder Dislocation" },
    { image: CarpalTunnelSyndrome, name: "Carpal Tunnel Syndrome" },
    { image: SebaceousCyst, name: "Sebaceous Cyst" },

    { image: DentalImplant, name: "Dental Implant" },
    { image: TeethAligners, name: "Teeth Aligners" },
    { image: DentalBraces, name: "Dental Braces" },
    { image: Mastoidectomy, name: "Mastoidectomy" },
    { image: Hydrocelectomy, name: "Hydrocelectomy" },
    { image: Appendectomy, name: "Appendectomy" },
    { image: ShoulderReplacement, name: "Shoulder Replacement" },
    { image: MeniscusTear, name: "Meniscus Tear" },
  ];

  const [showAllCards, setShowAllCards] = useState(false);

  const handleClick = () => {
    setShowAllCards(!showAllCards);
  };

  const displayedSurgeries = showAllCards
    ? surgeriesData
    : surgeriesData.slice(0, 8);

  return (
    <div className="py-10 flex justify-center">
      <div className="bg-white shadow-md w-[95%] md:w-[90%] rounded-xl p-5 md:p-10 border-t border-gray-100 flex flex-col gap-[50px] items-center">
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-800  text-center ">
          Surgeries We Perform
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8  w-full max-w-[90%] gap-9">
          {displayedSurgeries.map((surgery, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                className="mb-0.5 border border-[#E1E3E4] rounded-lg bg-[#FFF] w-20 p-2"
                src={surgery.image}
                alt={surgery.name}
              />
              <p className="text-gray-800 text-center">{surgery.name}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className="flex items-center text-lg px-3 py-2 rounded-lg border border-[#00A79D] text-[#00A79D]"
            onClick={handleClick}
          >
            {showAllCards ? "View Less" : "View More"} <MdKeyboardArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Surgeries;
