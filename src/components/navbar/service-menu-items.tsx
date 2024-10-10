import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function ServiceMenuItems() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dropdown, setDropdown] = useState<boolean>(false);
  const navigate = useNavigate();

  const serviceItems = [
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

  //   useEffect(() => {
  //     if (location.pathname === '/home') {
  //       navigate('/home');
  //     }
  //   }, [searchParams, setSearchParams]);

  return (
    <div className="absolute left-[46%] top-[2.8rem] w-20 h-[24vh]">
      <ul
        className={clsx(
          'absolute flex flex-col w-40 -right-[42%] font-medium p-2 tracking-wider gap-2.5 z-10 text-md font-poppins bg-[#E8F5F3] top-[1.6rem] justify-center items-center text-center',
          {
            hidden: dropdown,
          }
        )}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceItems.map(item => {
          return (
            <li
              onClick={() => {
                setSearchParams({ tab: item.path });
                navigate(`/services?tab=${item.path}`);
                setDropdown(false);
              }}
              className="flex hover:text-[#336DBC] justify-center items-center text-center w-full cursor-pointer"
              key={item.id}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
