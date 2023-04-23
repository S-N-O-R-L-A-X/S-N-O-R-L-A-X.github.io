import { SideNavigation, SideNavigationItem, SideNavigationSubItem } from '@ui5/webcomponents-react';

import "./index.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SideNavigation
        style={{ width: "100%" }}
        fixedItems={<><SideNavigationItem icon="chain-link" text="Useful Links" /><SideNavigationItem icon="history" text="History" /></>}
        onSelectionChange={function Ta() {}}
      >
        <SideNavigationItem
          icon="home"
          text="Home"
        />
        <SideNavigationItem
          expanded
          icon="group"
          text="People"
        >
          <SideNavigationSubItem text="From My Team" />
          <SideNavigationSubItem text="From Other Teams" />
        </SideNavigationItem>
        <SideNavigationItem
          icon="locate-me"
          selected
          text="Locations"
        />
        <SideNavigationItem
          icon="calendar"
          text="Events"
        >
          <SideNavigationSubItem text="Local" />
          <SideNavigationSubItem text="Others" />
        </SideNavigationItem>
      </SideNavigation>

    </div>

  )
}