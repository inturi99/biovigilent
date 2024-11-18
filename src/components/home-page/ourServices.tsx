import { Link } from "react-router-dom";

export default function OurServices(): JSX.Element {
  return (
    <section className="flex px-7 my-5 items-center justify-center">
      <div className="flex flex-col pl-7 gap-3">
        <h1 className="font-poppins font-bold text-xl text-[#336DBC] underline decoration-[3px] decoration-[#69D7C1] underline-offset-8">
          Our Services
        </h1>
        <p className="font-poppins text-[#767676]">
          Our clinical audit services are designed to enhance the quality and safety of patient care. We offer a comprehensive range of
          services, including compliance audits, risk management, performance improvement, and clinical effectiveness assessments. By
          leveraging our expertise, healthcare providers can ensure regulatory adherence, mitigate risks, and continuously improve clinical
          practices. Let us help you achieve excellence in every aspect of patient care.
        </p>
        <ul className="flex gap-14 px-5 pt-5 self-center w-[90%] font-poppins [&>*]:bg-[#E8F5F3]">
          <li className="flex flex-col rounded-t-2xl">
            <img className="rounded-t-2xl h-96 object-cover" src="/gcp_img.png" alt="gcp" />
            <div className="flex flex-col justify-center items-center w-full">
              <Link to="/services/gcpAudits" className="flex flex-col justify-center items-center w-full">
                <h5 className="text-[#336DBC] text-xl font-poppins font-semibold leading-9">GCP</h5>
                <p className="text-[#767676] tracking-wide font-thin font-poppins">Good Clinical Practice</p>
                <h6 className="text-[#767676] text-lg font-semibold">Audits</h6>
              </Link>
            </div>
          </li>

          <li className="flex flex-col rounded-t-2xl">
            <img className="rounded-t-2xl h-96 object-cover" src="/gmp_img.png" alt="gmp" />
            <div className="flex flex-col justify-center items-center w-full">
              <h5 className="text-[#336DBC] text-xl font-poppins font-semibold leading-9">GMP</h5>
              <p className="text-[#767676] tracking-wide font-thin font-poppins">Good Manufacturing Practice</p>
              <h6 className="text-[#767676] text-lg font-semibold">Audits</h6>
            </div>
          </li>

          <li className="flex flex-col rounded-t-2xl">
            <img className="rounded-t-2xl h-96 object-cover" src="/glp_img.png" alt="glp" />
            <div className="flex flex-col justify-center items-center w-full">
              <h5 className="text-[#336DBC] text-xl font-poppins font-semibold leading-9">GLP</h5>
              <p className="text-[#767676] tracking-wide font-thin font-poppins">Good Laboratory Practice</p>
              <h6 className="text-[#767676] text-lg font-semibold">Audits</h6>
            </div>
          </li>
        </ul>
        <button className="self-center text-white rounded-md bg-[#336DBC] font-poppins px-10 py-2 mt-5 tracking-wide font-semibold">
          Learn more
        </button>
      </div>
      <img className="self-end pb-20 px-2" src="/scroll_down.svg" alt="scroll_down" />
    </section>
  );
}
