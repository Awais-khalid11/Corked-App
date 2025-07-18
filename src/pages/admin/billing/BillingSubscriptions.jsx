import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Button from "../../../components/Button";
import { ArrowLeft } from 'lucide-react';

const BillingSubscriptions = () => {
  const [activeTab, setActiveTab] = useState('user');
  const [selectedTier, setSelectedTier] = useState('free');
  const [billingCycles, setBillingCycles] = useState({
    vip: 'monthly',
    elite: 'monthly',
  });

  const handleBillingToggle = (tier) => {
    setBillingCycles((prev) => ({
      ...prev,
      [tier]: prev[tier] === 'monthly' ? 'yearly' : 'monthly',
    }));
  };

const renderToggle = (tier, options = {}) => {
  const {
    bgColor = 'bg-[#F1DC83] bg-opacity-30',
    thumbColor = 'bg-white',
    textColor = 'text-white'
  } = options;

  return (
    <div className="flex items-center gap-3 mb-4">
      <span className={`text-sm ${textColor}`}>Monthly</span>
      <div
        onClick={(e) => {
          e.stopPropagation();
          handleBillingToggle(tier);
        }}
        className={`relative w-12 h-6 ${bgColor} rounded-full cursor-pointer`}
      >
        <div
          className={`absolute top-1 w-4 h-4 ${thumbColor} rounded-full shadow-md transition-transform duration-200 ${
            billingCycles[tier] === 'yearly' ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </div>
      <span className={`text-sm ${textColor}`}>Yearly</span>
    </div>
  );
};

  const userSubscriptionPlans = [
    {
      key: 'free',
      title: 'Free Plan',
      status: 'Already Activated',
      price: '$0',
      period: 'month',
      description: 'Wine lovers just getting started.',
      bg: 'bg-white',
      textColor: 'text-black',
      features: [
        'Log & rate wines (photo, notes, barcode)',
        'Earn collectible Corks (badges) & leaderboards',
        'Explore wineries via interactive map',
        'Send reactions & a limited set of Sipbacks',
        'Browse the wine marketplace & Bottle Swap',
      ],
      button: 'Start Free 14-Day Trial',
      buttonColor: 'bg-black text-white',
      showToggle: false,
    },
    {
      key: 'vip',
      title: 'VIP Plan',
      price: billingCycles.vip === 'monthly' ? '$9.99' : '$99.99',
      period: 'month',
      description: 'For wine drinkers who want smarter suggestions and more fun.',
      bg: 'bg-gradient-to-b from-[#B16229] to-[#51111D]',
      textColor: 'text-white',
      features: [
        'Everything in Free',
        'Full access to AI wine recommendations',
        'Simple food pairing suggestions based on the wine',
        'Unlock all Sipback categories & auto-comments',
        'Free shipping on select partner offers',
        'Enhanced visibility in Bottle Swaps'
      ],
      button: '👑 Upgrade Now',
      buttonColor: 'bg-white text-black',
      showToggle: true,
    },
    {
      key: 'elite',
      title: 'Elite Collector',
      price: billingCycles.elite === 'monthly' ? '$24.99' : '$249.99',
      period: 'month',
      description: 'Serious collectors and cellar warriors.',
      bg: 'bg-white',
      textColor: 'text-black',
      features: [
        'Everything in VIP',
        '2 free blind tasting kits per month',
        'Advanced wine analytics & cellar insights',
        'Early access to rare wine drops',
        'Elite concierge for cellar planning & sourcing',
        'Earn 3x Corked Points',
        'Lower fees & faster matching in Bottle Swap',
        'VIP invites to ultra-rare tastings & events'
      ],
      button: '👑 Upgrade Plan',
      buttonColor: 'bg-black text-white',
      showToggle: true,
    },
  ];

  return (
    <div className="space-y-5  min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 p-5 rounded-[12px] bg-white max-w-6xl mx-auto">
        <h1 className="text-xl font-semibold text-black flex items-center gap-2">
          <ArrowLeft className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
          Billing and Subscriptions
        </h1>
        <button
          onClick={() => console.log("Create pricing plan clicked")}
          className="focus:outline-none"
        >
          <Button buttonIcon="/assets/icons/add-circle.svg" buttonText="Create A Pricing Plan" />
        </button>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto">
        <div className="flex border-b border-gray-200 bg-white rounded-t-[12px]">
          <button
            onClick={() => setActiveTab('user')}
            className={`px-6 py-3 text-sm font-medium border-b-2 ${
              activeTab === 'user'
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            User's Subscription Plan
          </button>
          <button
            onClick={() => setActiveTab('winery')}
            className={`px-6 py-3 text-sm font-medium border-b-2 ${
              activeTab === 'winery'
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Winery's Subscription Plan
          </button>
          
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-b-[12px] p-6">
          {activeTab === 'user' && (
            <div className="flex justify-end mb-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit Plan
              </button>
            </div>
          )}

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {userSubscriptionPlans.map((tier) => (
              <div
                key={tier.key}
                className={`border rounded-[15px] p-6 shadow-sm transition-all cursor-pointer flex flex-col justify-between h-full ${tier.bg} ${
                  selectedTier === tier.key ? '' : 'border-gray-200'
                }`}
                onClick={() => setSelectedTier(tier.key)}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className={`text-lg font-semibold ${tier.textColor}`}>
                      {tier.title}
                    </h2>
                    {/* <div
                      className={`w-6 h-6 border-2 rounded-full flex items-center justify-center ${
                        selectedTier === tier.key
                          ? 'border-blue-500'
                          : 'border-gray-400'
                      }`}
                    >
                      {selectedTier === tier.key && (
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      )}
                    </div> */}
                  </div>

                  {tier.status && (
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3">
                      {tier.status}
                    </span>
                  )}

                  <p className={`text-sm mb-4 ${tier.textColor === 'text-white' ? 'text-white text-opacity-80' : 'text-gray-500'}`}>
                    {tier.description}
                  </p>

                  {tier.showToggle && (
  tier.key === 'vip'
    ? renderToggle(tier.key, {
        bgColor: 'bg-[#F1DC83] bg-opacity-30',
        thumbColor: 'bg-white',
        textColor: 'text-white',
      })
    : renderToggle(tier.key, {
        bgColor: 'bg-gray-800 bg-opacity-40',
        thumbColor: 'bg-white',
        textColor: 'text-black',
      })
)}


                  <div className={`text-3xl font-bold mb-1 ${tier.textColor}`}>
                    {tier.price}
                  </div>
                  <div className={`text-sm mb-4 ${tier.textColor === 'text-white' ? 'text-white text-opacity-80' : 'text-gray-500'}`}>
                    /{tier.period}
                  </div>

                  <p className={`font-medium text-sm mb-3 ${tier.textColor}`}>
                    {tier.key === 'vip' ? 'Includes all Free features, plus:' : tier.key === 'elite' ? 'Features includes:' : 'Trial includes:'}
                  </p>
                  <ul className="space-y-2">
                    {tier.features.map((feature, index) => (
                      <li
                        key={index}
                        className={`flex items-start gap-2 text-sm ${
                          tier.textColor === 'text-white'
                            ? 'text-white'
                            : 'text-gray-700'
                        }`}
                      >
                        <Check className={`w-4 h-4 mt-0.5 ${
                          tier.textColor === 'text-white' ? 'text-white' : 'text-green-500'
                        }`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full mt-6 py-2 rounded-md font-medium text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90 ${tier.buttonColor}`}
                >
                  {tier.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingSubscriptions;