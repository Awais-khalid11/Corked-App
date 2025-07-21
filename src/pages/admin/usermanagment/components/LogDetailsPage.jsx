import { MdLocationOn } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import BasicTable from "../../../../components/BasicTable";
import { FiEdit, FiTrash2, FiArrowLeft } from "react-icons/fi";
import { useNavigate, useParams, Link } from "react-router-dom";
import wine1Image from "../../../../../public/assets/images/wine1.png";
import wine2Image from "../../../../../public/assets/images/wine2.png";
import wine3Image from "../../../../../public/assets/images/wine3.png";
import userAvatarCody from "../../../../../public/assets/images/hotelimg.png";
import userAvatarRobert from "../../../../../public/assets/images/hotelimg.png";
import userAvatarKathryn from "../../../../../public/assets/images/hotelimg.png";
import userAvatarSavannah from "../../../../../public/assets/images/hotelimg.png";

const LogDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [logData, setLogData] = useState(null);
  const [activeTab, setActiveTab] = useState("sipbacks");

  const feedLogData = [
    {
      ID: "210",
      wineName: "Domaine Tempier Bandol Rouge 2020",
      wineryName: "Silver Oak Napa Valley",
      wineType: "Red",
      loggedOn: "12/06/2025",
      location: "Onsite (Silver Oak)",
      rating: 4.3,
      photoUploaded: "wine.jpg",
      comment: "Smooth and bold. New favorite.",
      tastingNotes: [
        { icon: "🍓", text: "Fruity" },
        { icon: "💨", text: "Dry" },
        { icon: "♨", text: "Smoky" },
        { icon: "🍶", text: "Medium Tannin" },
        { icon: "🍬", text: "Sweet" },
        { icon: "🍋", text: "Citrus" },
      ],
      occasions: [
        { icon: "🎉", text: "Dinner Party" },
        { icon: "🍝", text: "Pasta Night" },
        { icon: "🥂", text: "Date Night" },
      ],
      wineDetails: {
        image: "https://i.ibb.co/L84841J/image-2f40b9.png",
        description:
          "A full-bodied Cabernet Sauvignon with rich flavors of blackberry, cassis, and vanilla, complemented by well-integrated oak and smooth tannins.",
      },
    },
    {
      ID: "001",
      wineName: "Silver Oak Alexander Valley Cabernet Sauvignon",
      wineryName: "Silver Oak Winery",
      wineType: "Red Wine",
      loggedOn: "2025-07-14",
      location: "Napa Valley",
      rating: 4.5,
      vintage: 2020,
      photoUploaded: "wine1.jpg",
      tastingNotes: [
        { icon: "🍒", text: "Cherry" },
        { icon: "🍫", text: "Chocolate" },
        { icon: "🌿", text: "Herbal" },
      ],
      wineDetails: {
        image: wine1Image,
        description:
          "A full-bodied Cabernet Sauvignon with rich flavors of blackberry, cassis, and vanilla, complemented by well-integrated oak and smooth tannins.",
      },
    },
    {
      ID: "002",
      wineName: "Napa Valley Reserve Chardonnay",
      wineryName: "Napa Valley Reserve",
      wineType: "White Wine",
      loggedOn: "2025-07-15",
      location: "Napa Valley",
      rating: 4.8,
      photoUploaded: "wine2.jpg",
      vintage: 2020,
      tastingNotes: [
        { icon: "🍏", text: "Apple" },
        { icon: "🧈", text: "Buttery" },
        { icon: "🌼", text: "Floral" },
      ],
      wineDetails: {
        image: wine2Image,
        description:
          "An elegant Chardonnay with notes of tropical fruit, citrus, and a hint of oak, offering a perfect balance of richness and acidity.",
      },
    },
    {
      ID: "003",
      wineName: "Château Margaux Premier Grand Cru",
      wineryName: "Château Margaux",
      wineType: "Red Wine",
      loggedOn: "2025-07-16",
      location: "Bordeaux",
      rating: 5.0,
      photoUploaded: "wine3.jpg",
      vintage: 2020,
      tastingNotes: [
        { icon: "🖤", text: "Blackcurrant" },
        { icon: "🚬", text: "Tobacco" },
        { icon: "🍄", text: "Earthy" },
      ],
      wineDetails: {
        image: wine3Image,
        description:
          "A prestigious Bordeaux blend with exceptional complexity, featuring notes of dark fruit, leather, and spices, with a long, elegant finish.",
      },
    },
  ];

  const othersColumns = [
    {
      header: "User Names",
      accessorKey: "user",
      cell: ({ row }) => {
        const user = row.original.user;

        return (
          <div className="flex items-center gap-3">
            <img
              src={user.img}
              alt={user.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="font-medium text-sm">{user.name}</span>
              <span className="text-xs text-muted-foreground">
                {user.email}
              </span>
            </div>
          </div>
        );
      },
    },
    {
      header: "Reactions Received",
      accessorKey: "reactions",
    },
    {
      header: " Comments",
      accessorKey: "comments",
    },
  ];

  const otherData = [
    {
      user: {
        name: "Jackson Graham",
        email: "jacksongraham@gmail.com",
        img: "https://via.placeholder.com/40",
      },
      reactions: "3 (Cheers!, Slay Corked, Spilled It)",
      comments: "Bold choice!",
    },
  ];

  const commentsData = [
    {
      user: {
        name: "Cody Fisher",
        img: userAvatarCody,
      },
      time: "4 hours ago",
      comment:
        "Not usually a white wine fan, but this Chardonnay had me rethinking everything. Clean finish and citrusy magic.",
    },
    {
      user: {
        name: "Robert Fox",
        img: userAvatarRobert,
      },
      time: "4 hours ago",
      comment:
        "This Cabernet seriously overdeltivered. Pairing it with steak was a power move! fSurprisingly bold but still balanced. Definitely earned a spot on my favorites list.",
    },
    {
      user: {
        name: "Savannah Nguyen",
        img: userAvatarSavannah,
      },
      time: "4 hours ago",
      comment:
        "Spicy, bold, and just a little chaotic — like me on a Friday night ❤‍🔥🌶 This bottle was a total vibe — deep notes, smooth finish. Would 100% sip again.",
    },
    {
      user: {
        name: "Kathryn Murphy",
        img: userAvatarKathryn,
      },
      time: "4 hours ago",
      comment:
        "This Rosé felt like a beach vacation in a glass. Light, crisp, and dangerously sippable. Popped it open with friends and the cork wasn't the only thing that flew — it was a party in a glass!",
    },
  ];

  useEffect(() => {
    const foundLog = feedLogData.find((log) => log.ID === id);
    setLogData(foundLog);
  }, [id]);

  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-400 text-lg">
            ★
          </span>
        ))}
        {hasHalfStar && <span className="text-yellow-400 text-lg">½</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300 text-lg">
            ★
          </span>
        ))}
        <span className="ml-2 text-sm text-gray-600">{rating}</span>
      </div>
    );
  };

  if (!logData) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-500">Loading log details...</div>
      </div>
    );
  }

  const wineDetails = logData.wineDetails;

  return (
    <div>
      <div className="flex bg-white rounded-[12px] py-5 px-4 mb-5 items-center">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-3 cursor-pointer text-[#252525] hover:text-gray-700"
        >
          <FiArrowLeft size={24} />
          <h2 className="font-bold text-[20px] leading-[1.2]">
            #{logData.ID} - Log Details Page
          </h2>
        </button>
      </div>

      <div className="bg-white rounded-xl">
        <div className="py-5 px-4 flex flex-col md:flex-row gap-6 mb-5 pb-8 border-b border-[rgba(0,0,0,0.1)]">
          <div className="rounded-xl py-8 bg-[#FAFAF5] w-full md:w-1/3 flex justify-center items-center">
            <img
              src={wineDetails.image}
              alt={logData.wineName}
              className="object-contain h-full max-h-72"
            />
          </div>

          <div className="w-full md:w-2/3 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-[#252525]">
                {logData.wineName}
              </h2>
            </div>

            <div className="text-[16px] text-[#252525] space-y-3">
              <p className="flex items-center gap-2">
                <strong className="w-32 text-gray-700">Winery Name:</strong>
                <span>{logData.wineryName}</span>
              </p>
              <p className="flex items-center gap-2">
                <strong className="w-32 text-gray-700">Wine Type:</strong>
                <span>{logData.wineType}</span>
              </p>
              <p className="flex items-center gap-2">
                <strong className="w-32 text-gray-700">Logged On:</strong>
                <span>{logData.loggedOn}</span>
              </p>
              <p className="flex items-center gap-2">
                <strong className="w-32 text-gray-700">Location:</strong>
                <MdLocationOn className="text-gray-500" />
                <span>{logData.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <strong className="w-32 text-gray-700">Vintage: </strong>
                <span>{logData.vintage}</span>
              </p>
              <p className="flex items-center gap-2">
                <strong className="w-32 text-gray-700">Rating Given:</strong>
                <StarRating rating={logData.rating} />
              </p>
              <p className="flex items-center gap-2">
                <strong className="w-32 text-gray-700">Photo Uploaded:</strong>
                <Link
                  to={wineDetails.image}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  {logData.photoUploaded}
                </Link>
              </p>

              <p className="flex items-center gap-2 flex-wrap">
                <strong className="w-32 text-gray-700">Tasting Notes:</strong>
                <div className="flex flex-wrap gap-2">
                  {logData.tastingNotes.map((note, index) => (
                    <span
                      key={index}
                      className="bg-[#F5F5F5] px-3 py-1 rounded-full text-sm flex items-center gap-1"
                    >
                      {note.icon} {note.text}
                    </span>
                  ))}
                </div>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between py-5 px-4">
            <h3 className="text-lg font-semibold text-[#252525] mb-3">
              Your Interactions:
            </h3>
            <div className="flex gap-3">
              <button className="py-2 px-1.5 gap-1.5 rounded-xl border border-black flex items-center justify-center">
                <IoTrashOutline />
                Delete Comment
              </button>
              <button className="py-2 px-1.5 gap-1.5 rounded-xl border border-black flex items-center justify-center">
                <IoTrashOutline />
                Delete Sipback
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="">
            <BasicTable
              title=""
              data={otherData}
              columns={othersColumns}
              search={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default LogDetailsPage;