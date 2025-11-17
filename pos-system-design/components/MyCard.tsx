// import { Button } from "../src/components/ui/button";
// import {
//    Card,
//    CardAction,
//    CardContent,
//    CardDescription,
//    CardFooter,
//    CardHeader,
//    CardTitle,
// } from "../src/components/ui/card";
// import { Input } from "../src/components/ui/input";
// import { MessageCircleMore, Edit, Plus, Minus } from "lucide-react";
// import type { RootState } from "../src/store";
// import {
//    currentItem,
//    addItem,
//    minusItem,
// } from "../src/features/itemSelected/itemSelectedSlice";
// import { useDispatch, useSelector } from "react-redux";

// export default function MyCard() {
//    const dispatch = useDispatch();
//    const count = useSelector(currentItem);
//    return (
//       <Card
//          className="w-50 relative transition-transform duration-300 ease-in-out h-fit
//                   hover:scale-104 hover:brightness-90"
//       >
//          <CardHeader className="bg-gray-200 p-2">
//             <img
//                style={{ height: 150 }}
//                className="m-auto"
//                src="https://i.pinimg.com/1200x/fd/13/9a/fd139a33e90d34e523a8e5769edf18e0.jpg"
//                alt="food img"
//             />
//          </CardHeader>
//          <CardContent>
//             <CardDescription>
//                Lorem ipsum dolor sit amet consectetur
//             </CardDescription>
//             <div className="flex justify-between">
//                <span>$22</span>
//                <CardDescription>20</CardDescription>
//             </div>
//          </CardContent>
//          <CardFooter className="w-full">
//             {/* <Button className="w-full rounded-1 cursor-pointer bg-green-100 text-green-foreground hover:bg-green/80 active:bg-green-500">
//                Edit
//             </Button> */}
//             <div className="flex w-full justify-between items-center">
//                <Button
//                   className=" rounded-1 cursor-pointer bg-green-100 text-green-foreground hover:bg-green/80 active:bg-green-500"
//                   onClick={() => {
//                      dispatch(minusItem());
//                   }}
//                >
//                   <Minus />
//                </Button>
//                <span>{count}</span>
//                <Button
//                   className="rounded-1 cursor-pointer bg-green-100 text-green-foreground hover:bg-green/80 active:bg-green-500"
//                   onClick={() => {
//                      dispatch(addItem());
//                   }}
//                >
//                   <Plus />
//                </Button>
//             </div>
//          </CardFooter>
//       </Card>
//    );
// }

// // 2062005kkzino

import { Button } from "../src/components/ui/button"; // Assuming this path is correct
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "../src/components/ui/card"; // Assuming this path is correct
import { Plus, Minus } from "lucide-react";
import {
   selectItemCount,
   changeItemCount,
} from "../src/features/itemSelected/itemSelectedSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../src/hooks";
import { useEffect, useRef, useState } from "react";

interface CartItem {
   id: string;
   name: string;
   price: number;
   description: string;
   count: number;
}

export default function MyCard({
   itemId,
   itemData,
}: {
   itemId: string;
   itemData: CartItem;
}) {
   const dispatch = useAppDispatch();
   const [isExpanded, setIsExpanded] = useState(false);
   const [isTextOverflowing, setIsTextOverflowing] = useState(false);
   const count = useAppSelector((state) => selectItemCount(state, itemId));
   const descriptionRef = useRef<HTMLDivElement>(null);
   const { name, price, description } = itemData;

   const toggleExpand = () => {
      setIsExpanded((prev) => !prev);
   };

   useEffect(() => {
      if (descriptionRef.current) {
         const element = descriptionRef.current; 
         setIsTextOverflowing(element.scrollWidth > element.clientWidth); 
      }
   }, [description]); 

   console.log(isTextOverflowing);

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
            <CardTitle>{name}</CardTitle>
            <CardDescription
               ref={descriptionRef as React.RefObject<HTMLParagraphElement>} // 💡 Update Ref Type Here
               className={isExpanded ? "whitespace-normal" : "moreicon"}
            >
               {description}
            </CardDescription>

            {/* Conditional Button Rendering is correct */}
            <button
               onClick={toggleExpand}
               className="text-blue-500 hover:text-blue-700 text-sm mt-1"
            >
               {/* {isExpanded ? "Read Less" : "Read More"} */}
               {isTextOverflowing
                  ? isExpanded
                     ? "Read Less"
                     : "Read More"
                  : ""}
            </button>
            <div className="flex justify-between mt-2">
               <span>${price}</span>
            </div>
         </CardContent>
         <CardFooter className="w-full">
            <div className="flex w-full justify-between items-center">
               {/* MINUS BUTTON */}
               <Button
                  className=" rounded-1 cursor-pointer bg-green-100 text-green-foreground hover:bg-green/80 active:bg-green-500"
                  onClick={() => {
                     dispatch(changeItemCount({ id: itemId, change: -1 }));
                  }}
                  disabled={count <= 0}
               >
                  <Minus />
               </Button>

               <span className="text-lg font-semibold">{count}</span>

               {/* PLUS BUTTON */}
               <Button
                  className="rounded-1 cursor-pointer bg-green-100 text-green-foreground hover:bg-green/80 active:bg-green-500"
                  onClick={() => {
                     dispatch(changeItemCount({ id: itemId, change: 1 }));
                  }}
               >
                  <Plus />
               </Button>
            </div>
         </CardFooter>
      </Card>
   );
}
