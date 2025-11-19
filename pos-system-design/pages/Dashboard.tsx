import MenuCard from "../components/MenuCard";
import MySidebar from "../components/MySidebar";
import { SidebarProvider } from "../src/components/ui/sidebar";
import Topbar from "../components/Topbar";
import type React from "react";
import { selectCurrentPage } from "../src/features/page/pageSlice";
import { auth } from "@/features/auth/authCheck";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function Dashboard({ children }: React.ComponentProps<"div">) {
   const isAuth = useSelector(auth);

   return (
      <SidebarProvider className="bg-gray-100">
         <MySidebar />
         <div className="mx-2 flex-1 relative">
            <div className="flex flex-col relative h-full">
               <Topbar />
               {children}
            </div>
         </div>
         {!isAuth && <MenuCard />}
      </SidebarProvider>
   );
}
