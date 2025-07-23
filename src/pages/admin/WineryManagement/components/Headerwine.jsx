import React from 'react'
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';


const Headerwine = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col items-start gap-[25px] flex-1 p-5 rounded-[12px] bg-white ">
        <button onClick={()=> navigate(-1)} className="cursor-pointer">
        <h1 className="text-xl font-semibold text-black flex items-center gap-2">
          <FiArrowLeft className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
          Winery Details
        </h1>
        </button>
      </div>
    </div>
  )
}

export default Headerwine
