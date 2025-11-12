import { Button } from "../src/components/ui/button";
import {
   Card,
   CardAction,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "../src/components/ui/card";
import { Input } from "../src/components/ui/input";
import { MessageCircleMore } from "lucide-react";

export default function MyCard() {
   return (
      <Card
         className="w-50 relative transition-transform duration-300 ease-in-out h-fit
                  hover:scale-104 hover:brightness-90"
      >
         <CardHeader className="bg-gray-200 p-2">
            <img
               style={{ height: 150 }}
               className="m-auto"
               src="https://i.pinimg.com/1200x/fd/13/9a/fd139a33e90d34e523a8e5769edf18e0.jpg"
               alt="food img"
            />
         </CardHeader>
         <CardContent>
            <CardDescription>
               Lorem ipsum dolor sit amet consectetur
            </CardDescription>
            <div className="flex justify-between">
               <span>$22</span>
               <Button className="bg-white hover:bg-sidebar active:bg-green-100">
                  <MessageCircleMore className="text-black" />
               </Button>
            </div>
         </CardContent>
         <CardFooter className="w-full">
            <Button className="w-full rounded-1 cursor-pointer bg-green-100 text-green-foreground hover:bg-green/80 active:bg-green-500">
               Add
            </Button>
         </CardFooter>
      </Card>
   );
}
