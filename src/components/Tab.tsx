import React from "react";
import { Tab } from "semantic-ui-react";
import AddLink from "./AddLink";
import AddHistories from "./AddHistories";
import DisplayLinks from "./DisplayLinks";
import DisplayHistories from "./DisplayHistories";

const panes = [
  {
    menuItem: "Links",
    render: () => (
      <Tab.Pane>
        <DisplayLinks />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Histories",
    render: () => (
      <Tab.Pane>
        <DisplayHistories />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Add Link",
    render: () => (
      <Tab.Pane>
        <AddLink />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Add Bookmarks Url",
    render: () => (
      <Tab.Pane>
        <AddHistories />
      </Tab.Pane>
    ),
  },
];

const TabMenu = () => (
  <Tab panes={panes} menu={{ fluid: true, vertical: true, tabular: true }} />
);

export default TabMenu;
