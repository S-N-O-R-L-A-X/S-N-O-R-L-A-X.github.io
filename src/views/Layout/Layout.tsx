import "./index.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <div className="aside"><Sidebar /></div>
      <div className="header"><Header /></div>
      <div className="content"><Outlet></Outlet></div>
    </div>
  );
}