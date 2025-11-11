import MyCard from "./MyCard";

export default function CardContainer() {
   return (
      <div className="mt-5 grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4">
         <MyCard />
         <MyCard />
         <MyCard />
         <MyCard />
         <MyCard />
         <MyCard />
         <MyCard />
         <MyCard />
         <MyCard />
         <MyCard />
         <MyCard />
      </div>
   )
}