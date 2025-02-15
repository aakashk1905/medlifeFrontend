import lab from "../../../Assests/lab.png";
import AppointmentModal from "../../AppointmentModal";

const LabTest = () => {
  return (
    <div className="bg-[#FFF] flex flex-col items-center py-9">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 py-4 border-b w-[95%] lg:w-[90%] font-lato">
        <img className="w-full lg:w-[40%]" src={lab} alt="" />

        <div className="w-4/5 font-lato">
          <h1 className="text-2xl font-semibold text-[#17324A] mb-6">
            Lab Test
          </h1>
          <p className="mb-3 text-[#17324A] text-lg text-justify">
            Seamless access to certified diagnostic centers citywide, with
            hassle-free appointment booking for ultrasound, x-ray, MRI, and CT
            scans.
          </p>

          <p className="mb-7 text-[#17324A] text-lg text-justify">
            <span className="font-bold">Certifications:</span> Our partnered
            diagnostic centers hold key accreditations—ISO for international
            quality standards, NABL for stringent laboratory compliance, and
            NABH (for CT and MRI centers) for excellence in advanced imaging
            services.
          </p>

          <p className="mb-10 text-[#17324A] text-lg text-justify">
            Committed to health excellence, our certified diagnostic partners
            ensure quality and precision.
          </p>

          <div className="flex flex-col xl:flex-row gap-3 w-full">
            <a
              href="tel:+9876543210"
              className="w-full md:w-4/5 h-[64px] border border-[#00a0aa] rounded-lg text-[#00a0aa] flex items-center justify-center"
            >
              <div>Call now +98 765 432 10</div>
            </a>
            <div className="w-full">
              <AppointmentModal
                className="w-full md:w-4/5 h-[64px]"
                text={"Book Your Appointment"}
              ></AppointmentModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabTest;
