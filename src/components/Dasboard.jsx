import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Outlet />  {/* This will render the nested routes */}
    </div>
  );
};

export default Dashboard;
