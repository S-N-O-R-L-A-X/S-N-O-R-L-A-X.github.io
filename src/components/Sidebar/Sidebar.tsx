import { SideNavigation, SideNavigationItem, SideNavigationSubItem } from '@ui5/webcomponents-react';
import { Ui5CustomEvent, SideNavigationDomRef } from '@ui5/webcomponents-react';

import "@ui5/webcomponents-icons/dist/home";
import "@ui5/webcomponents-icons/dist/activity-2";
import "@ui5/webcomponents-icons/dist/chain-link";
import "@ui5/webcomponents-icons/dist/history";
import "./index.css";

export default function Sidebar() {
  function navigate(event: Ui5CustomEvent<SideNavigationDomRef, { item: HTMLElement; }>) {
    // if (event.detail.item.localName === "ui5-side-navigation-sub-item") {
    const path = (event.detail.item as any)["_state"].text;
    switch (path) {
      case "Bridge": window.location.pathname += `${path}`; break;
      case "leetcode": window.location.pathname += `${path}`; break;
      case "Bridge-Tools": window.location.pathname += `${path}`; break;
      case "noname extension": window.location.pathname += "noname-extension"; break;
      case "Artistic Components": window.location.pathname += "artistic-components"; break;
      default: window.location.pathname = window.location.pathname; break;
    }
    // }
  }
  return (
    <div className="sidebar">
      <SideNavigation
        style={{ width: "100%" }}
        fixedItems={<>
          <SideNavigationItem icon="chain-link" text="Useful Links" />
        </>}
        onSelectionChange={navigate}
      >
        <SideNavigationItem icon="home" text="Home" />
        <SideNavigationItem
          icon="activity-2"
          text="Other projects"
          expanded
        >
          <SideNavigationSubItem text="noname extension" />
          <SideNavigationSubItem text="Bridge" />
          <SideNavigationSubItem text="leetcode" />
          <SideNavigationSubItem text="Bridge-Tools" />
          <SideNavigationSubItem text="Artistic Components" />
        </SideNavigationItem>

      </SideNavigation>

    </div>

  )
}