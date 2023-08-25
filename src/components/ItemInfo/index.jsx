import Styles from './ItemInfo.module.css';
import Modal from "../Modal"
import convertDate from '../../helpers/convertDate';

const ItemInfo = ({ item, setToggle }) => {

  return (
    <Modal setToggle={setToggle}>
      <div className={Styles.itemInfo}>
        <ul>
          <li><span>ID: </span>{item.id}</li>
          <li><span>Nome: </span>{item.itemName}</li>
          <li><span>Quantidade: </span> {item.quantity}</li>
          <li><span>Preço: </span>{item.price}</li>
          <li><span>Data de fabricação: </span>{convertDate(item.fabricationDate)}</li>
          <li><span>Data de validade: </span>{item.hasExpirationDate ? convertDate(item.expirationDate) : "Não possui"}</li>
        </ul>
      </div>
    </Modal>
  )
}

export default ItemInfo;