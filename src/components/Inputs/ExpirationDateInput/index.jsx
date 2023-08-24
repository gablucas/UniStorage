import Input from "../Input"

const ExpirationDateInput = ({ item, setItem, error }) => {

  return (
    <Input
      id="expirationDate" 
      type="date" 
      name="Data de validade" 
      item={item} 
      setItem={setItem} 
      disabled={!item.hasExpirationDate} 
      error={error}
    />
  )
}

export default ExpirationDateInput;