import { SideNavigation, SideNavigationItem, SideNavigationSubItem } from '@ui5/webcomponents-react';
import { Ui5CustomEvent, SideNavigationDomRef } from '@ui5/webcomponents-react';

import "./index.css";


export default function Sidebar() {
  function navigate(event: Ui5CustomEvent<SideNavigationDomRef, { item: HTMLElement; }>) {
    console.log((event.detail.item as any)["_state"].text);

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
          icon="group"
          text="Other projects"
        >
          <SideNavigationSubItem text="noname extension" />
          <SideNavigationSubItem text="Bridge" />
          <SideNavigationSubItem text="leetcode" />
          <SideNavigationSubItem text="tricks in javascript" />
        </SideNavigationItem>

        <SideNavigationItem
          expanded
          icon="group"
          text="Daily"
        >
          <SideNavigationSubItem text="2023" />
        </SideNavigationItem>

      </SideNavigation>

    </div>

  )
}