import React from "react";
import Modal from "bootstrap"



function ModalCreatePost() {
  return (
    <div className="modal fade" id="modal-post" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create Post</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <textarea
              className="form-control border-0 shadow-none resize-none"
              placeholder="What's on your mind, Han?"
              rows="5"
            ></textarea>
            <div
              className="d-flex flex-column align-items-center mt-3 py-3 bg-gray-100 hover-bg-gray-200 rounded-2"
              role="button"
            >
              <div className="text-center rounded-circle bg-gray-300 p-2 position-relative h-10 w-10 ">
                <i className="fa-regular fa-image position-absolute top-50 left-50 translate-middle"></i>
              </div>
              <div className="mt-1">Add Photos</div>
              <input type="file" className="d-none" />
            </div>
            <div className="pt-3">
              <button
                type="button"
                className="btn btn-primary w-100 text-3.5 fw-bold h-9 shadow-none"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCreatePost;
