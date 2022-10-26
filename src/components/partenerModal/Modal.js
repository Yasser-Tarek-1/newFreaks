import React from 'react'
import "./modal.css"

const Overlay = ({ form }) => {
  return (
    <div className='overlay'>{form}</div>
  )
}

const Modal = ({ children, onSetModal }) => {
  return (
    <>
      <div className='modal' onClick={() => onSetModal(false)}></div>
      <Overlay form={children} />
    </>
  )
}

export default Modal