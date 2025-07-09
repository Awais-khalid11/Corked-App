import React from 'react'

const AnalyticsColoumn =  [
    { header: "Wine Name", accessorKey: "name", id: "name" },
    { header: "Total Reactions", accessorKey: "totalReactions", id: "totalReactions" },
    { header: "Total Comments", accessorKey: "totalComments", id: "totalComments" },
    { header: "Engagement Logs", accessorKey: "engagementLogs", id: "engagementLogs" },
    {
      header: "Avg Rating",
      accessorKey: "avgRating",
      id: "avgRating",
      cell: (info) => info.getValue().toFixed(1),
    },
  ];

export default AnalyticsColoumn
