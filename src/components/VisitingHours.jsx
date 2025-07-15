import React, { useState } from "react";
import { FiClock } from "react-icons/fi";
import Input from "./Input";

const VisitingHours = () => {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const [selectedDays, setSelectedDays] = useState(["M", "T", "W", "T", "F"]);

  const toggleDay = (day, index) => {
    const fullDay = day + index; // to avoid duplicate "T"
    setSelectedDays((prev) =>
      prev.includes(fullDay)
        ? prev.filter((d) => d !== fullDay)
        : [...prev, fullDay]
    );
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-black">
        Select Visiting Hours<span className="text-red-500">*</span>
      </label>

      <div className="flex gap-2">
        {days.map((day, index) => {
          const fullDay = day + index;
          const isSelected = selectedDays.includes(fullDay);
          return (
            <button
              key={index}
              onClick={() => toggleDay(day, index)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                isSelected ? "bg-[#DEA25E]" : "bg-gray-100 text-black"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>

      <div className="flex gap-2">
      
          <Input
                inputLabel=""
                inputPlaceholder="From"
                inputId="wineName"
                inputType="text"
                icon={<FiClock />}
                  showAsterisk={false}

              />
                    
      
        <Input
                inputLabel=""
                inputPlaceholder="To"
                inputId="wineName"
                inputType="text"
                icon={<FiClock />}
                  showAsterisk={false}

              />
          
      </div>
    </div>
  );
};

export default VisitingHours;
