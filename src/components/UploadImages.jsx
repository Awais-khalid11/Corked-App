import React, { useState, useRef } from "react";
import { FiImage } from "react-icons/fi";

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
    }
  };

  return (
    <div className="text-[#252525] font-medium text-[16px] leading-6 mb-3.5">
      <label htmlFor="image-upload">Upload Image</label>
      <div
        onClick={handleUploadClick}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className="mt-2 flex flex-col items-center justify-center gap-1 w-full h-[113px] border-2 border-dashed border-gray-300 rounded-[8px] bg-[#F9F9F9] cursor-pointer transition hover:bg-gray-100"
      >
        <FiImage className="text-gray-400 text-2xl" />
        <p className="text-[14px]">
          <span className="text-[#A74E4E] font-semibold">Click to upload</span>{" "}
          or drag and drop
        </p>
        <p className="text-[12px] text-gray-400">PNG or JPG</p>
        <input
          ref={fileInputRef}
          type="file"
          id="image-upload"
          name="image-upload"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {image && (
        <div className="mt-4 text-sm text-gray-700">
          Selected image: <span className="font-medium">{image.name}</span>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
