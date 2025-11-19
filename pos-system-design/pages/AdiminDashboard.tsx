import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableFooter,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import {ChevronRight, ChevronDown, ChevronUp, ChevronLeft} from "lucide-react"

const invoices = [
   {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
   },
   {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
   },
   {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
   },
   {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
   },
   {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
   },
   {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
   },
   {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
   },
];

export default function AdminDashboard() {
   return (
      <>
         <div className="flex gap-5 mt-5">
            <div className="flex-1 h-20 bg-white rounded-xl">
               <h2 className="text-center font-bold p-5">Total Sale</h2>
            </div>
            <div className="flex-1 h-20 bg-white rounded-xl">
               <h2 className="text-center font-bold p-5">Total Revenue</h2>
            </div>
            <div className="flex-1 h20 bg-white rounded-xl">
               <h2 className="text-center font-bold p-5">Total Items Sold</h2>
            </div>
         </div>
         <div className="mt-5 relative">
            <Table className="mb-5">
               <TableCaption>A list of your recent invoices.</TableCaption>
               <TableHeader>
                  <TableRow>
                     <TableHead className="w-[100px]">Invoice</TableHead>
                     <TableHead>Status</TableHead>
                     <TableHead>Method</TableHead>
                     <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {invoices.map((invoice) => (
                     <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">
                           {invoice.invoice}
                        </TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">
                           {invoice.totalAmount}
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
               <TableFooter>
                  <TableRow>
                     <TableCell colSpan={3}>Total</TableCell>
                     <TableCell className="text-right">$2,500.00</TableCell>
                  </TableRow>
               </TableFooter>
            </Table>
            <div className="absolute flex items-center bottom-0 w-full bg-white px-2 py-3">
               <span>Rows per page: </span>
               <Select>
                  <SelectTrigger className="w-fit border-none">
                     <SelectValue placeholder="5" />
                  </SelectTrigger>
                  <SelectContent className="min-w-fit">
                     <SelectItem value="light text-center">10</SelectItem>
                     <SelectItem value="dark text-center">20</SelectItem>
                     <SelectItem value="system">30</SelectItem>
                  </SelectContent>
               </Select>
               <span>1-5 of 9</span>
               <ChevronLeft />
               <ChevronRight />
            </div>
         </div>
      </>
   );
}
