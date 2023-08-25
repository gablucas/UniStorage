import { useState } from 'react';
import DeleteIcon from '../Icons/DeleteIcon';
import DisplayMessage from '../DisplayMessage';

const DeleteItemButton = ({ id, setItems, setToggleInform }) => {
  const [toggleConfirm, setToggleConfirm] = useState(false);

  function handleDelete() {
    let unistorage = JSON.parse(localStorage.getItem('unistorage'));
    unistorage = unistorage.filter((item) => item.id !== id);
    localStorage.setItem('unistorage', JSON.stringify(unistorage));
    setItems(unistorage);
    setToggleInform(true)
  }

  return (
    <>
      <button onClick={() => setToggleConfirm(true)}><DeleteIcon /></button>
      {toggleConfirm && <DisplayMessage
                          type="confirm" 
                          message="Deseja realmente excluir este item?"
                          callback={handleDelete}
                          setToggle={setToggleConfirm}
                          /> }
    </>
  )
}

export default DeleteItemButton;