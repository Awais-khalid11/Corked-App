// const LocationColumn = [
//   {
//     header: "Location Type",
//     accessorKey: "locationType",
//     id: "locationType",
//     cell: ({ getValue, row }) => {
//       const locationType = getValue();
//       const image = row.image;

//       return (
//         <div className="flex items-center gap-3">
//           <img
//             src={image}
//             alt={locationType}
//             className="w-9 h-9 rounded-full object-cover"
//           />
//           <span className="text-sm font-medium text-[#252525]">
//             {locationType}
//           </span>
//         </div>
//       );
//     },
//   },
//   {
//     header: "Logs (Onsite/Offsite)",
//     accessorKey: "logs",
//     id: "logs",
//     cell: ({ getValue }) => (
//       <span className="text-sm text-[#252525]">{getValue()}</span>
//     ),
//   },
// ];

// export default LocationColumn;

const LocationColumn = [
  {
    header: "Location Type",
    accessorKey: "locationType",
    cell: ({ row }) => {
      const { locationType, image } = row.original;
      return (
        <div className="flex items-center gap-3">
          <img
            src={image}
            alt={locationType}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-[#252525]">
            {locationType}
          </span>
        </div>
      );
    },
  },
  {
    header: "Logs (Onsite/Offsite)",
    accessorKey: "logs",
    cell: ({ getValue }) => (
      <span className="text-sm text-[#252525]">{getValue()}</span>
    ),
  },
];

export default LocationColumn;
