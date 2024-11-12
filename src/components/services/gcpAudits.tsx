export default function GCPAudits() {
  return (
    <>
      <section className="flex px-10 items-center justify-center">
        <article className="flex flex-col gap-5 pl-7">
          <div className="flex justify-center items-center w-full gap-3 relative">
            <img className="rounded-tl-[4rem] w-[50%] h-[50%]" src="/services_img_one.png" alt="service_img_once" />
            <img className="rounded-br-[4rem] w-[50%] h-[50%]" src="/services_img_two.png" alt="service_img_two" />

            {/* Absolute elements for image bg shade as per figma */}
            <div className="bg-[#69D7C1] absolute -left-2.5 rounded-tl-[4rem] w-[50%] h-full -z-10"></div>
            <div className="bg-[#336DBC] absolute -right-2.5 rounded-br-[4rem] w-[50%] h-full -z-10"></div>
          </div>
          <p className="font-poppins text-[#767676]">
            Ensuring the quality of data collected in clinical trials and BA/BE projects is crucial for success. A well-organized system
            audit identifies potential issues early, allowing timely solutions. PharmaVigilence Auditors, with extensive experience, achieves
            audit objectives given the complexity and regulatory scrutiny, site audit programs. PharmaVigilence Auditors leverages extensive
            subject matter expertise to achieve audit objectives
          </p>
        </article>
        <img className="self-end py-7 px-2" src="/scroll_down.svg" alt="scroll_down" />
      </section>
      <section className="flex px-7 w-full my-8">
        <article className="flex justify-center items-center w-full pl-7">
          <div className="relative flex flex-col h-full justify-start items-center w-[40%] p-7 gap-12">
            <div className="flex">
              <img className="w-36 h-36 pb-5 mb-2" src="/clinical_research.svg" alt="clinical_research" />
              <img className="absolute -z-10 bottom-0 left-0" src="/bg_color.svg" alt="clinical_research" />
            </div>
            <p className="pb-3 font-semibold font-poppins text-[#336DBC] text-xl">Clinical Research Organisation</p>
            <ul className="[&>*]:font-poppins leading-[2.225] text-[#393939]">
              <li>{'>'} System & Facility Audit</li>
              <li>{'>'} GAP Audit</li>
              <li>{'>'} For cause Investigation</li>
              <li>{'>'} Site Qualification Audit</li>
              <li>{'>'} Regulatory Compliance Audit</li>
            </ul>
          </div>
          <ul className="w-full flex flex-col items-center justify-center gap-9">
            <li className="flex justify-center items-center gap-24">
              <div className="flex flex-col items-center justify-center gap-3 font-poppins text-xl">
                <img src="/pre_clininc.png" alt="pre_clinic" />
                <p className="font-poppins">Pre-clinical facility</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 font-poppins text-xl">
                <img src="/audits.png" alt="pre_clinic" />
                <p className="font-poppins">Audits</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 font-poppins text-xl">
                <img src="/clinical_monitoring.png" alt="pre_clinic" />
                <p className="font-poppins">Clinical Monitoring</p>
              </div>
            </li>
            <div className="flex justify-center items-center gap-24 w-full">
              <li className="flex flex-col items-center justify-center gap-3 font-poppins text-xl">
                <img src="/bioanalytical.png" alt="pre_clinic" />
                <p className="font-poppins">Bioanalytical Monitoring</p>
              </li>
              <li className="flex flex-col items-center justify-center gap-3 font-poppins text-xl">
                <img src="/pk_stats.png" alt="pre_clinic" />
                <p className="font-poppins">PK Stats Monitoring</p>
              </li>
            </div>
          </ul>
        </article>
        <img className="self-end py-7 px-2" src="/scroll_down.svg" alt="scroll_down" />
      </section>
      <MonitoringClinicalComponent />
      <BioanalyticalPhase />
      <PKStats />
    </>
  );
}

