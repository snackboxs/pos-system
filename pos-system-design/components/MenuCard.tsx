import OrderList from "./OrderList"

export default function MenuCard() {
   return (
      // className="fixed flex flex-col right-4 top-4 bottom-4 bg-white w-80 rounded-2xl shadow-lg overflow-hidden"
      <div
         className="sticky right-0 flex flex-col top-4 bg-white w-[350px] rounded-2xl shadow-lg overflow-hidden"
         style={{ height: "calc(100vh - 2rem)" }}
      >
         <OrderList />
         {/* <div className="p-5">
            <h1>Sort By</h1>
         </div> */}
      </div>
   );
}
