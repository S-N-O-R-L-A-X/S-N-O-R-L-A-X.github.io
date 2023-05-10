import Label from "../Label/Label";

import { Icon } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/email";
import github_mark from "../../assets/github-mark.png";

export default function Profile() {
  return (
    <>
      <Icon name="email"></Icon> snorlax.xu@outlook.com <br />
      <img src={github_mark} style={{ width: "1rem", height: "1rem" }} /> S-N-O-R-L-A-X <br />
      <Label>桥牌</Label>
      <Label>足球</Label>
      <Label>篮球</Label>
      <Label>宝可梦</Label>
      <Label>柯南</Label>
      <Label>桌游</Label>
      <Label>code</Label>
      <Label>F1</Label>
    </>
  );
}