function MonitoringClinicalComponent() {
  return (
    <section className="flex flex-col px-14 gap-7 font-poppins">
      <div>
        <h1 className="text-[#336DBC] font-poppins text-xl font-semibold underline decoration-[3px] decoration-[#69D7C1] underline-offset-8">
          MONITORING-CLINICAL PHASE
        </h1>
        <p className="font-poppins text-[#767676] py-4">
          Ensuring the quality of data collected in clinical trials and BA/BE projects is crucial for success. A well-organized system audit
          identifies potential issues early, allowing timely solutions. PharmaVigilence Auditors, with extensive experience, achieves audit
          objectives given the complexity and regulatory scrutiny, site audit programs. PharmaVigilence Auditors leverages extensive subject
          matter expertise to achieve audit objectives
        </p>
      </div>

      <div>
        <h1 className="text-[#336DBC] font-poppins text-xl font-semibold">Site Initiation Visit</h1>
        <p className="font-poppins text-[#767676] py-4">
          PharmaVigilence experts conduct site visits well in advance of trial initiation, ensuring the following items during Site Initiation
          Visits (SIV)
        </p>
        <ul className="list-disc pl-7">
          <li>
            Proactively evaluate and address errors in protocols, informed consent forms (ICFs), case report forms (CRFs), and other
            relevant documents
          </li>
          <li>Check site readiness to initiate the project & Practical issue resolution well before study</li>
          <li>Assessment of competences of Site staff & Vendors</li>
          <li>Resolution of Safety issues</li>
        </ul>
      </div>

      <div>
        <h1 className="text-[#336DBC] font-poppins text-xl font-semibold">Site Monitoring Visit</h1>
        <p className="font-poppins text-[#767676] py-4">
          PharmaVigilence experts visit sites during the trial commencement as per monitoring visit scope and requirements and ensure following
          items during visit.
        </p>
        <ul className="list-disc pl-7">
          <li>Original and Transparent view of your trial and BA/BE at your desk</li>
          <li>Timely project updates including subject enrolment, dosing, unexpected AE/SAE or withdrawal etc.</li>
          <li>Eliminating possibilities of Informed Consent Process related concerns and recruiting unfit volunteers</li>
          <li>Complete accountability of Investigational Product & Assurance of right IMP dosing with right randomization code</li>
          <li>With presence of PharmaVigilence monitors, it allows to avoid any under reporting of AE/SAE/Withdrawal</li>
          <li>Continuous monitoring can avoid sample swap or mixing of samples during processing</li>
          <li>Each and every aspect of the study to ensure 100% compliance to regulatory, protocol and in-house SOPs</li>
        </ul>
      </div>

      <div>
        <h1 className="text-[#336DBC] font-poppins text-xl font-semibold">Site Clouse out Visit</h1>
        <p className="font-poppins text-[#767676] py-4">
          PharmaVigilence experts visit sites at the end of trial and ensure following closure items during SCOV
        </p>
        <ul className="list-disc pl-7">
          <li>To ensure that site has taken appropriate CAPA on any or above monitoring Visit</li>
          <li>AE and SAE-Serious Adverse Event details check Reporting</li>
          <li>IMP accountability after completion of study & Samples storage requirements and accountability</li>
        </ul>
      </div>

      <div>
        <h1 className="text-[#336DBC] font-poppins text-xl font-semibold">Retrospective Monitoring Visits</h1>
        <p className="font-poppins text-[#767676] py-4">
          PharmaVigilence experts visit sites at the completion of clinical phase and review following items in detail
        </p>
        <ul className="list-disc pl-7">
          <li>This is generally conducted after completion of Clinical Phase and/or when the draft report is ready</li>
          <li>This ensures error free reporting</li>
          <li>Complete source data verification allows reporting and resolution of any error before submitting as a report</li>
        </ul>
      </div>
    </section>
  );
}

function BioanalyticalPhase() {
  return (
    <section className="flex flex-col px-7 px-14 gap-7 font-poppins pt-8">
      <h1 className="text-[#336DBC] font-poppins text-xl font-semibold underline decoration-[3px] decoration-[#69D7C1] underline-offset-8">
        BIOANALYTICAL PHASE
      </h1>
      <p className="font-poppins text-[#767676] py-4">
        We delivering excellence in Bioanalytical Monitoring Services since, our high experienced and knowledgeable auditors ensure
        efficient bioanalysis data for accuracy and error free for below activities
      </p>

      <div>
        <h1 className="text-[#336DBC] font-poppins text-xl font-semibold">In-process Bioanalytical Monitoring (IPBA)</h1>
        <p className="font-poppins text-[#767676] py-4">
          We ensure compliance in the following key areas during the In-process bioanalytical Monitoring.
        </p>
        <ul className="list-disc pl-7">
          <li>Accuracy during the analysis & Error-free stock weighing, CC/QC and Solution Preparation</li>
          <li>Spiking, storage and accountability of CC/QC & Study Samples Accountability during receipt and storage</li>
          <li>Sample Processing as per Method of analysis</li>
          <li>Calibration status of instruments before use</li>
        </ul>
      </div>

      <div>
        <h1 className="text-[#336DBC] font-poppins text-xl font-semibold">Retrospective Bioanalytical Monitoring (RTBA)</h1>
        <p className="font-poppins text-[#767676] py-4">After completing the sample analysis, we review the following for compliance</p>
        <ul className="list-disc pl-7">
          <li>Raw data checks and sample reviews and Instrumentation review</li>
          <li>Review of all study data, including draft Bioanalytical Report</li>
          <li>Verification of the draft BA report against all raw data</li>
        </ul>
      </div>
      <div>
        <h1 className="text-[#336DBC] font-poppins text-xl font-semibold">Method Development and Validation (MD/MV)</h1>
        <p className="font-poppins text-[#767676] py-4">
          We focus on the following key areas during method development and validation monitoring
        </p>
        <ul className="list-disc pl-7">
          <li>Method Development (MD): We conduct an adequate number of trials to arrive at an accurate method.</li>
          <li>Interference and Inference: We derived appropriate conclusions from the developed method.</li>
          <li>
            Method Validation: The method was validated according to applicable regulatory requirements, ensuring no critical experiments
            were overlooked.
          </li>
          <li>Robustness: Verifying the method is robust, minimizing any issues during study sample analysis.</li>
        </ul>
      </div>
    </section>
  );
}

function PKStats() {
  return (
    <section className="flex flex-col px-7 px-14 gap-7 font-poppins">
      <h1 className="text-[#336DBC] font-poppins text-xl font-semibold underline decoration-[3px] decoration-[#69D7C1] underline-offset-8">
        PK-STATS MONITORING
      </h1>
      <p className="font-poppins text-[#767676] py-4">
        Pharmacokinetics and statistical monitoring represent innovative concepts in clinical research. Our services include online and
        retrospective PK-Stat monitoring, where our experts enhance reporting quality and accuracy
      </p>
    </section>
  );
}
