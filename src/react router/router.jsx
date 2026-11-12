import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Setups from '../pages/Setups';
import GearGuide from '../pages/GearGuide';
import Guidelines from '../pages/Guidelines';
import CardDetails from '../pages/CardDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/setups",
            element: <Setups />,            
        },
        {
            path: "/gearguide",
            element: <GearGuide />,
        },
        {
            path: "/guidelines",
            element: <Guidelines />,
        },
        {
            path: "/carddetails/:id",
            element: <CardDetails />,
        }
        
    ]
  },
]);

export default router;