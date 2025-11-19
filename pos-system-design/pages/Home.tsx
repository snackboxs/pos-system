import { Outlet } from "react-router";

import Dashboard from "./Dashboard";
// import {useDashboardContext} from "./DashboardProvider"
import DashboardProvider from "./DashboardProvider";
export default function Home() {
   return (
      <DashboardProvider>
         <div>
            <div>
               <Dashboard>
                  <Outlet />
               </Dashboard>
            </div>
         </div>
      </DashboardProvider>
   );
}
