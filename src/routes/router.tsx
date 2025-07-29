import { createBrowserRouter, Navigate } from "react-router";
import Me from "../pages/Me";
import MyWorks from "../pages/MyWorks";
import ReachMe from "../pages/ReachMe";
import Layout from "../pages/layout/_layout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Me,
        errorElement: <Navigate to="/" replace />,
      },
      {
        index: true,
        Component: Me,
      },
      {
        path: "/me",
        Component: Me,
      },
      {
        path: "/my-works",
        Component: MyWorks,
      },
      {
        path: "/reach-me",
        Component: ReachMe,
      },
    ],
  },
]);

export default router;
