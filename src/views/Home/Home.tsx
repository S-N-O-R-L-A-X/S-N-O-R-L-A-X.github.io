import Quote from "../../components/Quote/Quote";
import Profile from "../../components/Profile/Profile";
export default function Home() {
  return (
    <div>
      <div className="quote"><Quote /></div>
      <div>cards</div>
      <div><Profile /></div>
    </div>
  )
}