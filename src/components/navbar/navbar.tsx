import { NavLink } from 'react-router-dom';

export default function NavbarComponent() {
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
    <header className="flex justify-between bg-[#E8F5F3] p-3 px-12">
      <img width="10%" height="10%" className="ml-3" src="./logo.svg" alt="logo" />
      <ul className="flex justify-around items-center [&>*]:mx-11 font-poppins font-semibold">
        {navItems.map(item => {
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'underline decoration-[3px] decoration-[#69D7C1] underline-offset-8' : ''
              }
            >
              {item.item}
            </NavLink>
          );
        })}
      </ul>
      <button className="mr-8 px-12 text-s text-white tracking-wide bg-[#336DBC] font-poppins font-semibold rounded-md">Contact</button>
    </header>
  );
}
