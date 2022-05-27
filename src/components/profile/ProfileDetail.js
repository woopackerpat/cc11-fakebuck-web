import React from "react";
import UserIcon from "../common/UserIcon";
import AvatarList from "./AvatarList";
import ModalProfile from "./ModalProfile";
import { useState } from "react";

function ProfileDetail() {
  const [open, setOpen] = useState(false);
  return (
    <div className="d-flex flex-column flex-md-row align-items-center align-items-md-stretch mx-auto px-3 max-w-266 space-x-4">
      <div className="-mt-20 -mt-md-10 z-10">
        {/* <img
          src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg"
          alt="user"
          className="rounded-circle border border-4 border-white h-42"
        /> */}
        <UserIcon
          src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg"
          size="168"
          border="4"
        />
      </div>

      <div className="mt-3 flex-grow-1 d-flex flex-column align-items-center d-md-block">
        <h2 className="fw-bold mb-0">Han So Yoon</h2>
        <span className="d-inline-block text-muted pt-1">158 Friends</span>
        <AvatarList />
      </div>

      <div className="d-flex align-items-end mb-3">
        <button className="btn btn-gray-200" onClick={() => setOpen(true)}>
          <i className="fa-solid fa-pen" /> Edit Profile
        </button>
        <ModalProfile open={open} onClose = {() => setOpen(false)}/>
      </div>
    </div>
  );
}

export default ProfileDetail;
