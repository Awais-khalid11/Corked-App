import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FiEdit, FiTrash2, FiArrowLeft } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

import wine1Image from "../../../../../public/assets/images/wine1.png";
import wine2Image from "../../../../../public/assets/images/wine2.png";
import wine3Image from "../../../../../public/assets/images/wine3.png";

import userAvatarCody from "../../../../../public/assets/images/airportimg.png";
import userAvatarRobert from "../../../../../public/assets/images/airportimg.png";
import userAvatarSavannah from "../../../../../public/assets/images/airportimg.png";
import userAvatarKathryn from "../../../../../public/assets/images/airportimg.png";

import BasicTable from "../../../../components/BasicTable";

const LogDetails = () => {
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
      photoUploaded: "wine1.jpg",
      comment: "Classic Cabernet. Enjoyed with steak.",
      tastingNotes: [
        { icon: "🍒", text: "Cherry" },
        { icon: "🍫", text: "Chocolate" },
        { icon: "🌿", text: "Herbal" },
      ],
      occasions: [
        { icon: "🥩", text: "Steak Dinner" },
        { icon: "🥂", text: "Celebration" },
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
      comment: "Crisp and refreshing. Perfect for summer.",
      tastingNotes: [
        { icon: "🍏", text: "Apple" },
        { icon: "🧈", text: "Buttery" },
        { icon: "🌼", text: "Floral" },
      ],
      occasions: [
        { icon: "☀", text: "Summer Day" },
        { icon: "🧀", text: "Cheese Pairing" },
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
      comment: "An absolute masterpiece. Worth every penny.",
      tastingNotes: [
        { icon: "🖤", text: "Blackcurrant" },
        { icon: "🚬", text: "Tobacco" },
        { icon: "🍄", text: "Earthy" },
      ],
      occasions: [
        { icon: "👑", text: "Special Occasion" },
        { icon: "🎁", text: "Gift" },
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
      header: "Sipbacks / Comments",
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
    {
      user: {
        name: "Mark T.",
        email: "markt@email.com",
        img: "https://via.placeholder.com/40",
      },
      reactions: "1 (Emotional Support Wine)",
      comments: "Always a comfort wine 🍷",
    },
    {
      user: {
        name: "Emily Carter",
        email: "emilycarter@yahoo.com",
        img: "https://via.placeholder.com/40",
      },
      reactions: "Corked & Unhinged, Cheers!",
      comments: "Tastes like a weekend in a bottle!",
    },
    {
      user: {
        name: "Sophia Lee",
        email: "sophialee@gmail.com",
        img: "https://via.placeholder.com/40",
      },
      reactions: "2 (Grape Expectations, Uncorked Joy)",
      comments: "Perfect for cozy evenings by the fire 🔥",
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
        "Not usually a white wine fan, but this Chardonnay had me rethinking everything. Clean finish and citrusy magic.", //
    },
    {
      user: {
        name: "Robert Fox",
        img: userAvatarRobert,
      },
      time: "4 hours ago",
      comment:
        "This Cabernet seriously overdeltivered. Pairing it with steak was a power move! fSurprisingly bold but still balanced. Definitely earned a spot on my favorites list.", //
    },
    {
      user: {
        name: "Savannah Nguyen",
        img: userAvatarSavannah,
      },
      time: "4 hours ago",
      comment:
        "Spicy, bold, and just a little chaotic — like me on a Friday night ❤‍🔥🌶 This bottle was a total vibe — deep notes, smooth finish. Would 100% sip again.", //
    },
    {
      user: {
        name: "Kathryn Murphy",
        img: userAvatarKathryn,
      },
      time: "4 hours ago",
      comment:
        "This Rosé felt like a beach vacation in a glass. Light, crisp, and dangerously sippable. Popped it open with friends and the cork wasn’t the only thing that flew — it was a party in a glass!", //
    },
  ];

  useEffect(() => {
    const foundLog = feedLogData.find((log) => log.ID === id);
    setLogData(foundLog);
  }, [id]);

  if (!logData) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-500">Loading log details...</div>
      </div>
    );
  }

  const wineDetails = logData.wineDetails;
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

  return (
    <div>
      <div className="flex bg-white rounded-[12px] py-5 px-4 mb-5 items-center">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-3 cursor-pointer text-[#252525] hover:text-gray-700"
        >
          <FiArrowLeft size={24} />
          <h2 className="font-bold text-[20px] leading-[1.2]">
            #{logData.ID} - Log Details
          </h2>
        </button>
      </div>

      <div className="bg-white rounded-xl py-5 px-4 flex flex-col md:flex-row gap-6 mb-5">
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
            <button className=" border border-black rounded-[12px] p-3 flex items-center gap-2">
              <FiTrash2 size={18} />
              Delete Log
            </button>
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
            <p className="flex items-start gap-2">
              <strong className="w-32 text-gray-700">Comment:</strong>
              <span className="italic">"{logData.comment}"</span>
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
            <p className="flex items-center gap-2 flex-wrap">
              <strong className="w-32 text-gray-700">Occasions:</strong>
              <div className="flex flex-wrap gap-2">
                {logData.occasions.map((occasion, index) => (
                  <span
                    key={index}
                    className="bg-[#F5F5F5] px-3 py-1 rounded-full text-sm flex items-center gap-1"
                  >
                    {occasion.icon} {occasion.text}
                  </span>
                ))}
              </div>
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-[#252525] mb-3">
        Other Interactions:
      </h3>

      <div className="bg-white rounded-t-xl overflow-hidden ">
        <div className="flex  border-gray-200 px-4">
          <button
            className={`px-6 py-3 text-lg font-semibold ${
              activeTab === "sipbacks"
                ? "border-b-2 border-[#51111D] text-[#51111D]"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("sipbacks")}
          >
            SipBacks Reactions
          </button>
          <button
            className={`px-6 py-3 text-lg font-semibold ${
              activeTab === "comments"
                ? "border-b-2 border-[#81001E] text-[#81001E]"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("comments")}
          >
            Comments
          </button>
        </div>

        <div className="">
          {activeTab === "sipbacks" && (
            <BasicTable
              title=""
              data={otherData}
              columns={othersColumns}
              search={false}
            />
          )}

          {activeTab === "comments" && (
            <div className="space-y-6 px-4 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
              {commentsData.map((comment, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 w-full sm:max-w-[49%]"
                >
                  <img
                    src={comment.user.img}
                    alt={comment.user.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-800">
                        {comment.user.name}
                      </span>
                      <span className="text-sm text-gray-500 mr-9">
                        {comment.time}
                      </span>
                    </div>
                    <p className="bg-gray-200 p-2.5 pb-5 rounded-2xl">
                      {comment.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogDetails;