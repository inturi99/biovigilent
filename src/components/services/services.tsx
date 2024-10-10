import clsx from 'clsx';
import { useEffect } from 'react';
import GLPAudits from './glpAudits';
import GMPAudits from './gmpAudits';
import GCPAudits from './gcpAudits';
import { useSearchParams } from 'react-router-dom';

export default function ServicesComponent() {
  let [searchParams, setSearchParams] = useSearchParams();

  const auditsList = [
    {
      id: 1,
      name: 'GCP Audits',
      path: 'gcpAudits',
    },
    {
      id: 2,
      name: 'GMP Audits',
      path: 'gmpAudits',
    },
    {
      id: 3,
      name: 'GLP Audits',
      path: 'glpAudits',
    },
  ];

  useEffect(() => {
    if (!searchParams.get('tab')) {
      setSearchParams({ tab: 'gcpAudits' });
    }
  }, [searchParams, setSearchParams]);

  return (
    <main className="flex flex-col gap-10 overflow-y-auto overflow-x-hidden">
      <section className="flex px-7 items-center justify-center">
        <ul className="flex justify-between items-center w-[60%] font-poppins font-semibold [&>*]:tracking-wide [&>*]:p-1 [&>*]:py-1.5 [&>*]:px-5">
          {auditsList.map(audit => {
            return (
              <button
                onClick={() => {
                  setSearchParams({ tab: audit.path });
                }}
                key={audit.id}
                className={clsx('', {
                  'w-full text-center text-[#9B9B9B] border-b-2 border-[#D7D7D7]': searchParams.get('tab') !== audit.path,
                  'bg-[#E8F5F3] text-[#336DBC] w-full text-center border-b-2 border-[#336DBC]': searchParams.get('tab') === audit.path,
                })}
              >
                {audit.name}
              </button>
            );
          })}
        </ul>
      </section>
      <AuditsComponent tab={searchParams.get('tab') ?? ''} />
    </main>
  );
}

function AuditsComponent({ tab }: { tab: string }): JSX.Element {
  switch (tab) {
    case 'gcpAudits':
      return <GCPAudits />;
    case 'gmpAudits':
      return <GMPAudits />;
    case 'glpAudits':
      return <GLPAudits />;
    case '':
      // Need to implement error page
      return <>Page Not Found</>;

    default:
      return <GMPAudits />;
  }
}
