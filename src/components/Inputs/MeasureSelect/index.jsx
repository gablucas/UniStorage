import Styles from './MeasureSelect.module.css';
import { MEASURES } from "../../../utils/unitMeasures";

const MeasureSelect = ({ item, setItem }) => {

  function handleChange(e) {
    let value = e.target.value;
    setItem({...item, measureUnit: value, quantity: ''})
  }

  return (
    <div className={Styles.measureSelect}>
      <label htmlFor="measure">Unidade de medida</label>
      <select id="measure" onChange={handleChange}>
        {Object.keys(MEASURES).map((measure) => (
        <option key={MEASURES[measure].name} value={measure}>{MEASURES[measure].name}</option>
      ))}
      </select>
    </div>
  )
}

export default MeasureSelect;