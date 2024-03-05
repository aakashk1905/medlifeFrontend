import diagnostic from "../../../Assests/diagnostic.png"
import AppointmentModal from "../../AppointmentModal";

const DiagnosticCenter = () => {
  const appointmentModalProps = {
    fontWeight: "normal",
    fontSize: "base",
    text: "Book Your Appointment",
    width: "305px",
    height: "64px",
    backgroundColor: "#00a0aa",
    color: "#fff",
    borderRadius: "8px",
  };
    return (
        <div className='bg-[#FFF] flex flex-col items-center py-9'>
            <div className='w-[90%] md:w-[88%] lg:w-4/5'>
                <h1 className='text-2xl font-semibold text-[#17324A] mb-6 text-center'>Diagnostic Centers</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
                <p className='mb-3 text-[#17324A] text-lg text-justify'>Seamless access to certified diagnostic centers citywide, with hassle-free appointment booking for ultrasound, x-ray, MRI, and CT scans.</p>

                <p className='mb-7 text-[#17324A] text-lg text-justify'><span className="font-bold">Certifications:</span> Our partnered diagnostic centers hold key accreditations—ISO for international quality standards, NABL for stringent laboratory compliance, and NABH (for CT and MRI centers) for excellence in advanced imaging services.</p>

                <p className='mb-10 text-[#17324A] text-lg text-justify'>Committed to health excellence, our certified diagnostic partners ensure quality and precision.</p>

                <div className="flex flex-col xl:flex-row gap-3 w-full">
          <button className="w-full md:w-1/2 lg:w-full xl:w-[400px] h-[64px] border border-[#00a0aa] rounded-lg text-[#00a0aa]">
            Call now +98 765 432 10
          </button>
          <AppointmentModal className="w-full md:w-1/2 lg:w-full xl:w-[250px] 2xl:w-[355px] h-[64px]" text={"Book Your Appointment"}></AppointmentModal>
        </div>
            </div>

            <div className="flex justify-center lg:justify-end">
            <img className='w-full lg:w-2/3' src={diagnostic} alt="" />
            </div>
        </div>
        </div>
        </div>
    );
};

export default DiagnosticCenter;