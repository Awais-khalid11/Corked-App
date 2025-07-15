import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PricingPlan = () => {
  const [selectedTier, setSelectedTier] = useState('free');
  const [billingCycles, setBillingCycles] = useState({
    standard: 'monthly',
    standardplus: 'monthly',
    enterprise: 'monthly',
  });

  const handleBillingToggle = (tier) => {
    setBillingCycles((prev) => ({
      ...prev,
      [tier]: prev[tier] === 'monthly' ? 'yearly' : 'monthly',
    }));
  };

  const renderToggle = (tier) => (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-sm">Monthly</span>
      <div
        onClick={(e) => {
          e.stopPropagation();
          handleBillingToggle(tier);
        }}
        className="relative w-12 h-6 bg-[#F1DC83] rounded-full cursor-pointer"
      >
        <div
          className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-200 ${
            billingCycles[tier] === 'yearly' ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </div>
      <span className="text-sm">Yearly</span>
    </div>
  );

  return (
    <div className="space-y-5 px-5">
      {/* Header */}
      <div className="flex flex-col items-start gap-1 p-5 rounded-[12px] bg-white max-w-6xl mx-auto">
        <h1 className="text-xl font-semibold text-black flex items-center gap-2">
          🍷 Corked Winery Pricing Tiers
        </h1>
        <p className="text-gray-600">
          All wineries get 30 days of the premium tier free when they sign up,
          no credit card required. After 30 days, they downgrade to free
          automatically or can upgrade to a paid tier with payment info.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Card Template */}
        {[
          {
            key: 'free',
            title: 'Free Tier',
            price: '$0',
            bg: 'bg-white',
            textColor: 'text-black',
            features: [
              'Create a winery profile',
              'List wines available at winery (name, label, description, pricing)',
              'Sell wine online (Corked takes a percentage of each sale)',
              'Create and list wine clubs (7% commission/month on signups)',
              'Enable wine club shipping options',
              'Access the winery dashboard to manage listings, clubs, and orders',
              'Users can toggle winery responses off if they dont want engagement',
            ],
            button: 'Start Free 14-Day Trial',
            buttonColor: 'bg-black text-white',
            showToggle: false,
          },
          {
            key: 'standard',
            title: 'Standard Tier',
            price: billingCycles.standard === 'monthly' ? '$9.99' : '$99.99',
            bg: 'bg-gradient-to-t from-[#51111D] to-[#B16229] text-white',
            textColor: 'text-white',
            features: [
              'Lower commission on wine club signups (6%/month)',
              'Access to short-term paid promotion placements',
              'Access to individual wine promotions (optional paid add-on)',
              'Access to basic user log analytics',
              'Export wine logs (manual CSV download)',
              'Engagement analytics',
              'Email support',
            ],
            button: '👑 Upgrade Now',
            buttonColor: 'bg-white text-black',
            showToggle: true,
          },
          {
            key: 'standardplus',
            title: 'Standard',
            price: billingCycles.standardplus === 'monthly' ? '$149' : '$1,499',
            bg: 'bg-white',
            textColor: 'text-black',
            features: [
              'Lower wine club commission (4%/month)',
              'Mid- and short-term paid promotion access',
              'Featured wine club placement (add-on)',
              'Advanced user log analytics',
              'Monthly benchmark insights',
              'Monthly AI recommendations',
              'Comment/react to user logs',
              'Winery comment library',
              'Free instant performance reports',
              'Subscriber and sales analytics',
              'Email and live chat support',
            ],
            button: '👑 Upgrade Now',
            buttonColor: 'bg-black text-white',
            showToggle: true,
          },
          {
            key: 'enterprise',
            title: 'Enterprise Tier',
            price: billingCycles.enterprise === 'monthly' ? '$299' : '$2,999',
            bg: 'bg-white',
            textColor: 'text-black',
            features: [
              'Lowest wine club commission (3%/month)',
              'All durations of paid promotion',
              '1 free featured wine club placement/mo',
              'Real-time benchmark tooltips',
              'Passive visitor tracking',
              'Free instant performance reports',
              'Scheduled log exports w/ filters',
            ],
            button: '👑 Upgrade Now',
            buttonColor: 'bg-black text-white',
            showToggle: true,
          },
        ].map((tier) => (
          <div
            key={tier.key}
            className={`flex-1 h-full border rounded-[15px] p-6 shadow-sm transition-all cursor-pointer flex flex-col justify-between ${tier.bg} ${
              selectedTier === tier.key ? 'border-primary border-2' : 'border-gray-300'
            }`}
            onClick={() => setSelectedTier(tier.key)}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h2 className={`text-lg font-semibold ${tier.textColor}`}>
                  {tier.title}
                </h2>
                <div
                  className={`w-6 h-6 border-2 rounded-full flex items-center justify-center ${
                    selectedTier === tier.key
                      ? 'border-primary'
                      : 'border-gray-400'
                  }`}
                >
                  {selectedTier === tier.key && (
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  )}
                </div>
              </div>

              <p className={`text-sm mb-4 ${tier.textColor === 'text-white' ? 'text-white text-opacity-80' : 'text-gray-500'}`}>
                {tier.key === 'free'
                  ? 'For wine lovers just getting started.'
                  : tier.key === 'standard'
                  ? 'For wine drinkers who want smarter suggestions and more fun.'
                  : tier.key === 'standardplus'
                  ? 'Everything in standard plus more'
                  : 'Everything in Premium, plus:'}
              </p>

              {tier.showToggle && renderToggle(tier.key)}

              <div className={`text-3xl font-bold mb-1 ${tier.textColor}`}>
                {tier.price}
              </div>
              <div className={`text-sm mb-4 ${tier.textColor === 'text-white' ? 'text-white text-opacity-80' : 'text-gray-500'}`}>
                /{billingCycles[tier.key] || 'month'}
              </div>

              <p className="font-medium text-sm mb-3">Features:</p>
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
                      tier.textColor === 'text-white' ? 'text-white' : 'text-red-500'
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`w-full mt-6 py-2 rounded-md font-medium text-sm flex items-center justify-center gap-2 ${tier.buttonColor}`}
            >
              {tier.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;
