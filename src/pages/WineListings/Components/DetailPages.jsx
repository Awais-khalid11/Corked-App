import React, { useState } from "react";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import UploadImage from "../../../components/UploadImages";
import DetailHeader from "./DetailHeader";
import { Link } from "react-router-dom";

const DetailPages = () => {
  const [wineType, setWineType] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  return (
    <div>
      <DetailHeader />

      <div className="bg-white rounded-[12px] p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-5 mb-5">
          <div className="w-full md:w-1/3">
            <Input
              inputLabel="Wine Name"
              inputPlaceholder="e.g., Cabernet Franc Reserve"
              inputId="wine-name"
            />
          </div>
          <div className="w-full md:w-1/3">
            <Input
              inputLabel="Vintage"
              inputPlaceholder="e.g., 2022"
              inputId="vintage"
            />
          </div>
          <div className="w-full md:w-1/3">
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Wine Type
            </label>
            <select
              id="wine-type"
              value={wineType}
              onChange={(e) => setWineType(e.target.value)}
              className={`w-full rounded-[12px] border border-gray-300 py-[11px] px-4 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                wineType ? "text-black" : "text-gray-400"
              }`}
            >
              <option value="" disabled hidden>
                Red
              </option>
              {["Red", "White", "Rosé", "Sparkling"].map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 mb-5">
          <div className="w-full md:w-1/2">
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Country
            </label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className={`w-full rounded-[12px] border border-gray-300 py-[11px] px-4 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                country ? "text-black" : "text-gray-400"
              }`}
            >
              <option value="" disabled hidden>
                United States
              </option>
              {["USA", "France", "Italy", "Spain"].map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-1/2">
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Region
            </label>
            <select
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className={`w-full rounded-[12px] border border-gray-300 py-[11px] px-4 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                region ? "text-black" : "text-gray-400"
              }`}
            >
              <option value="" disabled hidden>
                California
              </option>
              {["Napa", "Sonoma", "Paso Robles", "Central Coast"].map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <h5 className="mb-2 font-medium">Tasting Notes</h5>
          <div className="flex flex-wrap gap-4">
            {["Fruity", "Dry", "Smoky", "Medium Tannin", "Citrus", "Sweet"].map(
              (note, i) => (
                <div className="flex items-center gap-2" key={i}>
                  <input type="checkbox" id={`checkid${i}`} value={note} />
                  <label htmlFor={`checkid${i}`}>{note}</label>
                </div>
              )
            )}
          </div>
        </div>

        <div className="my-5">
          <TextArea
            areaId="optional-notes"
            areaPlaceholder="Separate Note to add by winery..."
            areaLabel="Tasting Notes (Optional)"
          />
        </div>
        <div className="my-5">
          <TextArea
            areaId="short-desc"
            areaPlaceholder="A bold red with hints of black cherry, tobacco, and cocoa."
            areaLabel="Short Description"
          />
        </div>

        <div className="my-5">
          <UploadImage />
        </div>

        <div className="text-center md:text-left">
          <button className="bg-black rounded-[12px] text-white font-semibold text-sm py-[11px] px-10 cursor-pointer w-full md:w-auto">
            Publish Wine
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPages;
