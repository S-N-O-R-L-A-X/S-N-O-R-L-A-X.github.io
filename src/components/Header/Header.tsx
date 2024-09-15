import { MoneyButton } from "artistic-components";
import Octocat from "./Octocat";
import { FlexBox } from "@ui5/webcomponents-react";
import SponsorDialog from "../SponsorDialog/SponsorDialog";
import { useState } from "react";

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
        <MoneyButton style={{ "margin": "1rem" }} onClick={clickHandler}> Sponsor me </MoneyButton>
        <Octocat />
      </FlexBox>
      <SponsorDialog open={isDialogOpen} closeHandler={() => { setIsDialogOpen(false) }} />
    </>
  )
}