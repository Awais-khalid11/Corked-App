import React from 'react'
import Arrowleft from "../../../../public/assets/icons/arrow-left.svg";
import { useNavigate } from "react-router-dom";


const DetailHeader = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-wrap  bg-white justify-between rounded-[12px] py-5 px-4 mb-5 items-center">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="flex  flex-wrap  gap-3 cursor-pointer"
          >
            <img src={Arrowleft} alt="Arrow left" />
            <h2 className="font-bold text-[20px] leading-[1.2] text-[rgba(37,37,37,1)]">
              Edit Wine Detail Page 
            </h2>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetailHeader
