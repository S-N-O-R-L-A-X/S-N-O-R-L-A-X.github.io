import { MoneyButton, Octocat } from "artistic-components";
import { FlexBox } from "@ui5/webcomponents-react";
import SponsorDialog from "../SponsorDialog/SponsorDialog";
import { useState } from "react";
import "./index.css";

export default function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const clickHandler = () => {
    setIsDialogOpen(true);
  }
  return (
    <>
      <p className="marquee">
        Welcome to my site. I'm SNORLAX.
      </p>
      <FlexBox>
        <MoneyButton className="sponsor" onClick={clickHandler}> Sponsor me </MoneyButton>
        <Octocat href="https://github.com/S-N-O-R-L-A-X/S-N-O-R-L-A-X.github.io"/>
      </FlexBox>
      <SponsorDialog open={isDialogOpen} closeHandler={() => { setIsDialogOpen(false) }} />
    </>
  )
}