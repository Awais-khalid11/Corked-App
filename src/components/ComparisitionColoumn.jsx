const ComparisonColumns = [
  { header: "Metric", accessorKey: "metric", id: "metric" },
  { header: "Your Winery", accessorKey: "yourWinery", id: "yourWinery" },
  { header: "Benchmark Avg", accessorKey: "benchmarkAvg", id: "benchmarkAvg" },
  {
    header: "Above/Below Avg (%)",
    accessorKey: "aboveBelow",
    id: "aboveBelow",
    cell: ({ getValue, row }) => {
      const value = getValue?.(); // use optional chaining for safety
      const isPositive = row?.isPositive; // fixed this line
      const color = isPositive ? "text-green-600" : "text-red-600";
      return <span className={color}>{value}%</span>;
    },
  },
];

export default ComparisonColumns;
