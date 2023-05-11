const Sidebar = () => {
  return (
    // sidebar
    <div className="flex-1">
      {/* Top */}
      <div className="h-[50px] flex items-center justify-center bg-purple-400">
        <span>DashAdmin</span>
      </div>
      {/* Center */}
      <div>
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
        </ul>
      </div>
      {/* Bottom */}
      <div>Color Options</div>
    </div>
  );
};

export default Sidebar;
