import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import './App.css';
import RootComponent from './components/root-app';
import ServicesComponent from './components/services/services';
import HomePageComponent from './components/home-page/homePage';
import GCPAudits from './components/services/gcpAudits';
import GMPAudits from './components/services/gmpAudits';
import GLPAudits from './components/services/glpAudits';

const router = createHashRouter([
  {
    Component: RootComponent,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />,
      },
      {
        path: '/home',
        Component: HomePageComponent,
      },
      {
        path: '/services',
        Component: ServicesComponent,
        children: [
          { path: '', element: <Navigate to={'gcpAudits'} /> },
          {
            path: 'gcpAudits',
            element: <GCPAudits />,
          },
          {
            path: 'gmpAudits',
            element: <GMPAudits />,
          },
          {
            path: 'glpAudits',
            element: <GLPAudits />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
