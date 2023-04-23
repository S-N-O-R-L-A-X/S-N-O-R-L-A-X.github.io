import "./index.css"
import Sidebar from "../../components/Sidebar/Sidebar";
export default function Layout() {
  return (
    <div>
      <div className="aside"><Sidebar /></div>
      <div className="header">snorlax's blog</div>
      <div className="content">content</div>
    </div>
  );
}