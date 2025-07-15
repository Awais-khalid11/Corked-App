import React, { useState } from 'react';
import { ArrowLeft, Plus, Trash2 } from 'lucide-react';

const WineClubForm = () => {
  const [tiers, setTiers] = useState([{ id: 1, name: '', overview: '', shipmentDetails: 'disable', complimentaryTastings: 'no', tastingRoomDiscount: '', image: null }]);
  const [clubImage, setClubImage] = useState(null);

  const addTier = () => {
    const newTier = {
      id: Date.now(),
      name: '',
      overview: '',
      shipmentDetails: 'disable',
      complimentaryTastings: 'no',
      tastingRoomDiscount: '',
      image: null
    };
    setTiers([...tiers, newTier]);
  };

  const removeTier = (id) => {
    if (tiers.length > 1) {
      setTiers(tiers.filter(tier => tier.id !== id));
    }
  };

  const updateTier = (id, field, value) => {
    setTiers(tiers.map(tier => 
      tier.id === id ? { ...tier, [field]: value } : tier
    ));
  };

  const handleImageUpload = (e, tierId = null) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (tierId) {
          updateTier(tierId, 'image', e.target.result);
        } else {
          setClubImage(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const ImageUploadArea = ({ image, onUpload, id }) => (
    <div className="relative">
      <label
        htmlFor={id}
        className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
      >
        {image ? (
          <div className="relative w-full h-full">
            <img src={image} alt="Upload preview" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm16 11l-4.5-6-3 4L7 10l-4 6h16z"
                />
              </svg>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mb-3 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm16 11l-4.5-6-3 4L7 10l-4 6h16z"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 text-center">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500">PNG or JPG</p>
          </div>
        )}
        <input
          id={id}
          type="file"
          className="hidden"
          accept="image/png, image/jpeg, image/jpg"
          onChange={onUpload}
        />
      </label>
    </div>
  );

  return (
    <div className="space-y-5">
      {/* Header Box */}
      <div className="flex flex-col items-start gap-[25px] flex-1 p-5 rounded-[12px] bg-white">
        <h1 className="text-xl font-semibold text-black flex items-center gap-2">
          <ArrowLeft className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
          Wine Club Details
        </h1>
      </div>

      {/* Club-Level Fields */}
      <div className="bg-white rounded-[12px] p-6 border border-gray-200">
        <div className="mb-6">
          <h2 className="text-sm font-medium text-gray-500 mb-4">Club-Level Fields:</h2>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Club Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-black mb-2">
                Club Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue="Golden Vine Estates"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
              />
            </div>

            {/* Wine Club Overview */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-black mb-2">
                Wine club overview<span className="text-red-500">*</span>
              </label>
              <textarea
                rows={3}
                placeholder="Enter wine club overview details..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
              />
            </div>

            {/* Upload Image */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-black mb-2">
                Upload Image
              </label>
              <ImageUploadArea 
                image={clubImage} 
                onUpload={(e) => handleImageUpload(e)} 
                id="club-image" 
              />
            </div>
          </form>
        </div>
      </div>

      {/* Tier-Level Fields */}
      <div className="bg-white rounded-[12px] p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm  text-gray-500">Tier-Level Fields (repeatable):</p>
          <button
            onClick={addTier}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Tier
          </button>
        </div>

        {tiers.map((tier, index) => (
          <div key={tier.id} className="border border-gray-200 rounded-lg p-6 mb-6 last:mb-0">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-800">Tier {index + 1}</h3>
              {tiers.length > 1 && (
                <button
                  onClick={() => removeTier(tier.id)}
                  className="flex items-center gap-1 px-3 py-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Remove
                </button>
              )}
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Tier Name */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-black mb-2">
                  Tier Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter tier name"
                  value={tier.name}
                  onChange={(e) => updateTier(tier.id, 'name', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
                />
              </div>

              {/* Shipment Details */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Shipment Details<span className="text-red-500">*</span>
                </label>
                <div className="flex gap-6 mt-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`shipment-${tier.id}`}
                      value="disable"
                      checked={tier.shipmentDetails === 'disable'}
                      onChange={(e) => updateTier(tier.id, 'shipmentDetails', e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm text-black">Disable</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`shipment-${tier.id}`}
                      value="enable"
                      checked={tier.shipmentDetails === 'enable'}
                      onChange={(e) => updateTier(tier.id, 'shipmentDetails', e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm text-black">Enable</span>
                  </label>
                </div>
              </div>

              {/* Complimentary Tastings */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Complimentary Tastings or Flights?
                </label>
                <div className="flex gap-6 mt-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`tastings-${tier.id}`}
                      value="no"
                      checked={tier.complimentaryTastings === 'no'}
                      onChange={(e) => updateTier(tier.id, 'complimentaryTastings', e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm text-black">No</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`tastings-${tier.id}`}
                      value="yes"
                      checked={tier.complimentaryTastings === 'yes'}
                      onChange={(e) => updateTier(tier.id, 'complimentaryTastings', e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm text-black">Yes</span>
                  </label>
                </div>
              </div>

              {/* Tasting Room Discount */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-black mb-2">
                  Tasting Room Discount
                </label>
                <input
                  type="text"
                  placeholder="Enter details"
                  value={tier.tastingRoomDiscount}
                  onChange={(e) => updateTier(tier.id, 'tastingRoomDiscount', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
                />
              </div>

              {/* Tier Overview */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-black mb-2">
                  Tier Overview<span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Enter perks details"
                  value={tier.overview}
                  onChange={(e) => updateTier(tier.id, 'overview', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-700"
                />
              </div>

              {/* Tier Image Upload */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-black mb-2">
                  Tier Image Upload
                </label>
                <ImageUploadArea 
                  image={tier.image} 
                  onUpload={(e) => handleImageUpload(e, tier.id)} 
                  id={`tier-image-${tier.id}`} 
                />
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WineClubForm;