import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function defaultLayout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
