import "./index.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Home from "../Home/Home";

export default function Layout() {
  return (
    <div>
      <div className="aside"><Sidebar /></div>
      <div className="header"><Header /></div>
      <div className="content"><Home /></div>
    </div>
  );
}