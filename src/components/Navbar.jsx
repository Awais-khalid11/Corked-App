const Navbar = () => {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">👋 Welcome Back</h1>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-500">Hi</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
