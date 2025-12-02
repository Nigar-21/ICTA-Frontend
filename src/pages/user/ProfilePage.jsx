import React from "react";
import UserSidebar from "../../components/UserPanel/UserSidebar";
import UserContent from "../../components/UserPanel/UserContent";


export default function ProfilePage() {
  return (
    <div className="user-panel-container">
      <UserSidebar />
      <UserContent />
    </div>
  );
}
