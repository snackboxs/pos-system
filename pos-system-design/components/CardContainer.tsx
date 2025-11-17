// import MyCard from "./MyCard";

// export default function CardContainer() {
//    return (
//       <div className="mt-5 grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 flex-1">
//          <MyCard />
//          <MyCard />
//          <MyCard />
//          <MyCard />
//          <MyCard />
//          <MyCard />
//          <MyCard />
//          <MyCard />
//          <MyCard />
//          <MyCard />
//          <MyCard />
//       </div>
//    )
// }

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllItems } from "../src/features/itemSelected/itemSelectedSlice";
import MyCard from "./MyCard";

export default function CardContainer() {
   const items = useSelector(selectAllItems);

   return (
      <div className="mt-5 grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 flex-1">
         {items.map((item) => (
            <MyCard
               key={item.id}
               itemId={item.id}
               itemData={item}
            />
         ))}
      </div>
   );
}
