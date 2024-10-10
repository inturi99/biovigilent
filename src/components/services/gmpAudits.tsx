export default function GMPAudits() {
  const gmpList = [
    {
      id: 1,
      path: './gmp_qualification.png',
      name: 'GMP Qualification',
    },
    {
      id: 2,
      path: './complaince.png',
      name: 'Compliance & Upgradation Audits',
    },
    {
      id: 3,
      path: './consulting.png',
      name: 'GMP Consulting',
    },
  ];

  return (
    <>
      <section className="flex px-10 items-center justify-center">
        <article className="flex flex-col gap-5 pl-7">
          <div className="flex justify-center items-center w-full gap-3 relative">
            <img className="rounded-tl-[4rem] w-[50%] h-[50%]" src="./gmp_img_one.png" alt="service_img_once" />
            <img className="rounded-br-[4rem] w-[50%] h-[50%]" src="./gmp_img_two.png" alt="service_img_two" />

            {/* Absolute elements for image bg shade as per figma */}
            <div className="bg-[#69D7C1] absolute -left-2.5 rounded-tl-[4rem] w-[50%] h-full -z-10"></div>
            <div className="bg-[#336DBC] absolute -right-2.5 rounded-br-[4rem] w-[50%] h-full -z-10"></div>
          </div>
          <p className="font-poppins text-[#767676]">
            We offer various GMP services which can help clients across the globe, ranging from audits to various consulting services. We
            provide the following comprehensive GMP Quality Compliance services to the pharmaceutical industry.
          </p>
        </article>
        <img className="self-end py-7 px-2" src="./scroll_down.svg" alt="scroll_down" />
      </section>

      <section>
        <ul className="w-full flex flex-col items-center justify-center gap-9 my-12">
          <li className="flex justify-center items-center gap-48">
            {gmpList.map(list => {
              return (
                <div key={list.id} className="flex flex-col items-center justify-center gap-3 font-poppins text-xl">
                  <img src={list.path} alt={list.name} />
                  <p className="font-poppins">{list.name}</p>
                </div>
              );
            })}
          </li>
        </ul>
      </section>
      <GMPAuditsComponent />
      <GMPUpgradationAudits />
      <GMPConsulting />
    </>
  );
}

function GMPAuditsComponent() {
  return (
    <section className="flex flex-col px-14 gap-7 font-poppins">
      <h1 className="text-[#336DBC] font-poppins text-xl font-semibold underline decoration-[3px] decoration-[#69D7C1] underline-offset-8">
        GMP Qualification Audits
      </h1>
      <p className="font-poppins text-[#767676] py-4">
        The success of any clinical trial/BABE project depends on assuring that the data collected are of good quality. A well organize
        system audit will point out potential problem areas early so that the solutions can be found before it is too late. This can be
        ensured by various types of audits. Due to the increasing complexity of clinical trials and regulatory scrutiny, the components of a
        site audit program and the approaches taken towards designing and managing audits are constantly evolving. Pharmazone Auditors has
        extensive experience in their respective subject matter to accomplish the objective of the audit.
      </p>
    </section>
  );
}

function GMPUpgradationAudits() {
  return (
    <section className="flex flex-col px-7 px-14 gap-7 font-poppins">
      <h1 className="text-[#336DBC] font-poppins text-xl font-semibold underline decoration-[3px] decoration-[#69D7C1] underline-offset-8">
        GMP Compliance & Upgradation Audits
      </h1>
      <p className="font-poppins text-[#767676] py-4">
        We provide an integrated solution for GMP Compliance & Upgradation tailored to your needs at low costs in a time-efficient manner
        by:
      </p>
      <ul className="list-disc pl-7">
        <li>Establishing GMP Management Systems</li>
        <li>Performing the Gap Analysis</li>
        <li>Planning Activity as per Guidelines</li>
        <li>Guidance in Implementation & Documentation</li>
        <li>Training Activities for Executives</li>
        <li>Conducting Internal Audits</li>
      </ul>
    </section>
  );
}

function GMPConsulting() {
  return (
    <section className="flex flex-col px-14 gap-7 font-poppins">
      <h1 className="text-[#336DBC] font-poppins text-xl font-semibold underline decoration-[3px] decoration-[#69D7C1] underline-offset-8">
        GMP Consulting
      </h1>
      <p className="font-poppins text-[#767676] py-4">
        We cover different pieces of entire product management cycle as customized services.
      </p>
      <ul className="list-disc pl-7">
        <li>Pharma Plant Set-Up: We have extensive experience in setting up the complete pharmaceutical manufacturing plants.</li>
        <li>
          Sourcing: We help in procurement of the best quality of Raw Materials, Packing Materials & Finished Goods through our experience
          at competitive prices from established manufacturers /trading houses.
        </li>
        <li>
          Training: Our qualified & experienced Trainers provide training on all GXP topics GMP, GDP, GLP, Data Integrity, QMS, Auditor
          Qualification and many other topics which enhance your employees and operational performance while mitigating compliance and
          business risks.
        </li>
        <li>
          Regulatory: Our Regulatory experts provide CTD/eCTD Dossier Compilation & Submission, User Testing & Medical Writing services.
        </li>
        <li>
          Sourcing: We help in procurement of the best quality of Raw Materials, Packing Materials & Finished Goods through our experience
          at competitive prices from established manufacturers /trading houses.
        </li>
      </ul>
    </section>
  );
}
