import React from 'react';

const Cards = ({ data }) => {
  return (
    <div className='flex flex-wrap gap-[14px] gap-y-4'>
      {data.map((item, index) => (
        <div
          key={index}
          className='w-full sm:w-[48%] lg:w-[24%] py-5 px-4 bg-[#fff] rounded-[12px] text-[#252525]'
        >
          <div className='flex gap-[13px] items-center mb-4'>
            <div className='w-[48px] h-[48px] p-1 rounded-full bg-[#FFE9EE] flex justify-center items-center text-[23px]'>
              <img src={item.cardIcon} alt="" />
            </div>
            <div className='flex items-end gap-1.5'>
              <div>  <p className='text-[30px] font-bold leading-[38px]'>{item.cardNumbers}</p>
              <p className='leading-[1] text-[12px] font-medium'>{item.numbersAnalytics}</p>
               </div>
            
              <p className='text-[16px] font-bold'>{item.cardNumbersText || ''}</p>
            </div>
          </div>
          <div>
            <p className='font-semibold text-[16px] leading-[24px]'>
              {item.cardAnalytics}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
