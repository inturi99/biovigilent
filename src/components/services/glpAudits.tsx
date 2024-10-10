export default function GLPAudits() {
  const glpList = [
    {
      id: 1,
      path: './glp_img_one.png',
      name: 'Qualification of GLP facilities',
    },
    {
      id: 2,
      path: './glp_img_two.png',
      name: 'GAP Analysis',
    },
    {
      id: 3,
      path: './glp_img_three.png',
      name: 'Study Protocol / Report audits',
    },
    {
      id: 4,
      path: './glp_img_four.png',
      name: 'Process / Data audits',
    },
  ];
  return (
    <>
      <section className="flex px-10 items-center justify-center">
        <article className="flex flex-col gap-5 pl-7">
          <div className="flex justify-center items-center w-full gap-3 relative">
            <img className="rounded-tl-[4rem] w-[50%] h-[50%]" src="./glp_audits_img_one.png" alt="service_img_one" />
            <img className="rounded-br-[4rem] w-[50%] h-[50%]" src="./glp_audits_img_two.png" alt="service_img_two" />

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
          <li className="flex justify-center items-center gap-28">
            {glpList.map(list => {
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
      <GLPFacilities />
      <GapAnalysis />
      <StudyProtocol />
      <DataAudits />
    </>
  );
}

function GLPFacilities() {
  return (
    <section className="flex flex-col px-7 px-14 gap-7 font-poppins">
      <h1 className="text-[#336DBC] font-poppins text-xl font-semibold underline decoration-[3px] decoration-[#69D7C1] underline-offset-8">
        Qualification of GLP facilities
      </h1>
      <p className="font-poppins text-[#767676] py-4">
        BioVigilent has a robust team of experts with the experience and capability to conduct audits across the globe. GLP audits are
        conducted with FDA and EU regulations and guidelines (21 CFR Part 58, OECD) as the standard by which they’re conducted. Our audit
        capabilities are
      </p>
      <ul className="list-disc pl-7">
        <li>Pre-study site qualification for procedures and practices</li>
        <li>Facility inspections for maintenance</li>
        <li>Ensure the procedure as per GLP principles, SOPs,</li>
        <li>Data Integrity and Traceability</li>
      </ul>
    </section>
  );
}

function GapAnalysis() {
  return (
    <section className="flex flex-col px-7 px-14 gap-7 font-poppins">
      <h1 className="text-[#336DBC] font-poppins text-xl font-semibold underline decoration-[3px] decoration-[#69D7C1] underline-offset-8">
        Gap analyses audits
      </h1>
      <p className="font-poppins text-[#767676] py-4">
        BioVigilent auditors are conducting a gap analysis audit for a Good Laboratory Practice (GLP) lab, we ensure compliance with GLP
        regulations and assess the quality and integrity of the data. Here are some key areas to verify
      </p>
      <ul className="list-disc pl-7">
        <li>GLP Regulations (21 CFR Part 58)</li>
        <li>Verify that SOPs (Standard Operating Procedures) cover GLP-specific aspects</li>
        <li>Assess the qualifications and training of lab personnel</li>
        <li>Verify lab facilities and equipment used for GLP studies. Ensure they meet GLP requirements.</li>
      </ul>
    </section>
  );
}

function StudyProtocol() {
  return (
    <section className="flex flex-col px-7 px-14 gap-7 font-poppins">
      <h1 className="text-[#336DBC] font-poppins text-xl font-semibold underline decoration-[3px] decoration-[#69D7C1] underline-offset-8">
        Study Protocol / Report audits
      </h1>
      <p className="font-poppins text-[#767676] py-4">
        BioVigilent conducting a study-specific audit for a Good Laboratory Practice (GLP) lab, focus on ensuring compliance with GLP
        regulations, the study protocol, and applicable Standard Operating Procedures (SOPs). Here are key areas to verify:
      </p>
      <ul className="list-disc pl-7">
        <li>
          Ensure all study-related documents are complete, accurate, and up-to-date. This includes protocols, SOPs, study plans, and raw
          data
        </li>
        <li>Verify the raw data, including laboratory notebooks, electronic records, and study logs.</li>
        <li>Assess the training and qualifications of personnel involved in the study</li>
        <li>
          Inspect laboratory equipment used during the study and Ensure equipment calibration, maintenance, and validation are documented.
        </li>
        <li>Evaluate sample Preparation, labelling, storage, and tracking procedures.</li>
        <li>Ensure QAU reviews are conducted at different study stages (from protocol preparation to final report).</li>
        <li>Audit the final study report for accuracy, completeness, and GLP compliance.</li>
        <li>Assess the quality and integrity of study data presented in the report</li>
      </ul>
    </section>
  );
}

function DataAudits() {
  return (
    <section className="flex flex-col px-7 px-14 gap-7 font-poppins">
      <h1 className="text-[#336DBC] font-poppins text-xl font-semibold underline decoration-[3px] decoration-[#69D7C1] underline-offset-8">
        Process / Data audits
      </h1>
      <p className="font-poppins text-[#767676] py-4">
        BioVigilent conducting a process audit for a Good Laboratory Practice (GLP) lab, focus on evaluating the procedures, practices, and
        adherence to GLP principles within the lab for specific process. Here are key areas to verify
      </p>
      <ul className="list-disc pl-7">
        <li>Process analysis, study specific data and reports related regulatory guidance</li>
        <li>Risk-Based Approaches for Facility and Equipment Maintenance for process</li>
      </ul>
    </section>
  );
}
