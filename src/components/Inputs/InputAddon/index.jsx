import Styles from './InputHelper.module.css';

const InputAddon = ({ side, display }) => {

  return (
    <span className={`${Styles.inputAddon} ${Styles[side]}`}>{display}</span>
  )
}

export default InputAddon;