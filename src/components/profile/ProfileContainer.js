import React from "react";
import CoverPhoto from "./CoverPhoto";
import ProfileDetail from "./ProfileDetail"

function ProfileContainer() {
  return (
    <div className="border border-2 shadow-sm pb-2">
      <CoverPhoto />
      <ProfileDetail />
    </div>
  );
}

export default ProfileContainer;
