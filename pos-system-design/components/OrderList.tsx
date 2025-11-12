import { Button } from "../src/components/ui/button";
import { Card } from "../src/components/ui/card";
import {
   Item,
   ItemContent,
   ItemDescription,
   ItemGroup,
   ItemMedia,
   ItemTitle,
} from "../src/components/ui/item";

import { CreditCard, Banknote, QrCode, Quote,type LucideIcon } from "lucide-react";
import Payment from "../components/Payment"

const music = [
   {
      id: 1,
      title: "Midnight City Lights",
      artist: "$99",
      album: "Electric Nights",
      duration: "3:45",
   },
   {
      id: 2,
      title: "Coffee Shop Conversations",
      artist: "$80",
      album: "Urban Stories",
      duration: "4:05",
   },
   {
      id: 3,
      title: "Digital Rain",
      artist: "$30",
      album: "Binary Beats",
      duration: "3:30",
   },
   {
      id: 4,
      title: "Midnight City Lights",
      artist: "$99",
      album: "Electric Nights",
      duration: "3:45",
   },
   {
      id: 5,
      title: "Coffee Shop Conversations",
      artist: "$80",
      album: "Urban Stories",
      duration: "4:05",
   },
   {
      id: 6,
      title: "Digital Rain",
      artist: "$30",
      album: "Binary Beats",
      duration: "3:30",
   },
   {
      id: 7,
      title: "Midnight City Lights",
      artist: "$99",
      album: "Electric Nights",
      duration: "3:45",
   },
   {
      id: 8,
      title: "Coffee Shop Conversations",
      artist: "$80",
      album: "Urban Stories",
      duration: "4:05",
   },
   {
      id: 9,
      title: "Digital Rain",
      artist: "$30",
      album: "Binary Beats",
      duration: "3:30",
   },
];

function ItemImage() {
   return (
      <div className="flex w-full max-w-md flex-col gap-6">
         <ItemGroup className="gap-2">
            {music.map((song) => (
               <Item key={song.id} variant="outline" asChild role="listitem" className="bg-white border-none">
                  <a href="#">
                     <ItemMedia variant="image">
                        <img
                           src={`https://avatar.vercel.sh/${song.title}`}
                           alt={song.title}
                           width={32}
                           height={32}
                           className="object-cover grayscale"
                        />
                     </ItemMedia>
                     <ItemContent>
                        <ItemTitle className="line-clamp-1">
                           {song.title} -{" "}
                           <span className="text-muted-foreground">
                              {song.album}
                           </span>
                        </ItemTitle>
                        <div className="flex flex-row justify-between">
                           <ItemDescription>{song.artist}</ItemDescription>
                           <ItemDescription>{song.duration}</ItemDescription>
                        </div>
                     </ItemContent>
                  </a>
               </Item>
            ))}
         </ItemGroup>
      </div>
   );
}



export default function OrderList() {
   return(
      <>
         <h2 className="text-xl font-semibold mb-4 p-2 mt-2">Table</h2>
         <div className=" w-full p-2 flex-1 overflow-y-auto thin-scrollbar bg-gray-100">
            <ItemImage />
         </div>
         <div className=" w-full bg-transparent p-4" > 
            {/* style={{ height: 200 }} */}
            <ItemGroup className="bg-secondary rounded-xl">
               <Item>
                  <ItemContent>
                     <div className="flex justify-between">
                        <ItemDescription>Sub Total</ItemDescription>
                        <ItemDescription>$900</ItemDescription>
                     </div>
                     <div className="flex justify-between">
                        <ItemDescription>Tax</ItemDescription>
                        <ItemDescription>$30</ItemDescription>
                     </div>
                     <div className="dot-divider"></div>
                     <div className="flex justify-between">
                        <ItemTitle>Tootal Amount</ItemTitle>
                        <ItemTitle>$200</ItemTitle>
                     </div>
                  </ItemContent>
               </Item>
            </ItemGroup>
            <div className="grid grid-cols-3 gap-3 mt-3">
               <Payment />
            </div> 
            <Button className="w-full mt-5 bg-green-600 hover:bg-green-700 active:bg-green-600">Place Order</Button>
         </div>
      </>
   )
}