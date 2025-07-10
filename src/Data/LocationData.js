import Home from "../assets/Images/homeimg.png";
import Resturant from "../assets/Images/restaurant.png"
import Hotel from "../assets/Images/hotelimg.png"
import Airport from "../assets/Images/airportimg.png"
import Others from "../assets/Images/others.png"
const LocationData = [
  {
    id: 1,
    locationType: "Home",
    logs: 38,
    image: Home,
  },
  {
    id: 2,
    locationType: "Restaurant",
    logs: 12,
    image: Resturant,
  },
  {
    id: 3,
    locationType: "Hotel",
    logs: 9,
    image: Hotel,
  },
  {
    id: 4,
    locationType: "Airport",
    logs: 4,
    image: Airport,
  },
  {
    id: 5,
    locationType: "Other",
    logs: 21,
    image: Others,
  },
];

export default LocationData;
