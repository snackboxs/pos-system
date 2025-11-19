import MyCard from "./MyCard";
import { productData } from "../src/features/data/dataSlice";
import { useSelector } from "react-redux";

export default function CardContainer() {
   const datas = useSelector(productData);

   return (
      <div className="mt-5 grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 flex-1">
         {datas.map((data) => (
            <MyCard key={data.id} data={data} />
         ))}
      </div>
   );
}
