import Wine1 from "../../public/assets/images/wine1.png";
import Wine2 from "../../public/assets/images/wine2.png";
import Wine3 from "../../public/assets/images/wine3.png";
import Wine4 from "../../public/assets/images/wine4.png";

const ListingData = [
  {
    id: 1,
    wine: "Chardonnay 2022",
    image: Wine1,
    type: "Red",
    availability: "Available",
    status: "Featured",
    rating: "★★★★☆ 4.3",
    vintage: "2022",
    featured: "Yes",
    availabilityType: "On-site",
    description:
      "A rich, velvety red wine featuring bold notes of black cherry, plum, and subtle oak. Perfectly balanced with medium tannins and a smooth finish, this vintage pairs beautifully with grilled meats and aged cheeses.",
  },
  {
    id: 2,
    wine: "Napa Cabernet Reserve",
    image: Wine2,
    type: "White",
    availability: "Available",
    status: "Featured",
    rating: "★★★★☆ 4.1",
    vintage: "2021",
    featured: "No",
    availabilityType: "Online Only",
    description:
      "A crisp, elegant white wine with aromas of citrus and green apple. Refreshing acidity and a hint of minerality make it ideal for seafood dishes.",
  },
  {
    id: 3,
    wine: "Oregon Pinot Noir",
    image: Wine3,
    type: "Blue",
    availability: "Available",
    status: "Featured",
    rating: "—",
    vintage: "2020",
    featured: "Yes",
    availabilityType: "Both",
    description:
      "Delicate yet complex, this Pinot Noir offers flavors of cherry, raspberry, and a touch of spice. A graceful finish complements poultry and earthy dishes.",
  },
  {
    id: 4,
    wine: "Sparkling Rosé",
    image: Wine4,
    type: "Green",
    availability: "Available",
    status: "Featured",
    rating: "★★★★★ 4.5",
    vintage: "2023",
    featured: "Yes",
    availabilityType: "On-site",
    description:
      "Vibrant and effervescent, this sparkling rosé bursts with notes of strawberry, rose petals, and a crisp finish. Ideal for celebrations or light fare.",
  },
];

export default ListingData;
