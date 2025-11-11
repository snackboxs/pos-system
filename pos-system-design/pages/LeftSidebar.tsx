
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
import { Home, Settings, Inbox, Cherry, CircleUser } from "lucide-react";
import { useSidebar } from "../src/components/ui/sidebar";

const menuItems = [
   { title: "Home", url: "/home", icon: Home },
   { title: "Inbox", url: "/inbox", icon: Inbox },
   { title: "Settings", url: "/settings", icon: Settings },
];
// 💡 useSidebar() ကို သုံးရန်အတွက် client component ဖြစ်ဖို့ လိုအပ်ပါသည်။
// SidebarProvider, SidebarMenuItem, SidebarMenuButton, useSidebar တို့ကို import လုပ်ပါ။

function MenuLink({ item }: { item: (typeof menuItems)[0] }) {
   // 1. Sidebar Context မှ toggleSidebar function ကို ယူခြင်း
   // useSidebar() ဟာ Sidebar ရဲ့ လက်ရှိ state ကို ထိန်းချုပ်ပေးတဲ့ function တွေကို ပေးပါတယ်။
   const { toggleSidebar } = useSidebar();

   // 2. Link ကို နှိပ်လျှင် အလုပ်လုပ်မည့် function
   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // 🚨 ဤနေရာတွင် Sidebar ကို ပိတ်/ဖွင့်ခြင်း (Toggle) ကို လုပ်ဆောင်ပါသည်။
      // ဖွင့်ထားရင် ပိတ်သွားမယ်။
      toggleSidebar();

      // e.preventDefault() ကို မထည့်ထားတဲ့အတွက်၊
      // Link ရဲ့ မူရင်းလုပ်ဆောင်ချက်အတိုင်း Page ကို ဆက်သွားပါလိမ့်မယ်။
   };

   return (
      <SidebarMenuItem>
         <SidebarMenuButton asChild>
            <a
               href={item.url}
               className="flex items-center gap-2"
               onClick={handleClick} // 👈 ဤနေရာတွင် Toggle Function ကို ချိတ်ဆက်လိုက်သည်။
            >
               <item.icon size={20} />
               <span>{item.title}</span>
            </a>
         </SidebarMenuButton>
      </SidebarMenuItem>
   );
}

export default function MySidebar() {
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
                     {menuItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                           <SidebarMenuButton asChild>
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
            <div  className="flex items-center gap-2 justify-center">
               <CircleUser />
               <div className="group-data-[collapsible=icon]:hidden">Signed in as <strong>User</strong></div>
            </div>
         </SidebarFooter>
      </Sidebar>
   );
}
