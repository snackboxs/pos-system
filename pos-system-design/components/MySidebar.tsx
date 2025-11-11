// components/ui/sidebar.tsx
// (Assuming you installed it via `pnpm dlx shadcn@latest add sidebar` as the docs suggest) :contentReference[oaicite:24]{index=24}

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
} from "../src/components/ui/sidebar";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
   Home,
   Settings,
   Inbox,
   Cherry,
   CircleUser,
   ChevronUp,
   User2,
} from "lucide-react";
import { useSidebar } from "../src/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const menuItems = [
   { title: "Home", url: "#", icon: Home },
   { title: "Inbox", url: "#", icon: Inbox },
   { title: "Settings", url: "#", icon: Settings },
];

export default function MySidebar() {
   const [activeLink, setActiveLink] = useState(0);
   const activeClasses = "bg-green-500 text-white shadow-lg hover:bg-green-500"; // active ဖြစ်ရင် ပေးမယ့် style
   const inactiveClasses =
      "bg-white text-gray-800 hover:bg-gray-200 active:bg-gray-100"; // inactive ဖြစ်ရင် ပေးမယ့် style

   return (
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
                                 index === activeLink
                                    ? activeClasses
                                    : inactiveClasses
                              }`}
                              onClick={() => setActiveLink(index)}
                           >
                              
                              <a
                                 href={item.url}
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
                           <User2 /> Username
                           <ChevronUp className="ml-auto" />
                        </SidebarMenuButton>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent
                        side="top"
                        // className="w-[--radix-popper-anchor-width]"
                        className="w-50"
                     >
                        <DropdownMenuItem>
                           <span>Account</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                           <span>Billing</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                           <span>Sign out</span>
                        </DropdownMenuItem>
                     </DropdownMenuContent>
                  </DropdownMenu>
               </SidebarMenuItem>
            </SidebarMenu>
         </SidebarFooter>
      </Sidebar>
   );
}
