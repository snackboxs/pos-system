import {
   Pagination,
   PaginationContent,
   PaginationEllipsis,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious,
} from "@/components/ui/pagination";

import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { useDashboardContext } from "../pages/DashboardProvider";

export default function MyPagination() {
   const {showDataLimit} = useDashboardContext();
   return (
      <div className="flex sticky bottom-0 shadow-xl w-full bg-white items-center">
         <Pagination>
            <PaginationContent className=" bg-white rounded-full p-3">
               <PaginationItem>
                  <PaginationPrevious href="#" />
               </PaginationItem>
               <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
               </PaginationItem>
               <PaginationItem>
                  <PaginationLink href="#" isActive>
                     2
                  </PaginationLink>
               </PaginationItem>
               <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
               </PaginationItem>
               <PaginationItem>
                  <PaginationEllipsis />
               </PaginationItem>
               <PaginationItem>
                  <PaginationNext href="#" />
               </PaginationItem>
            </PaginationContent>
         </Pagination>
         <Select>
            <SelectTrigger className="">
               <SelectValue placeholder={showDataLimit} />
            </SelectTrigger>
            <SelectContent>
               <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
               </SelectGroup>
            </SelectContent>
         </Select>
      </div>
   );
}
