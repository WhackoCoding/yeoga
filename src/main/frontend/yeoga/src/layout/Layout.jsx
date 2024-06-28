import Footer from "./Footer";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <Header />
      {/* {props.children} */}
      <Outlet />
      { location.pathname === "/login" || location.pathname === "/upload" ? <></> : <Footer /> }
    </>
  )
}