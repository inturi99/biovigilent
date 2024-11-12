import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ServiceMenuItems from './service-menu-items';

export default function NavbarComponent() {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const navItems = [
    {
      id: 1,
      item: 'Home',
      path: '/home',
    },
    {
      id: 2,
      item: 'Service',
      path: '/services',
    },
    {
      id: 3,
      item: 'About',
      path: '',
    },
  ];

  return (
    <header className="flex justify-between bg-[#E8F5F3] p-3 px-12 relative">
      <a href='/home'>
        <img width="10%" height="10%" className="ml-3" src="/KPV-LOGO.png" alt="logo" />
      </a>
      <ul className="flex justify-around items-center [&>*]:mx-11 font-poppins font-semibold">
        {navItems.map(item => {
          return (
            <li
              key={item.id}
              className="flex items-center justify-center"
              onMouseEnter={item.item === 'Service' ? () => setDropdown(true) : undefined}
              onMouseLeave={item.item === 'Service' ? () => setDropdown(false) : undefined}
            >
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'underline decoration-[3px] decoration-[#69D7C1] underline-offset-8 h-full' : ''
                }
                to={item.path}
              >
                {item.item}
              </NavLink>
              {item.item === 'Service' && dropdown && <ServiceMenuItems />}
            </li>
          );
        })}
      </ul>
      <button className="mr-8 px-12 text-s text-white tracking-wide bg-[#336DBC] font-poppins font-semibold rounded-md">Contact</button>
    </header>
  );
}
