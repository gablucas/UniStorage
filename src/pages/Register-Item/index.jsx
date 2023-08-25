import { useState } from "react";
import { generateRandomID } from "../../helpers/generateRandomID";
import { getStorage } from "../../helpers/handleLocalStorage";
import validate from "../../helpers/validate";
import ItemForm from "../../components/ItemForm";

const InitialValue = {id: '', itemName: '', measureUnit: 'LITRO', quantity: '', price: '', fabricationDate: '', hasExpirationDate: false,  expirationDate: ''};

const RegisterItem = () => {
  InitialValue.id = generateRandomID();
  let unistorage = getStorage('unistorage');
  const [item, setItem] = useState(InitialValue);
  const [error, setError] = useState([])


  function handleSubmit(e) {
    e.preventDefault();
    
    if (validate(item, setError)) {
        unistorage.push(item)
        localStorage.setItem('unistorage', JSON.stringify(unistorage));
        setItem(InitialValue);
      }
    }

  return (
    <ItemForm title="Cadastrar" item={item} setItem={setItem} handleSubmit={handleSubmit} error={error} />
  )
}

export default RegisterItem;