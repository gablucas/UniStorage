import Error from '../../Error';
import InputAddon from "../InputAddon";

import Styles from './Input.module.css';

const Input = ({ id, type, name, item, setItem, error, onChange, addon, style, disabled }) => {

  function handleChange(e) {
    let value

    if (type === 'checkbox') value = e.target.checked;
    else value = e.target.value;

    setItem((item) => ({...item, [id]: value}));
  }

  if (type === 'checkbox')
    return (
      <div className={Styles.checkbox}>
        <input type="checkbox" id={id} checked={item.hasExpirationDate} onChange={onChange ? onChange : handleChange} />
        <label htmlFor={id}>{name}</label>
      </div>
    )

    return (
      <div className={Styles.input}>
        <label htmlFor={id}>{name}</label>
        <input type={type} id={id} value={item[id]} onChange={onChange ? onChange : handleChange} style={style} disabled={disabled} />
        {addon && <InputAddon side={addon.side} display={addon.display} />}
        {error.some((input) => input.key === id) && <Error>{error.find((input) => input.key === id).message}</Error>}
      </div>
    )
}

export default Input;