import { SyntheticEvent, useEffect, useState } from "react";
import "./index.css";
import Loading from "./Loading";

export default function Statistics() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const card_links = ["https://scastiel.dev/api/image/S-N-O-R-L-A-X?removeLink"];
  // const card_links = [ "https://github-readme-streak-stats.herokuapp.com/?user=S-N-O-R-L-A-X&theme=dark&hide_border=true", "https://github-readme-stats.vercel.app/api?username=S-N-O-R-L-A-X&hide_title=true&hide_border=true&show_icons=trueline_height=21&text_color=000&icon_color=000&bg_color=0,ea6161,ffc64d,fffc4d,52fa5a&theme=graywhite"];
  function getPictures() {
    card_links.forEach((card_link) => {
      const image = new Image();
      image.src = card_link;
      image.onload = () => {
        setIsLoading(false);
      }
      image.onerror = () => {
        setIsLoading(false);
        setIsError(true);
      }
    })
  }

  function handleError(e: SyntheticEvent) {
    setIsLoading(false);
    setIsError(true);
  }

  getPictures();

  return (
    <>
      {
        isLoading ? <Loading /> : (
          isError ? (
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
          ) : (
            <div onError={handleError} onLoad={e => setIsLoading(false)} className="statistics">
              <img onError={handleError} src={card_links[0]} />
              <img onError={handleError} src={card_links[1]} />
            </div>
          )
        )

      }


    </>
  )
}