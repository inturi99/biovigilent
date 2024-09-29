import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './App.css';
import RootComponent from './components/root-app';
import ServicesComponent from './components/services/services';
import HomePageComponent from './components/home-page/homePage';

const router = createBrowserRouter([
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
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
