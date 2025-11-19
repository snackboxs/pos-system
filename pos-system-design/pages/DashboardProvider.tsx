import { createContext, useContext, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

interface DashboardContextType {
   showDataLimit: number;
   setShowDataLimit: Dispatch<SetStateAction<number>>;
}

const DashboardContext = createContext<DashboardContextType>({
   showDataLimit: 5,
   setShowDataLimit: () => {},
});

export function useDashboardContext() {
   return useContext(DashboardContext);
}

export default function DashboardProvider({
   children,
}: {
   children: React.ReactNode;
}) {
   const [showDataLimit, setShowDataLimit] = useState(5);

   return (
      <DashboardContext.Provider value={{ showDataLimit, setShowDataLimit }}>
         {children}
      </DashboardContext.Provider>
   );
}
