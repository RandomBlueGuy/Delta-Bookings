import React from "react";
import UserDashboard from "./UserDashboard";
import HeaderDashboard from "./HeaderDashboard";
import "./UserDashboard";

function DashBoardPage() {
  return (
    <div>
      <HeaderDashboard />
      <main className="Dashboard-ctn">
        <UserDashboard />
      </main>
    </div>
  );
}

export default DashBoardPage;
