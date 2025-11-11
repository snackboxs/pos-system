import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Signin from "../pages/Signin"

const router = createBrowserRouter([
   {
      path: "/",
      Component: Home,
   },
   {
      path: "login",
      Component: Login,
   },
   {
      path: "signin",
      Component: Signin
   }
]);

export default router;
