import Styles from './ItemForm.module.css';
import QuantityInput from '../Inputs/QuantityInput';
import MeasureSelect from '../Inputs/MeasureSelect';
import PriceInput from '../Inputs/PriceInput';
import ItemNameInput from '../Inputs/ItemNameInput';
import HasExpirationDateCheckbox from '../Inputs/HasExpirationDateCheckbox';
import ExpirationDateInput from '../Inputs/ExpirationDateInput';
import FabricationDateInput from '../Inputs/FabricationDateInput';

import { Link } from 'react-router-dom';


const ItemForm = ({ title, item, setItem, handleSubmit, error }) => {

  return (
    <div className={Styles.itemForm}>
      <h1>{`${title} item`}</h1>

      <form onSubmit={handleSubmit}>
        <ItemNameInput item={item} setItem={setItem} error={error} />
        <MeasureSelect item={item} setItem={setItem} />
        <QuantityInput item={item} setItem={setItem} error={error} />
        <PriceInput item={item} setItem={setItem} error={error} />
        <FabricationDateInput item={item} setItem={setItem} error={error} />
        <HasExpirationDateCheckbox item={item} setItem={setItem} />
        <ExpirationDateInput item={item} setItem={setItem} error={error} />
        <button type='submit' className={Styles.registerButton}>{title}</button>
        <Link to="/" className={Styles.cancelLink}>Cancelar</Link>
      </form>
    </div>
  )
}

export default ItemForm;