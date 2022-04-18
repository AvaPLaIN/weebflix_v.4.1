import { BiHomeAlt, BiBroadcast, BiCalendar } from "react-icons/bi";

const navLinkItems = [
  {
    name: "Homepage",
    tooltip: "Homepage",
    url: "/dashboard",
    exact: true,
    Icon: BiHomeAlt,
  },
  {
    name: "Airing",
    tooltip: "Airing",
    url: "/dashboard/airing",
    exact: true,
    Icon: BiBroadcast,
  },
  {
    name: "Planing",
    tooltip: "Planing",
    url: "/dashboard/planing",
    exact: true,
    Icon: BiCalendar,
  },
];

export default navLinkItems;
