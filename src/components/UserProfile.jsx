import { Outlet } from "react-router-dom";

const UserProfile = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <Outlet />  {/* This will render the nested routes */}
    </div>
  );
};

export default UserProfile;
