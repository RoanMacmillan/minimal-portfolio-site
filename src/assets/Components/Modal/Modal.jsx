import React from 'react'

const Modal = ({isOpen, closeModal}) => {
    if (!isOpen) return null;
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Add your modal content here */}
      </div>
    </div>
  )
}

export default Modal
