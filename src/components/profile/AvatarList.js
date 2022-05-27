import React from "react";
import UserIcon from "../common/UserIcon";

function AvatarList() {
  return (
    <div className="pt-1 mb-3">
      <UserIcon
        src="https://images.pexels.com/photos/654696/pexels-photo-654696.jpeg"
        size="32"
        border="2"
      />
      <span className="-ms-2">
        <UserIcon
          src="https://images.pexels.com/photos/5193860/pexels-photo-5193860.png"
          size="32"
          border="2"
        />
      </span>
      <span className="-ms-2">
        <UserIcon
          src="https://images.pexels.com/photos/6986009/pexels-photo-6986009.jpeg"
          size="32"
          border="2"
        />
      </span>
      <span className="-ms-2">
        <UserIcon
          src="https://images.unsplash.com/photo-1510597026538-da2e86b8588a"
          size="32"
          border="2"
        />
      </span>
      <span className="-ms-2">
        <UserIcon
          src="https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9"
          size="32"
          border="2"
        />
      </span>
      <span className="-ms-2">
        <UserIcon
          src="https://images.unsplash.com/photo-1599460546755-ec4b6b7132a8"
          size="32"
          border="2"
        />
      </span>
      <span className="-ms-2">
        <UserIcon
          src="https://images.unsplash.com/photo-1608109741046-0f246ffe4b9b"
          size="32"
          border="2"
        />
      </span>
      <span className="-ms-2">
        <UserIcon
          src="https://images.unsplash.com/photo-1570752321219-41822a21a761"
          size="32"
          border="2"
        />
      </span>
    </div>
  );
}

export default AvatarList;
