import MenuCard from "../components/MenuCard";
import MySidebar from "../components/MySidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { SlidersHorizontal, Search, Coffee, Apple, Book } from "lucide-react";
import CardContainer from "../components/CardContainer";
import MyPagination from "../components/MyPagination";
import Category from "../components/Category";
import Topbar from "../components/Topbar";

export default function Dashboard() {
   return (
      <SidebarProvider className="bg-gray-100">
         <MySidebar />
         <div className="mx-2 flex-1 relative">
            <Topbar />
            <Category />
            <div className="mt-50"></div>
            <CardContainer />
            <MyPagination />
         </div>
         <MenuCard />
      </SidebarProvider>
   );
}
