import { useState } from "react"
function RatingSelect({ select }) {
  const [selected, setSelected] = useState()

  const handlChange = (e) => {

    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }
  return (
    <ul className="rating">
      <li>
        <input type="radio" name="rating" value='1' id="num1" onChange={handlChange} checked={selected === 1} />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input type="radio" name="rating" id="num2" value='2' onChange={handlChange} checked={selected === 2} />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input type="radio" name="rating" id="num3" value='3' onChange={handlChange} checked={selected === 3} />
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input type="radio" name="rating" id="num4" value='4' onChange={handlChange} checked={selected === 4} />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input type="radio" name="rating" id="num5" value='5' onChange={handlChange} checked={selected === 5} />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input type="radio" name="rating" id="num6" value='6' onChange={handlChange} checked={selected === 6} />
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input type="radio" name="rating" id="num7" value='7' onChange={handlChange} checked={selected === 7} />
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input type="radio" name="rating" id="num8" value='8' onChange={handlChange} checked={selected === 8} />
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input type="radio" name="rating" id="num9" value='9' onChange={handlChange} checked={selected === 9} />
        <label htmlFor="num9">9</label>
      </li>
      <li>
        <input type="radio" name="rating" id="num10" value='10' onChange={handlChange} checked={selected === 10} />
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  )
}

export default RatingSelect