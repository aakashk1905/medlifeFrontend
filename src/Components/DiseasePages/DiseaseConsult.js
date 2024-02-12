import React from "react";
import "./styles/DiseaseConsult.css";
import dcr from "../../Assests/dcr.svg";
const DiseaseConsult = () => {
  return (
    <div className="dc-cont">
      <div className="dc-inner-cont">
        <div className="dc-left">
          <div className="dc-left-det-cont">
            <div className="dc-left-head">
              लेप्रोस्कोपिक सर्जरी ओपन सर्जरी की तुलना में अधिक सुरक्षित एवं सफल
              है।
            </div>
            <div className="dc-left-text">
              गॉलब्लैडर पथरी की सर्जरी,हर्निया सर्जरी,अपेंडिक्स सर्जरी,गर्भाशय
              की गांठ,बच्चेदानी आदि का ऑपरेशन कराएं अब दर्दरहित, उन्नत तकनीक के
              साथ
            </div>
            <div className="dc-left-sub-det">
              सुरक्षित एवं सफल सर्जरी , बिहार के सुप्रसिद्ध डाक्टरों
              द्वारासंपर्क करें Med Life Easy से और पाएं एक्सपर्ट परामर्श
            </div>
          </div>
          <div className="dc-cta">Consult Now</div>
        </div>
        <div className="dc-right">
          <img src={dcr} alt="dcr" />
        </div>
      </div>
    </div>
  );
};

export default DiseaseConsult;
