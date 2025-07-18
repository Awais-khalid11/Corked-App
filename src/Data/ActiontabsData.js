import Documents from "../../public/assets/icons/atab1.svg";
import Verify from "../../public/assets/icons/atab2.svg";
import Like from "../../public/assets/icons/actab3.svg";
import User from "../../public/assets/icons/actab4.svg";

const ActionTabsData = [
  {
    Icons: Documents,
    Title: "Export Wine Logs",
    Para: "Download full logs by date, winery, or user.",
    bgcolor: "#EDFDEE",
    
  },
  {
    Icons: Verify,
    Title: "Approve Pending Wineries",
    Para: "Review and activate new winery signups.",
    bgcolor: "#FEF2E9",
  },
  {
    Icons: Like,
    Title: "Review Flagged Content",
    Para: "Moderate reported comments, logs etc.",
    bgcolor: "#FEF2CD",
  },
  {
    Icons: User,
    Title: "Search User Profiles",
    Para: "Locate and manage user(drinker) accounts.",
    bgcolor: "#E4F4FB",
  },
];

export default ActionTabsData;