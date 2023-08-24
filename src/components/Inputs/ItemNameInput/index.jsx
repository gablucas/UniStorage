import Input from "../Input"

const ItemNameInput = ({ item, setItem, error }) => {

  function handleChange(e) {
    const value = e.target.value;

    if ((/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]{0,50}$/).test(value)) {
      setItem({...item, itemName: value})
    }
  }

  return (
    <Input
      type="text" 
      id="itemName" 
      name="Nome do item" 
      item={item} 
      setItem={setItem} 
      addon={{side: 'right', display: item.itemName.length + '/50'}}
      onChange={handleChange}
      error={error}
    />
  )
}

export default ItemNameInput;