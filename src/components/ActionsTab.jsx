const ActionsTab = ({ action = [] }) => {
  return (
    <div className="bg-white rounded-[12px] py-5 px-4">
      <h2 className="text-[20px] font-bold text-[#252525] leading-6 mb-6">
        Quick Actions
      </h2>
      <div className="space-y-3">
        {action.map((action, index) => (
          <div
            key={index}
            className="flex rounded-[14px] p-2.5 gap-2.5 text-[#252525] items-center"
            style={{ backgroundColor: action.bgcolor }}
          >
            <div
              className="rounded-[28px] mb-0"
              style={{ backgroundColor: action.Iconsbg }}
            >
              <img src={action.Icons} alt="Action Icon"  />
            </div>
            <div>
              <h4 className="text-[16px] font-bold mb-1">{action.Title}</h4>
              <p className="text-[12px]">{action.Para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionsTab;