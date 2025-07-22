import UserTick from "../../public/assets/icons/user-tick.svg"
import Status from "../../public/assets/icons/status-up.svg"
import Circle from "../../public/assets/icons/percentage-circle.svg"
import Medal from "../../public/assets/icons/medal-star.svg"

const ClubData = [
  {
    cardIcon: UserTick,
    cardNumbers: "141 active",
    cardAnalytics: "Current Subscribers",
  },
  {
    cardIcon: Status,
    cardNumbers: "+12",
    numbersAnalytics:"+in past 30 days",
    cardAnalytics: "Growth Rate",
  },
  {
    cardIcon: Circle,
    cardNumbers: "4.2%",
    numbersAnalytics:"of viewers subscribed",
    cardAnalytics: "Conversion Rate",
  },
  {
    cardIcon:Medal,
    cardNumbers: "Mixed 6",
    cardAnalytics: "Most Popular Tier",
  },
];

export default ClubData;
