import { MdLocationOn } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import BasicTable from "../../../../components/BasicTable";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate, useParams, Link } from "react-router-dom";

// Import local images
import wine1Image from "../../../../../public/assets/images/wine1.png";
import userAvatarCody from "../../../../../public/assets/images/hotelimg.png"; // Using hotelimg.png as a generic user avatar
// import userAvatarRobert from "../../../../../public/assets/images/hotelimg.png"; // Not used directly in `otherData`
// import userAvatarKathryn from "../../../../../public/assets/images/hotelimg.png"; // Not used directly in `otherData`
// import userAvatarSavannah from "../../../../../public/assets/images/hotelimg.png"; // Not used directly in `otherData`


const LogDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const feedLogData = 
    {
      wineName: `Sample Wine for ID ${id}`,
      wineryName: "Sample Winery",
      wineType: "Rose",
      loggedOn: "2025-07-23",
      location: "Virtual Tasting",
      rating: 3.8,
      vintage: 2021,
      photoUploaded: "sample-wine.jpg",
      comment: `This is a sample entry to test ID ${id}.`,
      tastingNotes: [
        { icon: "🍑", text: "Peach" },
        { icon: "🌸", text: "Floral" },
        { icon: "🍓", text: "Strawberry" },
      ],
      wineDetails: {
        image: wine1Image, // Using an existing local wine image for consistency
        description:
          "A delightful sample wine with balanced notes of fruit and floral undertones.",
      },
    }

  ;

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
      header: "Comments",
      accessorKey: "comments",
    },
  ];

  const otherData = [
    {
      user: {
        name: "Jackson Graham",
        email: "jacksongraham@gmail.com",
        img: userAvatarCody, // Changed from via.placeholder.com
      },
      reactions: "3 (Cheers!, Slay Corked, Spilled It)",
      comments: "Bold choice!",
    },
  ];

  

  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-400 text-lg">★</span>
        ))}
        {hasHalfStar && <span className="text-yellow-400 text-lg">½</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300 text-lg">★</span>
        ))}
        <span className="ml-2 text-sm text-gray-600">{rating}</span>
      </div>
    );
  };

 

const {wineDetails}=feedLogData
  return (
    <div>
      <div className="flex bg-white rounded-[12px] py-5 px-4 mb-5 items-center">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-3 text-[#252525] hover:text-gray-700"
        >
          <FiArrowLeft size={24} />
          <h2 className="font-bold text-[20px] leading-[1.2]">
            #{id} - Log Details Page
          </h2>
        </button>
      </div>

      <div className="bg-white rounded-xl">
        <div className="py-5 px-4 flex flex-col md:flex-row gap-6 mb-5 pb-8 border-b border-[rgba(0,0,0,0.1)]">
          <div className="rounded-xl py-8 bg-[#FAFAF5] w-full md:w-1/3 flex justify-center items-center">
            <img
              src={wineDetails.image}
              alt={feedLogData.wineName}
              className="object-contain h-full max-h-72"
            />
            </div>

          <div className="w-full md:w-2/3 flex flex-col text-[#252525] text-[16px] space-y-3">
            <h2 className="text-2xl font-bold mb-4">{feedLogData.wineName}</h2>
            <p><strong>Winery Name:</strong> {feedLogData.wineryName}</p>
            <p><strong>Wine Type:</strong> {feedLogData.wineType}</p>
            <p><strong>Logged On:</strong> {feedLogData.loggedOn}</p>
            <p className="flex items-center gap-2">
              <strong>Location:</strong> <MdLocationOn className="text-gray-500" /> {feedLogData.location}
            </p>
            <p><strong>Vintage:</strong> {feedLogData.vintage}</p>
            <p><strong>Rating:</strong> <StarRating rating={feedLogData.rating} /></p>
            <p>
              <strong>Photo:</strong>{" "}
              <Link to={wineDetails.image} target="_blank" className="text-blue-600 hover:underline">
                {feedLogData.photoUploaded}
              </Link>
            </p>
            <div className="flex items-start gap-2 flex-wrap">
              <strong>Tasting Notes:</strong>
              <div className="flex flex-wrap gap-2">
                {feedLogData.tastingNotes.map((note, index) => (
                  <span
                    key={index}
                    className="bg-[#F5F5F5] px-3 py-1 rounded-full text-sm flex items-center gap-1"
                  >
                    {note.icon} {note.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between py-5 px-4">
          <h3 className="text-lg font-semibold text-[#252525] mb-3">
            Your Interactions:
          </h3>
          <div className="flex gap-3">
            <button className="py-2 px-1.5 rounded-xl border border-black flex items-center gap-1.5">
              <IoTrashOutline />
              Delete Comment
            </button>
            <button className="py-2 px-1.5 rounded-xl border border-black flex items-center gap-1.5">
              <IoTrashOutline />
              Delete Sipback
            </button>
          </div>
        </div>

        <div className="px-4 pb-8">
          <BasicTable
            title=""
            data={otherData}
            columns={othersColumns}
            search={false}
            pagination={true}
          />
        </div>
      </div>
    </div>
  );
};

export default LogDetailsPage;