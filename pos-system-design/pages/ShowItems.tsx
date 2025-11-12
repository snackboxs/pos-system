import CardContainer from "../components/CardContainer";
import MyPagination from "../components/MyPagination";
import Category from "../components/Category";

export default function () {
   return (
      <>
         <Category />
         <div className="mt-50"></div>
         <CardContainer />
         <div className="flex-1"></div>
         <MyPagination />
      </>
   );
}
