import Quote from "../../components/Quote/Quote";
import Profile from "../../components/Profile/Profile";
import "./index.css"
export default function Home() {
  return (
    <div className="home">
      <div className="quote"><Quote /></div>
      <div className="wrap">
        <div className="cards">cards</div>
        <div className="profile"><Profile /></div>
      </div>
    </div>
  )
}