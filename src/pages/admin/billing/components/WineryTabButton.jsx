import { Check } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import React, { useState, useMemo } from 'react';
import BasicTable from "../../../../components/BasicTable";
import DropDownButton from "../../../../components/DropDownButton";

const WineryTabButton = () => {
  const [selectedTier, setSelectedTier] = useState('free');
  const navigate = useNavigate();

  // Sample data for winery plans table
  const wineryPlansData = [
    {
      id: 1,
      name: "Silver Oak Winery",
      email: "info@silveroak.com",
      image: "/assets/images/winery1.png",
      plan: "Standard Tier",
      status: "Active",
      startDate: "May 15, 2025",
      nextBillingDate: "June 15, 2025",
      trialExpiryDate: "May 30, 2025"
    },
    {
      id: 2,
      name: "Napa Valley Reserve",
      email: "contact@napavalley.com",
      image: "/assets/images/winery2.png",
      plan: "Enterprise Tier",
      status: "Active",
      startDate: "April 10, 2025",
      nextBillingDate: "July 10, 2025",
      trialExpiryDate: "April 25, 2025"
    },
    {
      id: 3,
      name: "Château Margaux",
      email: "admin@margaux.com",
      image: "/assets/images/winery3.png",
      plan: "Standard Plus",
      status: "Pending",
      startDate: "June 1, 2025",
      nextBillingDate: "July 1, 2025",
      trialExpiryDate: "June 15, 2025"
    },
    {
      id: 4,
      name: "Duckhorn Vineyards",
      email: "support@duckhorn.com",
      image: "/assets/images/winery4.png",
      plan: "Free Tier",
      status: "Expired",
      startDate: "March 5, 2025",
      nextBillingDate: "April 5, 2025",
      trialExpiryDate: "March 20, 2025"
    },
  ];

  // Table columns configuration
  const wineryPlansColumns = useMemo(
    () => [
      {
        header: "Winery Names",
        accessorKey: "name",
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <img src={row.original.image} className="w-8 h-8 rounded-full" alt={row.original.name} />
            <div>
              <div className="font-semibold text-gray-900">{row.original.name}</div>
              <div className="text-gray-500 text-sm">{row.original.email}</div>
            </div>
          </div>
        ),
      },
      {
        header: "Plan",
        accessorKey: "plan",
        cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span>
      },
      {
        header: "Status",
        accessorKey: "status",
        cell: ({ getValue }) => {
          const status = getValue();
          const statusColors = {
            'Active': 'bg-green-100 text-green-800',
            'Pending': 'bg-yellow-100 text-yellow-800',
            'Expired': 'bg-gray-100 text-gray-800'
          };
          return (
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[status]}`}>
              {status}
            </span>
          );
        }
      },
      {
        header: "Start Date",
        accessorKey: "startDate",
        cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span>
      },
      {
        header: "Next Billing Date",
        accessorKey: "nextBillingDate",
        cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span>
      },
      {
        header: "Trial Expiry Date",
        accessorKey: "trialExpiryDate",
        cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span>
      },
      {
        header: "Action",
        accessorKey: "action",
        cell: ({ row }) => {
          const [isOpen, setIsOpen] = useState(false);

          return (
            <div className="relative">
              <button
                className="text-gray-400 hover:text-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(!isOpen);
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-10">
                  <div className="py-1">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        navigate(`/dashboard/winery-details/${row.original.id}`);
                        setIsOpen(false);
                      }}
                    >
                      View Details
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        console.log('Edit clicked for:', row.original.name);
                        setIsOpen(false);
                      }}
                    >
                      Edit Plan
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      onClick={() => {
                        console.log('Cancel clicked for:', row.original.name);
                        setIsOpen(false);
                      }}
                    >
                      Cancel Plan
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        },
      },
    ],
    [navigate]
  );
  const promotionalAddonsData = [
    { id: 1, feature: "Request Instant Benchmark Report", pricing: "$29/report (Free for Premium & Enterprise)" },
    { id: 2, feature: "Feature a Wine", pricing: "$9/week or $29/month" },
    { id: 3, feature: "Feature Winery Regionally", pricing: "$19/week or $49/month" },
    { id: 4, feature: "Feature Winery Nationally", pricing: "$49/week or $149/month" },
    { id: 5, feature: "Always-On Featured Winery (National)", pricing: "$299/month (max exposure, limited availability)" },
  ];

  const promotionalAddonsColumns = useMemo(
    () => [
      {
        header: "Feature",
        accessorKey: "feature",
        cell: ({ getValue }) => <span className="text-gray-900 font-medium">{getValue()}</span>
      },
      {
        header: "Pricing",
        accessorKey: "pricing",
        cell: ({ getValue }) => <span className="text-gray-700">{getValue()}</span>
      },
    ],
    []
  );

  const wineryPricingPlans = [
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
    },
    {
      key: 'standard',
      title: 'Standard Tier',
      price: '$9.99',
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
    },
    {
      key: 'standardplus',
      title: 'Standard Plus',
      price: '$149',
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
    },
    {
      key: 'enterprise',
      title: 'Enterprise Tier',
      price: '$299',
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
    },
  ];

  return (
    <div className="space-y-6">
      {/* Pricing Cards */}
      <div className="bg-white rounded-b-[12px] p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {wineryPricingPlans.map((tier) => (
          <div
            key={tier.key}
            className={`border rounded-[15px] p-6 shadow-sm flex flex-col justify-between cursor-pointer ${tier.bg} ${selectedTier === tier.key ? 'border-primary border-2' : 'border-gray-300'
              }`}
            onClick={() => setSelectedTier(tier.key)}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h2 className={`text-lg font-semibold ${tier.textColor}`}>{tier.title}</h2>
                <div
                  className={`w-6 h-6 border-2 rounded-full flex items-center justify-center ${selectedTier === tier.key ? 'border-primary' : 'border-gray-400'
                    }`}
                >
                  {selectedTier === tier.key && (
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  )}
                </div>
              </div>

              <p
                className={`text-sm mb-4 ${tier.textColor === 'text-white' ? 'text-white text-opacity-80' : 'text-gray-500'
                  }`}
              >
                {tier.key === 'free'
                  ? 'For wine lovers just getting started.'
                  : tier.key === 'standard'
                    ? 'For wine drinkers who want smarter suggestions and more fun.'
                    : tier.key === 'standardplus'
                      ? 'Everything in standard plus more'
                      : 'Everything in Premium, plus:'}
              </p>

              <div className={`text-3xl font-bold mb-1 ${tier.textColor}`}>{tier.price}</div>
              <div
                className={`text-sm mb-4 ${tier.textColor === 'text-white' ? 'text-white text-opacity-80' : 'text-gray-500'
                  }`}
              >
                /month
              </div>

              <p className="font-medium text-sm mb-3">Features:</p>
              <ul className="space-y-2">
                {tier.features.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-2 text-sm ${tier.textColor === 'text-white' ? 'text-white' : 'text-gray-700'
                      }`}
                  >
                    <Check
                      className={`w-4 h-4 mt-0.5 ${tier.textColor === 'text-white' ? 'text-white' : 'text-red-500'
                        }`}
                    />
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
      <div className="bg-white rounded-[12px] p-6">
        <BasicTable
          title="Promotional Add-ons"
          data={promotionalAddonsData}
          columns={promotionalAddonsColumns}
          disableRowClick
          showHeader={true}
          showSearch={false}
          showPagination={false}
        />
      </div>
      {/* Winery Plans Table */}
      <div className="bg-white rounded-[12px] p-6">
        <BasicTable
          title="Wineries With Activated Plans"
          data={wineryPlansData}
          columns={wineryPlansColumns}
          disableRowClick
          dropdowns={
            <>
              <DropDownButton
                label="Plan type"
                options={["All Plans", "Free Tier", "Standard Tier", "Standard Plus", "Enterprise Tier"]}
                onSelect={(option) => console.log("Plan filter:", option)}
              />
              <DropDownButton
                label="Status"
                options={["All Status", "Active", "Pending", "Expired"]}
                onSelect={(option) => console.log("Status filter:", option)}
              />
              <DropDownButton
                label="Trial used"
                options={["All", "Used", "Not Used"]}
                onSelect={(option) => console.log("Trial filter:", option)}
              />
            </>
          }
        />
      </div>
    </div>
  );
};


export default WineryTabButton;