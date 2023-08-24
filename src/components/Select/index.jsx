import Styles from './Select.module.css';

const Select = ({ id, name, value, onChange, error, itens }) => {



  return (
    <div className={Styles.container}>
      <label htmlFor={id}>{name}</label>
      <select value={value} onChange={onChange}>
        <option value="" id={id}>Selecione uma medida</option>
        
      </select>
      {error && <span>{error}</span>}
    </div>
  )
}

export default Select;