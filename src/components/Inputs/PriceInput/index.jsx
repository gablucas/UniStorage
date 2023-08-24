import Input from '../Input';

const PriceInput = ({ item, setItem, error }) => {

  function handleChange(e) {
    let value = e.target.value;

    if (/\D/.test(value.replace('.', '').replace((',', '')))) {
      value = value.replace(/\D/g, '')
      .replace(/(\d)(\d{2})$/, "$1,$2")
      .replace(/(?=(\d{3})+(\D))\B/g, ".")
        
      setItem({...item, price: value})
    }
  }

  return (
    <Input
      id="price" 
      type="text" 
      name="Preço" 
      item={item} 
      setItem={setItem} 
      onChange={handleChange} 
      addon={{side: "left", display: "R$"}}
      style={{paddingLeft: "64px"}}
      error={error}
    />
  )
}

export default PriceInput;