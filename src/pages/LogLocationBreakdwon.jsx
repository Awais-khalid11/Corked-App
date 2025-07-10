import React, { useState } from 'react';
import DropButton from '../components/DropButton';
import LogLocationTable from '../components/LogLocationTable';

const viewOptions = ["offsite", "onsite"];

const LogLocationBreakdown = () => {
  const [view, setView] = useState("offsite");

  return (
    <div className="bg-white py-5 px-4 rounded-[12px]">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
        <h1 className="text-2xl font-semibold">Log Location Breakdown</h1>

        <div className="flex gap-3 flex-wrap">
          <DropButton
            label={view}
            options={viewOptions}
            onSelect={(selected) => setView(selected)}
          />
        </div>
      </div>

      <LogLocationTable />
    </div>
  );
};

export default LogLocationBreakdown;
