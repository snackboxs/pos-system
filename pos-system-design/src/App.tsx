import { useEffect } from "react";
import { useAppSelector } from "./hooks";
import { RouterProvider, Outlet } from "react-router";
import router from "./route";
import "./App.css"

function App() {
   const currentTheme = useAppSelector((state) => state.theme.currentTheme);

   useEffect(() => {
      const htmlElement = document.documentElement;

      htmlElement.classList.remove("light", "dark");

      if (currentTheme === "dark") {
         htmlElement.classList.add("dark");
      } else if (currentTheme === "light") {
         htmlElement.classList.add("light");
      }
   }, [currentTheme]);
   return <RouterProvider router={router} />;
}

export default App;
