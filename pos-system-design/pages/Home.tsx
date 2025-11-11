import { Outlet } from "react-router";
import Login from "./Login";
import Dashboard from "./Dashboard"
export default function Home() {
   return (
      <div>
         <div>
            {/* <img src="../public/black.jpg"/> */}
            {/* <Login /> */}
            <Dashboard />
         </div>
      </div>
   );
}
