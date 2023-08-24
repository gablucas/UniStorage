import Input from "../Input";

const FabricationDateInput = ({ item, setItem, error }) => {

  return (
    <Input
      id="fabricationDate" 
      type="date" 
      name="Data de fabricação" 
      item={item} 
      setItem={setItem}
      error={error}
    />
  )
}

export default FabricationDateInput;