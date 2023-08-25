import Styles from './EditItem.module.css';
import { Link, useNavigate, useParams } from "react-router-dom";
import { getStorage } from "../../helpers/handleLocalStorage";
import { useState } from "react";
import validate from "../../helpers/validate";
import ItemForm from '../../components/ItemForm';

const EditItem = () => {
  const { id } = useParams();
  let unistorage = getStorage('unistorage');
  const editItem = unistorage.find((item) => item.id === id);
  const navigate = useNavigate();
  const [item, setItem] = useState(editItem);
  const [error, setError] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    
    if (validate(item, setError)) {
      if (id) {
        unistorage = unistorage.map((itemMap) => {
          if (itemMap.id === id) {
            return item;
          }

          return itemMap;
        })

        localStorage.setItem('unistorage', JSON.stringify(unistorage));
        navigate("/");
      } 
    }
  }

  if (id && !editItem) 
  return (
    <div className={Styles.editItem}>
      <h1>Este item não existe</h1>
      <Link to="/">Voltar para lista</Link>
    </div>
  )

  return (
    <ItemForm title="Editar" item={item} setItem={setItem} handleSubmit={handleSubmit} error={error} />
  )
}

export default EditItem;