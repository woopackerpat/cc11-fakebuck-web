import React from "react";
import UserIcon from "../common/UserIcon";
import AvatarList from "./AvatarList";
import ModalProfile from "./ModalProfile";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function ProfileDetail({ userProfile }) {
  const { profilePic, firstName, lastName, friends, friendStatus, id } =
    userProfile;

  const [open, setOpen] = useState(false);

  const { user } = useContext(AuthContext);
  let mode = "UNKNOWN";
  if (user.id === id) {
    mode = "ME";
  } else if (friendStatus) {
    if (friendStatus.status === "ACCEPTED") {
      mode = "ACCEPTED";
    } else {
      if (friendStatus.requestToId === user.id) {
        mode = "PENDING";
      } else {
        mode = "REQUESTED";
      }
    }
  }

  return (
    <div className="d-flex flex-column flex-md-row align-items-center align-items-md-stretch mx-auto px-3 max-w-266 space-x-4">
      <div className="-mt-20 -mt-md-10 z-10">
        {/* <img
          src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg"
          alt="user"
          className="rounded-circle border border-4 border-white h-42"
        /> */}
        <UserIcon src={profilePic} size="168" border="4" />
      </div>

      <div className="mt-3 flex-grow-1 d-flex flex-column align-items-center d-md-block">
        <h2 className="fw-bold mb-0">{`${firstName} ${lastName}`}</h2>
        <span className="d-inline-block text-muted pt-1">
          {friends.length} Friends
        </span>
        {friends.length > 0 && <AvatarList friends={friends} />}
      </div>

      <div className="d-flex align-items-end mb-3">
        {mode === "REQUESTED" && (
          <>
            <button className="btn btn-gray-200" onClick={() => {}}>
              <i className="fa-solid fa-user-plus" /> Cancel Request
            </button>
            <ModalProfile open={open} onClose={() => setOpen(false)} />
          </>
        )}
        {mode === "PENDING" && (
          <>
            <button className="btn btn-gray-200" onClick={() => {}}>
              <i className="fa-solid fa-user-plus" /> Confirm
            </button>
            <button className="btn btn-gray-200" onClick={() => {}}>
              <i className="fa-solid fa-trash" /> Delete
            </button>
            <ModalProfile open={open} onClose={() => setOpen(false)} />
          </>
        )}
        {mode === "UNKNOWN" && (
          <>
            <button className="btn btn-gray-200" onClick={() => {}}>
              <i className="fa-solid fa-user-plus" /> Add Friend
            </button>
            <ModalProfile open={open} onClose={() => setOpen(false)} />
          </>
        )}
        {mode === "ACCEPTED" && (
          <>
            <button className="btn btn-gray-200" onClick={() => {}}>
              <i className="fa-solid fa-trash" /> Delete Friend
            </button>
            <ModalProfile open={open} onClose={() => setOpen(false)} />
          </>
        )}
        {mode === "ME" && (
          <>
            <button className="btn btn-gray-200" onClick={() => setOpen(true)}>
              <i className="fa-solid fa-pen" /> Edit Profile
            </button>
            <ModalProfile open={open} onClose={() => setOpen(false)} />
          </>
        )}
      </div>
    </div>
  );
}

export default ProfileDetail;
