import { useState, useRef, useEffect } from "react";
import { Button } from "../src/components/ui/button";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "../src/components/ui/card";
import { Plus, Minus } from "lucide-react";
import type { Data } from "@/features/data/dataSlice";
import {
   addProduct,
   cancleProduct,
   itemSelected,
} from "@/features/itemSelected/itemSelectedSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "@/features/auth/authCheck";
import { useNavigate } from "react-router-dom";

interface MyCardProps {
   data: Data;
}

export default function MyCard({ data }: MyCardProps) {
   const [count, setCount] = useState(0);
   const [isExpanded, setIsExpanded] = useState(false);
   const [isTextOverflowing, setIsTextOverflowing] = useState(false);
   const { imgurl, name, price, description, quantity } = data;
   const descriptionRef = useRef<HTMLDivElement>(null);
   const toggleExpand = () => {
      setIsExpanded((prev) => !prev);
   };
   const dispatch = useDispatch();
   const selectedItems = useSelector(itemSelected);
   const isAuth = useSelector(auth);
   const navigate = useNavigate();

   useEffect(() => {
      if (descriptionRef.current) {
         const element = descriptionRef.current;
         setIsTextOverflowing(element.scrollWidth > element.clientWidth);
      }
   }, [description]);

   return (
      <Card
         className="w-50 relative transition-transform duration-300 ease-in-out h-fit rounded-md
                  hover:scale-104 hover:brightness-90"
      >
         <CardHeader className="p-1">
            <img
               // style={{ height: 150 }}
               className="m-auto h-50 w-50 object-contain"
               src={imgurl}
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
               <CardDescription>{quantity}</CardDescription>
            </div>
         </CardContent>
         <CardFooter className="w-full">
            {isAuth && (
               <Button
                  className="w-full rounded-1 cursor-pointer bg-green-100 text-green-foreground hover:bg-green/80 active:bg-green-500"
                  onClick={() => navigate(`/edititem/${data.id}`)}
               >
                  Edit
               </Button>
            )}
            {!isAuth && (
               <div className="flex w-full justify-between items-center">
                  <Button
                     className=" rounded-1 cursor-pointer bg-green-100 text-green-foreground hover:bg-green/80 active:bg-green-500"
                     onClick={() => {
                        const newCount = Math.max(count - 1, 0);
                        setCount(newCount);
                        dispatch(
                           cancleProduct({
                              ...data,
                              selectedQuantity: newCount,
                           })
                        );
                     }}
                  >
                     <Minus />
                  </Button>
                  <Button
                     className="flex-1 mx-1 cursor-pointer"
                     variant={"secondary"}
                  >
                     {count} / Add
                  </Button>
                  <Button
                     className="rounded-1 cursor-pointer bg-green-100 text-green-foreground hover:bg-green/80 active:bg-green-500"
                     onClick={() => {
                        const newCount = Math.min(count + 1, quantity);
                        setCount(newCount);
                        dispatch(
                           addProduct({ ...data, selectedQuantity: newCount })
                        );
                     }}
                  >
                     <Plus />
                  </Button>
               </div>
            )}
         </CardFooter>
      </Card>
   );
}

// // 2062005kkzino
