import { SyntheticEvent, useState } from "react";
import "./index.css";

export default function Statistics() {
  const [isError, setIsError] = useState<boolean>(false);
  function handleError(e: SyntheticEvent) {
    setIsError(true);
    console.log("enter");
    console.log(e);
  }

  return (
    <>
      {isError ?
        (

          <div className="error-box">
            <div className="face2">
              <div className="eye"></div>
              <div className="eye right"></div>
              <div className="mouth sad"></div>
            </div>
            <div className="shadow move"></div>
            <div className="message">
              <p className="alert">Oops!</p>
              <p className="info">Statistics should be here, but it seems that your network is not good enough. Try using VPN if you are in China.</p>
            </div>
            {/* <button className="button-box"><h1 className="red">try again</h1></button> */}
          </div>

        ) :
        (
          <div onError={handleError} className="statistics">
            <img onError={handleError} src="https://github-readme-streak-stats.herokuapp.com/?user=S-N-O-R-L-A-X&theme=dark&hide_border=true" />
            <img onError={handleError} src="https://github-readme-stats.vercel.app/api?username=S-N-O-R-L-A-X&hide_title=true&hide_border=true&show_icons=trueline_height=21&text_color=000&icon_color=000&bg_color=0,ea6161,ffc64d,fffc4d,52fa5a&theme=graywhite"></img>
          </div>
        )
      }


    </>
  )
}