import clsx from 'clsx';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function ServicesComponent() {
  const [state, setState] = useState<Number>(1);

  const auditsList = [
    {
      id: 1,
      name: 'GCP Audits',
      path: 'gcpAudits',
      currentLoc: '/services/gcpAudits',
    },
    {
      id: 2,
      name: 'GMP Audits',
      path: 'gmpAudits',
      currentLoc: '/services/gmpAudits',
    },
    {
      id: 3,
      name: 'GLP Audits',
      path: 'glpAudits',
      currentLoc: '/services/glpAudits',
    },
  ];

  return (
    <main className="flex flex-col gap-10 overflow-y-auto overflow-x-hidden">
      <section className="flex px-7 items-center justify-center">
        <ul className="flex justify-between items-center w-[60%] font-poppins font-semibold [&>*]:tracking-wide [&>*]:p-1 [&>*]:py-1.5 [&>*]:px-5">
          {auditsList.map(audit => {
            return (
              <NavLink
                to={audit.path}
                onClick={() => {
                  setState(audit.id);
                }}
                key={audit.id}
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'bg-[#E8F5F3] text-[#336DBC] w-full text-center border-b-2 border-[#336DBC]'
                    : 'w-full text-center text-[#9B9B9B] border-b-2 border-[#D7D7D7]'
                }
              >
                {audit.name}
              </NavLink>
            );
          })}
        </ul>
      </section>
      <Outlet />
    </main>
  );
}
