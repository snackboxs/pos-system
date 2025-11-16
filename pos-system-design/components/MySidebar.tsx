import {
   Sidebar,
   SidebarHeader,
   SidebarContent,
   SidebarFooter,
   SidebarGroup,
   SidebarGroupLabel,
   SidebarGroupContent,
   SidebarMenu,
   SidebarMenuItem,
   SidebarMenuButton,
} from "@/components/ui/sidebar";

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
   Home,
   Settings,
   Inbox,
   Cherry,
   ChevronUp,
   User2,
   Moon,
   Sun,
} from "lucide-react";

import { useState } from "react";
import LoginBox from "./LoginBox";
import SignUpBox from "./SignUpBox";
import { useNavigate } from "react-router";
import { setActivePage } from "../src/features/page/pageSlice";
import { useLocation } from "react-router-dom";
import { theme, setTheme } from "../src/features/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const menuItems = [
   { title: "Home", url: "/", icon: Home },
   { title: "Stock", url: "/admin/dashboard", icon: Inbox },
   // { title: "Settings", url: "#", icon: Settings },
];

export default function MySidebar() {
   const location = useLocation();
   const isCurrentPage = location.pathname;
   const navigate = useNavigate();
   const dispatch = useDispatch();
   // const [activeLink, setActiveLink] = useState(0);
   const [auth, setAuth] = useState(false);

   const [isLoginOpen, setIsLoginOpen] = useState(false);
   const [isSignUpOpen, setIsSignUpOpen] = useState(false);
   const currentTheme = useSelector(theme);
   const newTheme = currentTheme === "light" ? "dark" : "light";

   const activeClasses =
      "bg-green-600 text-white shadow-lg hover:bg-green-700 hover:text-white";
   const inactiveClasses =
      "bg-white text-gray-800 hover:bg-gray-200 active:bg-gray-100";

   return (
      <>
         <Sidebar side="left" variant="sidebar" collapsible="icon">
            <SidebarHeader className="flex-row items-center">
               <Cherry size={30} />
               <h2 className="text-xl font-bold group-data-[collapsible=icon]:hidden">
                  My App
               </h2>
            </SidebarHeader>

            <SidebarContent>
               <SidebarGroup>
                  <SidebarGroupLabel>Main</SidebarGroupLabel>
                  <SidebarGroupContent>
                     <SidebarMenu>
                        {menuItems.map((item, index) => (
                           <SidebarMenuItem key={item.title}>
                              <SidebarMenuButton
                                 asChild
                                 className={`${
                                    isCurrentPage === item.url
                                       ? activeClasses
                                       : inactiveClasses
                                 } `}
                                 // onClick={() => setActiveLink(index)}
                              >
                                 <a
                                    // href="#"
                                    onClick={() => {
                                       navigate(`${item.url}`);
                                       // dispatch(setActivePage(item.title));
                                    }}
                                    className="flex items-center gap-2"
                                 >
                                    <item.icon size={20} />
                                    <span>{item.title}</span>
                                 </a>
                              </SidebarMenuButton>
                           </SidebarMenuItem>
                        ))}
                     </SidebarMenu>
                  </SidebarGroupContent>
               </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
               <SidebarMenu>
                  <SidebarMenuItem>
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                           <SidebarMenuButton className="cursor-pointer">
                              <User2 /> {auth ? "Username" : "Login or Sign up"}
                              <ChevronUp className="ml-auto" />
                           </SidebarMenuButton>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent side="top" className="w-50">
                           {!auth && (
                              <>
                                 <DropdownMenuItem
                                    onSelect={(e) => {
                                       e.preventDefault();
                                       setIsLoginOpen(true);
                                    }}
                                 >
                                    Login
                                 </DropdownMenuItem>

                                 <DropdownMenuItem
                                    onSelect={(e) => {
                                       e.preventDefault();
                                       setIsSignUpOpen(true);
                                    }}
                                 >
                                    Sign Up
                                 </DropdownMenuItem>
                              </>
                           )}

                           <DropdownMenuItem
                              className="justify-between"
                              onClick={() => {
                                 dispatch(setTheme(newTheme));
                              }}
                           >
                              {currentTheme === "light" ? (
                                 <>
                                    Dark Mode <Moon/>
                                 </>
                              ) : (
                                 <>Light Mode <Sun/></>
                              )}
                           </DropdownMenuItem>
                        </DropdownMenuContent>
                     </DropdownMenu>
                  </SidebarMenuItem>
               </SidebarMenu>
            </SidebarFooter>
         </Sidebar>

         {/* Dialogs outside Dropdown */}
         <LoginBox
            open={isLoginOpen}
            onOpenChange={setIsLoginOpen}
            onSwitchToSignUp={() => {
               setIsLoginOpen(false);
               setIsSignUpOpen(true);
            }}
         />

         <SignUpBox
            open={isSignUpOpen}
            onOpenChange={setIsSignUpOpen}
            onSwitchToLogin={() => {
               setIsSignUpOpen(false);
               setIsLoginOpen(true);
            }}
         />
      </>
   );
}
