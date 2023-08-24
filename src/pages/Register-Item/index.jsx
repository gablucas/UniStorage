import { useState } from 'react';
import Styles from './RegisterItem.module.css';
import QuantityInput from '../../components/Inputs/QuantityInput';
import MeasureSelect from '../../components/Inputs/MeasureSelect';
import PriceInput from '../../components/Inputs/PriceInput';
import ItemNameInput from '../../components/Inputs/ItemNameInput';
import HasExpirationDateCheckbox from '../../components/Inputs/HasExpirationDateCheckbox';
import ExpirationDateInput from '../../components/Inputs/ExpirationDateInput';
import FabricationDateInput from '../../components/Inputs/FabricationDateInput';
import validate from '../../helpers/validate';

const InitialValue = {itemName: '', measureUnit: 'LITRO', quantity: '', price: '', fabricationDate: '', hasExpirationDate: false,  expirationDate: ''};


const RegisterItem = () => {
  const [item, setItem] = useState(InitialValue);
  const [error, setError] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    
    if (validate(item, setError)) {
      const unistorage = JSON.parse(localStorage.getItem('unistorage')) || [];
      unistorage.push(item)

      localStorage.setItem('unistorage', JSON.stringify(unistorage));
      setItem(InitialValue);
    }
  }


  return (
    <div className={Styles.registeritem}>
      <h1>Cadastrar item</h1>

      <form onSubmit={handleSubmit}>
        <ItemNameInput item={item} setItem={setItem} error={error} />
        <MeasureSelect item={item} setItem={setItem} />
        <QuantityInput item={item} setItem={setItem} error={error} />
        <PriceInput item={item} setItem={setItem} error={error} />
        <FabricationDateInput item={item} setItem={setItem} error={error} />
        <HasExpirationDateCheckbox item={item} setItem={setItem} />
        <ExpirationDateInput item={item} setItem={setItem} error={error} />
        <button type='submit' className={Styles.registerButton}>Cadastrar</button>
        <button type='button' className={Styles.cancelButton}>Cancelar</button>

      </form>
    </div>
  )
}

export default RegisterItem;