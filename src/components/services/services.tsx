import clsx from 'clsx';
import { useState } from 'react';
import GLPAudits from './glpAudits';
import GMPAudits from './gmpAudits';
import GCPAudits from './gcpAudits';

export default function ServicesComponent() {
  const [state, setState] = useState<Number>(1);

  const auditsList = [
    {
      id: 1,
      name: 'GCP Audits',
    },
    {
      id: 2,
      name: 'GMP Audits',
    },
    {
      id: 3,
      name: 'GLP Audits',
    },
  ];

  return (
    <main className="flex flex-col gap-10 overflow-y-auto overflow-x-hidden">
      <section className="flex px-7 items-center justify-center">
        <ul className="flex justify-between items-center w-[60%] font-poppins font-semibold [&>*]:tracking-wide [&>*]:p-1 [&>*]:py-1.5 [&>*]:px-5">
          {auditsList.map(audit => {
            return (
              <button
                onClick={() => setState(audit.id)}
                key={audit.id}
                className={clsx('', {
                  'w-full text-center text-[#9B9B9B] border-b-2 border-[#D7D7D7]': state !== audit.id,
                  'bg-[#E8F5F3] text-[#336DBC] w-full text-center border-b-2 border-[#336DBC]': state === audit.id,
                })}
              >
                {audit.name}
              </button>
            );
          })}
        </ul>
      </section>
      <AuditsComponent tab={state.toString()} />
    </main>
  );
}

function AuditsComponent({ tab }: { tab: string }): JSX.Element {
  console.log(tab);

  switch (tab) {
    case '1':
      return <GCPAudits />;
    case '2':
      return <GMPAudits />;
    case '3':
      return <GLPAudits />;

    default:
      return <GMPAudits />;
  }
}
