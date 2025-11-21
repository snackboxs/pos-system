import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ShowItems from "../pages/ShowItems";
import AdminDashboard from "../pages/AdiminDashboard";
import EditItem from "../pages/EditItem"
import Stock from "../pages/Stock"

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
         },
         {
            path: '/edititem/:id',
            Component: EditItem,
         },
{
   path: "/stock",
   Component: Stock,
}
      ]
   },
]);

export default router;
