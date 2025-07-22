import React from "react";
import Input from "../../../components/Input";
import Selector from "../../../components/Selector";
import TextArea from "../../../components/TextArea";
import UploadImage from "../../../components/UploadImages";
import DetailHeader from "./DetailHeader";
import { Link } from "react-router-dom";

const DetailPages = () => {
  return (
    <div className="">
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
            <Selector
              selectorLabel="Wine Type"
              selectorId="wine-type"
              selectorPlaceholder="Red"
              options={["Red", "White", "Rosé", "Sparkling"]}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 mb-5">
          <div className="w-full md:w-1/2">
            <Selector
              selectorLabel="Country"
              selectorId="country"
              selectorPlaceholder="United States"
              options={["USA", "France", "Italy", "Spain"]}
            />
          </div>
          <div className="w-full md:w-1/2">
            <Selector
              selectorLabel="Region"
              selectorId="region"
              selectorPlaceholder="California"
              options={["Napa", "Sonoma", "Paso Robles", "Central Coast"]}
            />
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
          <button className="bg-black rounded-[12px] text-white font-semibold text-sm py-[11px] px-10 cursor-pointer  w-full md:w-auto">
            Publish Wine
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPages;
