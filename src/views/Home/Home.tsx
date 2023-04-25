import Quote from "../../components/Quote/Quote";
import Profile from "../../components/Profile/Profile";
import "./index.css"
export default function Home() {
  return (
    <div className="home">
      <div className="quote"><Quote /></div>
      <div className="wrap">
        <div className="cards">
          I wanted to put some statistics here, but I failed.

          {/* <img src="https://komarev.com/ghpvc/?username=S-N-O-R-L-A-X" />
          <img src="https://github-readme-stats.vercel.app/api?username=S-N-O-R-L-A-X&include_all_commits=true&count_private-true&custom_title=你的账号用户名'%20GitHub%20Stats&line_height=30&show_icons=true&hide_border=true&bg_color=192133&title_color=efb752&icon_color=efb752&text_color=70bed9" /> */}
        </div>
        <div className="profile"><Profile /></div>
      </div>
    </div>
  )
}