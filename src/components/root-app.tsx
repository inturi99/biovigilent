import { Outlet } from 'react-router-dom';
import FooterComponent from './footer/footer';
import NavbarComponent from './navbar/navbar';

export default function RootComponent() {
  return (
    <div className="flex flex-col gap-10 overflow-y-auto">
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}
