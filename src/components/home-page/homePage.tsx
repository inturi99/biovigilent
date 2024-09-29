import ContactUs from './contactForm';
import MissionAndVision from './missionAndVision';
import OurServices from './ourServices';

export default function HomePageComponent() {
  return (
    <>
      <section className="flex px-7 items-center justify-center">
        <div className="flex h-full w-full">
          <article className="flex flex-col justify-around pl-7">
            <header>
              <h6 className="font-poppins text-[#336DBC] font-semibold text-xl">Comprehensive Medical Audits</h6>
              <h1 className="text-6xl font-bold font-poppins w-[98%] leading-normal">Ensuring Excellence in Healthcare Auditing</h1>
            </header>
            <p className="font-poppins text-[#767676] w-[98%] text-lg">
              we specialize in delivering precise and thorough medical audit services that uphold the highest standards of healthcare. Our
              expert team is dedicated to ensuring your practice adheres to regulatory requirements, minimizes risks, and improves overall
              operational efficiency. Let us help you achieve excellence in patient care and compliance.
            </p>
            <button className="self-start text-white rounded-md bg-[#336DBC] font-poppins px-10 py-2 tracking-wide font-semibold">
              Know more
            </button>
          </article>
          <img width="50%" height="25%" src="./home_img.svg" alt="home_image" />
        </div>
        <img className="self-end py-7 px-2" src="./scroll_down.svg" alt="scroll_down" />
      </section>
      <OurServices />

      <AboutUs />
      <ContactUs />
    </>
  );
}

function AboutUs() {
  return (
    <section className="flex flex-col gap-14 px-7 my-5 items-center justify-center">
      <div className="flex">
        <div className="flex flex-col justify-center items-center gap-4">
          <main className="flex items-center justify-center">
            <img width="45%" height="20%" src="./home_about_us.svg" alt="about_us" />
            <div className="flex flex-col gap-14 w-[45%]">
              <header className="font-poppins font-bold text-5xl">
                <h1 className="pb-3 font-poppins text-xl underline decoration-[3px] decoration-[#69D7C1] underline-offset-8 text-[#336DBC] font-semibold">
                  About Us
                </h1>
                <p>Pioneering Precision in Healthcare Auditing for Superior Compliance and Care</p>
              </header>
              <p className="font-poppins leading-7 text-[#767676]">
                BioVigilent is well established pharmaceutical consultancy service provider specialized in Quality monitoring & audit
                services for Clinical studies, CROs, Contract manufacturing plants and contract testing facilities. Since 2024, BioVigilent
                has proven its outstanding expertise and services to pharmaceutical companies. We are a highly focused GxP compliance
                service-oriented company. We’re a company that supports the toughest GxP compliance challenges. We do more than consulting —
                we aim to make a remarkable impact on GxP compliance services. The auditing report and data will undergo a thorough
                examination by a team of internal experts. These experts will carefully review the information to ensure accuracy,
                compliance with relevant standards, and to identify any potential issues or areas for improvement. This internal review
                process is crucial for maintaining the integrity and reliability of the audit findings
              </p>
            </div>
          </main>
        </div>
        <img className="self-end pb-7 px-2" src="./scroll_down.svg" alt="scroll_down" />
      </div>
      <MissionAndVision />
    </section>
  );
}
