import Styles from './DisplayMessage.module.css';
import Modal from '../Modal';

const DisplayMessage = ({ type, message, callback, setToggle }) => {


  return (
    <Modal setToggle={setToggle}>
      <div className={Styles.displayMessage}>
        <p>{message}</p>
        
        <div className={Styles.buttonWrapper}>
          {type === "confirm" && (<button onClick={callback}>Deletar</button>)}
          <button onClick={() => setToggle(false)}>{type === "confirm" ? "Cancelar" : "OK"}</button>
        </div>
      </div>
    </Modal>
  )
}

export default DisplayMessage;