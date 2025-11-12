import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ShowItems from "../pages/ShowItems";
import AdminDashboard from "../pages/AdiminDashboard";


const router = createBrowserRouter([
   {
      path: "/",
      Component: Home,
      children: [
         {
            path: "/",
            Component: ShowItems
         },
         {
            path: '/admin/dashboard',
            Component: AdminDashboard
         }
      ]
   },
]);

export default router;
