import React from 'react'

function PostHeader() {
  return (
    <div className="d-flex align-items-center space-x-2">
              <a href="/">
                <img
                  src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg"
                  alt="user"
                  className="rounded-circle"
                  height="40"
                />
              </a>
              <div className="d-flex flex-column flex-fill">
                <a
                  href="/"
                  className="text-dark fw-bold no-underline hover-underline text-3.5"
                >
                  Han So Yoon
                </a>
                <small className="text-muted text-3">1h</small>
              </div>
              <button className="btn rounded-circle h-9 w-9 position-relative hover-bg-gray-200">
                <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
              </button>
            </div>
  )
}

export default PostHeader