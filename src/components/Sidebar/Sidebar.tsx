import { SideNavigation, SideNavigationItem, SideNavigationSubItem } from '@ui5/webcomponents-react';
import { Ui5CustomEvent, SideNavigationDomRef } from '@ui5/webcomponents-react';

import "@ui5/webcomponents-icons/dist/home";
import "@ui5/webcomponents-icons/dist/activity-2";
import "@ui5/webcomponents-icons/dist/chain-link";
import "@ui5/webcomponents-icons/dist/history";
import "./index.css";


export default function Sidebar() {
  function navigate(event: Ui5CustomEvent<SideNavigationDomRef, { item: HTMLElement; }>) {
    const path = (event.detail.item as any)["_state"].text;
    window.location.pathname += `${path}`;
  }
  return (
    <div className="sidebar">
      <SideNavigation
        style={{ width: "100%" }}
        fixedItems={<><SideNavigationItem icon="chain-link" text="Useful Links" />
          <SideNavigationItem icon="history" text="History" /></>}
        onSelectionChange={navigate}
      >
        <SideNavigationItem
          icon="home"
          text="Home"
        />
        <SideNavigationItem
          icon="activity-2"
          text="Other projects"
          expanded
        >
          <SideNavigationSubItem text="noname extension" />
          <SideNavigationSubItem text="Bridge" />
          <SideNavigationSubItem text="leetcode" />
          <SideNavigationSubItem text="tricks in javascript" />
        </SideNavigationItem>

      </SideNavigation>

    </div>

  )
}