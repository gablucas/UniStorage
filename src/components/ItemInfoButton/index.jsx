import { useState } from "react"
import ItemInfo from "../ItemInfo"
import ShowInfoIcon from "../Icons/ShowInfoIcon"

const ItemInfoButton = ({ item }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <button onClick={() => setToggle(true)}><ShowInfoIcon /></button>
      {toggle && (<ItemInfo item={item} setToggle={setToggle} />)}
    </>
  )
}

export default ItemInfoButton;