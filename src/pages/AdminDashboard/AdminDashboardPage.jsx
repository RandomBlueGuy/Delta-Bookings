import React from "react";
import AdminDashboard from "./AdminDashboard";
import Page404 from '../404/Page404';

function AdminDashBoardPage({ role }) {
  return role === "Admin" ? (
    <div>
      <main className="Dashboard-ctn">
        <AdminDashboard />
      </main>
    </div>
  ) : (
    <Page404 />
  );
}
export default AdminDashBoardPage;
