import { ArrowLeft } from 'lucide-react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BadgeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [badgeData, setBadgeData] = useState(null);

  // Badge data - in a real app, this would come from an API or context
  const allBadges = [
    {
      id: "21",
      badge: {
        icon: "🏆",
        name: "Cabernet Champ",
      },
      tier: "Silver",
      unlocked: "12/05/2025",
      criteria: "Logged 10+ Cabernet Sauvignon wines",
      logs: "Log #213 (Silver Oak), Log #205 (Caymus), etc.",
      description:
        "Earned by logging and rating Cabernet Sauvignon wines. This badge tracks your exploration of one of the world's most iconic red varietals.",
      progress: {
        current: 10,
        nextTier: "Gold",
        required: 15,
        remaining: 5,
      },
    },
    {
      id: "22",
      badge: {
        icon: "🌹",
        name: "Rosé Rockstar",
      },
      tier: "Bronze",
      unlocked: "25/05/2025",
      criteria: "Logged 5+ Rosé wines",
      logs: "Log #172 (Whispering Angel), Log #165 (Miraval)",
      description:
        "Earned by logging and rating Rosé wines. This badge celebrates your appreciation for the elegant pink wines.",
      progress: {
        current: 5,
        nextTier: "Silver",
        required: 10,
        remaining: 5,
      },
    },
    {
      id: "23",
      badge: {
        icon: "🥂",
        name: "Chardonnay Queen",
      },
      tier: "Bronze",
      unlocked: "09/06/2025",
      criteria: "Logged 5+ Chardonnay wines",
      logs: "Log #151 (Duckhorn), Log #148 (La Crema)",
      description:
        "Earned by logging and rating Chardonnay wines. This badge recognizes your exploration of this versatile white wine.",
      progress: {
        current: 5,
        nextTier: "Silver",
        required: 10,
        remaining: 5,
      },
    },
    {
      id: "24",
      badge: {
        icon: "🍀",
        name: "Weekend Warrior",
      },
      tier: "Silver",
      unlocked: "22/06/2025",
      criteria: "Logged 10+ wines on weekends",
      logs: "Log #193–#200 (Saturday/Sunday entries)",
      description:
        "Earned by consistently logging wines during weekends. This badge celebrates your dedication to wine exploration during leisure time.",
      progress: {
        current: 10,
        nextTier: "Gold",
        required: 20,
        remaining: 10,
      },
    },
  ];

  // User data - in a real app, this would also come from an API or context
  const userData = {
    name: "Abdul Rehman",
    email: "abdulrehman@gmail.com",
    imageUrl: "/assets/images/jackson.png",
  };

  useEffect(() => {
    // Find the badge with matching ID
    const badge = allBadges.find((b) => b.id === id);
    setBadgeData(badge);
  }, [id]);

  if (!badgeData) {
    return (
      <div className="text-[#252525] p-4">
        <div className="flex items-center justify-center h-64">
          <p className="text-lg">Badge not found</p>
        </div>
      </div>
    );
  }

  const getTierEmoji = (tier) => {
    switch (tier.toLowerCase()) {
      case "gold":
        return "🥇";
      case "silver":
        return "🥈";
      case "bronze":
        return "🥉";
      default:
        return "🏆";
    }
  };

  return (
    <div className="text-[#252525] ">
      <div className="flex flex-wrap bg-white justify-between rounded-[12px] py-5 px-4 mb-5 items-center">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="flex flex-wrap gap-3 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
            <h2 className="font-bold text-[20px] leading-[1.2] text-[rgba(37,37,37,1)]">
              Badge Details
            </h2>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[12px] p-6">
        <div className="flex flex-wrap items-center justify-between mb-6">
          <div className="flex gap-4 items-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-3xl">
              {badgeData.badge.icon}
            </div>
            <div className="text-[#252525]">
              <h2 className="font-semibold text-lg mb-1">
                {badgeData.badge.name}
              </h2>
            </div>
          </div>
          <div>
            <button className="bg-[#B2642A] rounded-[12px] py-[11px] px-3.5 flex gap-1.5 text-white  font-semibold text-sm leading-[1.5] items-center cursor-pointer mt-2.5">
              Activate Badge
            </button>
          </div>
        </div>

        <div className="bg-[#F6F6F6] rounded-[10px] p-5 mb-6 space-y-4 text-[#252525]">
          <div className="flex gap-8 items-center">
            <p className="font-semibold">
              {getTierEmoji(badgeData.tier)} Your Tier:
            </p>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium opacity-80 ${badgeData.tier === "Gold"
                  ? "bg-yellow-100 text-yellow-800"
                  : badgeData.tier === "Silver"
                    ? "bg-gray-100 text-gray-800"
                    : "bg-orange-100 text-orange-800"
                }`}
            >
              {badgeData.tier}
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <p className="font-semibold">📅 Unlocked On:</p>
            <span className="opacity-80">{badgeData.unlocked}</span>
          </div>
        </div>

        <div className="bg-[#F6F6F6] rounded-[10px] p-5 space-y-4">
          <div>
            <h3 className="text-lg font-bold mb-2">📋 Description:</h3>
            <p className="opacity-80 leading-relaxed max-w-129">
              {badgeData.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Progress to Next Tier:</h3>
            <div className="space-y-2 ">
              <p className="font-semibol opacity-80">
                {badgeData.tier} → {badgeData.progress.nextTier}
              </p>
              <div className="space-y-1">
                <p className="">
                  ✅ You've logged: {badgeData.progress.current} wines
                </p>
                <p className="">
                  🔒 Log {badgeData.progress.remaining} more to reach{" "}
                  {badgeData.progress.nextTier} Tier
                </p>
              </div>
              {/*  */}
            </div>
          </div>
        </div>

        <div className="bg-[#F6F6F6] rounded-[10px] p-5 space-y-4 mt-5">
          <div>
            <h3 className="text-lg font-bold mb-2">How to earn a Cork Badge</h3>
            <p className="opacity-80 leading-relaxed  mb-5">
              To earn a Cork Badge, a user must meet specific logging milestones
              based on the badge category (e.g., wine type, region, behavior).
              Each badge has tiered levels like:
            </p>
            <ol className="list-disc pl-5 space-y-3.5">
              <li>
                <b>Corkboard</b> – after logging 1 relevant wine
              </li>
              <li>
                <b>Bronze</b> – after 3
              </li>
              <li>
                <b>Silver</b> – after 10
              </li>
              <li>
                <b>Gold</b> – after 15
              </li>
              <li>
                <b>Platinum</b> – after 25+
              </li>
            </ol>

            <p className="mb-5">
              Example: For the <b>“Cabernet Champ” </b>badge, a user{" "}
              <b>Corkboard</b> after logging <b>1 Cabernet wine,</b> and Silver
              after <b>logging 10</b>{" "}
            </p>
            <p>
              These thresholds vary by badge type and are detailed in the
              client’s Cork Badge document.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BadgeDetails;