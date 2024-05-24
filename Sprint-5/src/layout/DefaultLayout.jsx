import { Outlet } from "react-router-dom";
import { Header } from "../component/Header";

export const DefaultLayout = () => {
  return (
   <>
    <Header/>
    <Outlet/>
   </>
  )
}