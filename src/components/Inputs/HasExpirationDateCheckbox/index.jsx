import Input from "../Input";

const HasExpirationDateCheckbox = ({ item, setItem, error }) => {

  function handleChange(e) {
    const value = e.target.checked;

    setItem({...item, hasExpirationDate: value, expirationDate: ''})
  }

  return (
    <>
      <Input 
        type="checkbox" 
        id="hasExpirationDate" 
        name="O item possui validade" 
        item={item} 
        setItem={setItem} 
        onChange={handleChange} 
      />
    </>
  )
}

export default HasExpirationDateCheckbox;