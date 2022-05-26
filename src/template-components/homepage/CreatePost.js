import React from "react";

function CreatePost() {
  return (
    <div className="border bg-white rounded-lg shadow-sm px-3 tw-py-3">
      <div className="d-flex space-x-2">
        <a href="/">
          <img
            src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg"
            alt="user"
            className="rounded-circle"
            height="40"
          />
        </a>
        <button
          className="btn btn-gray-200 rounded-pill text-muted flex-1 text-start"
          data-bs-toggle="modal"
          data-bs-target="#modal-post"
        >
          What's on your mind, Han?
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
