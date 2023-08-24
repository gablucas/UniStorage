function validate(item, setError) {
  const inputKeys = Object.keys(item);
  let inputs = [];
  
  inputKeys.forEach((key) => {
    if (item[key] === "" && (key === "itemName" || key === "quantity" || key === "price")) {
      inputs.push({key, message: 'Campo vazio'});

    } else if (item[key] === "" && (key === "fabricationDate" || (key === "expirationDate" && item.hasExpirationDate))) {
      inputs.push({key, message: 'Selecione uma data'});

    } else if (item.hasExpirationDate && item.fabricationDate > item.expirationDate) {
      inputs.push(
        {key: "fabricationDate", message: 'Data maior que a data de validade'},
        {key: "expirationDate", message: 'Data menor que a data de fabricação'}
        );

    } else {
      inputs = inputs.filter((input) => input.key !== key);
    }
  })

  setError(inputs)

  if (inputs.length >= 1) {
    return false;
  } else {
    return true;
  }
}

export default validate