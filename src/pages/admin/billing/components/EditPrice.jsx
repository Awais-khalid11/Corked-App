import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Editprice = () => {
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [targetAudience, setTargetAudience] = useState("Wineries");
  const [billingType, setBillingType] = useState("Monthly");
  const navigate = useNavigate();

  const features = [
    "Access to promotions",
    "Benchmarking tools",
    "Wine club analytics",
    "React/comment on logs",
    "Export tools",
    "AI recommendations",
    "Featured placements",
  ];

  const addons = [
    "Feature a Wine",
    "Benchmark Report",
    "Feature Winery Regionally",
    "National Explore Tab Feature",
    "Always-On Featured Winery",
  ];

  const toggleFeature = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((item) => item !== feature)
        : [...prev, feature]
    );
  };

  const toggleAddon = (addon) => {
    setSelectedAddons((prev) =>
      prev.includes(addon)
        ? prev.filter((item) => item !== addon)
        : [...prev, addon]
    );
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col items-start gap-5 p-5 rounded-[12px] bg-white">
        <h1 className="text-xl font-semibold text-black flex items-center gap-2">
          <ArrowLeft
            className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800"
            onClick={() => navigate(-1)} // Added navigation here
          />
          Edit Pricing Plan
        </h1>
      </div>

      {/* Form */}
      <div className="bg-white rounded-[12px] p-6 border border-gray-200">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Plan Name */}
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Plan Name:<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder='e.g., "VIP Monthly" / "Premium Winery Tier"'
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
            />
          </div>

          {/* Target Audience */}
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Target Audience:<span className="text-red-500">*</span>
            </label>
            <select
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
            >
              <option>Wineries</option>
              <option>Distributors</option>
              <option>Retailers</option>
            </select>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-black mb-2">
              Plan Description:<span className="text-red-500">*</span>
            </label>
            <textarea
              rows={2}
              placeholder="Brief summary of what this plan offers"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
            />
          </div>

          {/* Plan Features */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-black mb-2">
              Plan Features (Multi-select):
            </label>
            <div className="flex flex-wrap gap-4">
              {features.map((feature) => (
                <label key={feature} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(feature)}
                    onChange={() => toggleFeature(feature)}
                    className="accent-black"
                  />
                  {feature}
                </label>
              ))}
            </div>
          </div>

          {/* Billing Type */}
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Billing Type<span className="text-red-500">*</span>
            </label>
            <select
              value={billingType}
              onChange={(e) => setBillingType(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
            >
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Price:<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g., $4.99 /month or $149 /year"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
            />
          </div>


          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-black mb-2">
              Tags/Label:<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder='e.g., "Best Value", "Starter", "Featured"'
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
            />
          </div>

          {/* Add-Ons */}


          {/* Buttons */}
          <div className="md:col-span-2 flex gap-4 pt-2">
            <button
              type="submit"
              className="w-[161px] h-[42px] px-[13px] py-[8px] flex justify-center items-center gap-[5px] rounded-[12px] bg-[#252525] text-white text-sm font-medium"
            >
              Create Plan
            </button>
            <button
              type="button"
              className="w-[161px] h-[42px] px-[13px] py-[8px] flex justify-center items-center gap-[5px] rounded-[12px] border border-gray-300 text-black text-sm font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Editprice;