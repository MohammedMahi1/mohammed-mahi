import { createBrowserRouter, Navigate } from "react-router";
import Me from "../pages/Me";
import MyWorks from "../pages/MyWorks";
import ReachMe from "../pages/ReachMe";


const router = createBrowserRouter([
    {
        path: '/',
        Component: Me ,
        errorElement:<Navigate to="/" replace />, 
    },
    {
        path: '/me',
        Component: Me,
    },
    {
        path: '/my-works',
        Component:MyWorks,
    },
    {
        path: '/reach-me',
        Component: ReachMe,
    }
])


export default router