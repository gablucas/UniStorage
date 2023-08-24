import { MEASURES } from "../../../utils/unitMeasures"
import Input from "../Input";

const QuantityInput = ({ item, setItem, error }) => {

  function handleChange(e) {
    const value = e.target.value;
    
    if (item.measureUnit === 'UNIDADE' && (/^(?:\d+)?$/).test(value)) {
      setItem({...item, quantity: value});
    } else if (item.measureUnit !== 'UNIDADE' && (/^(\d+(,\d{0,3})?)?$/).test(value)) {
      setItem({...item, quantity: value});
    }
  }

  return (
    <Input 
      id="quantity" 
      type="text" 
      name="Quantidade" 
      item={item} 
      setItem={setItem} 
      onChange={handleChange} 
      addon={{ side: "right", display: MEASURES[item.measureUnit].abbreviation}} 
      error={error}
    />
  )
}

export default QuantityInput