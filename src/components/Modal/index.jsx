import Styles from './Modal.module.css';

const Modal = ({ children, setToggle }) => {

  function closeModal(e) {
    if (e.target === e.currentTarget) setToggle(false);
  }

  return (
    <div className={Styles.modal_container} onClick={closeModal}>
      <div className={Styles.modal_content}>
        {children}
      </div>
    </div>
  )
}

export default Modal;