import { useState } from "react"



export function Stars() {
  let [basicState, setBasicState] = useState<number>(0);//для звезд
  let [hover, setHover] = useState<number>(0);//для ховера 
  
  
  const StarList: Array<JSX.Element> = [1, 2, 3, 4, 5].map((star, index) => {
    const styleStar = {
      margin: "2px",
      cursor: "pointer",
      color: index < (basicState || hover) ? "gold" : "grey"
    }
    return <span
      key={index}
      style={styleStar}
      onMouseEnter={() => setHover(index + 1)}
      onMouseLeave={() => setHover(0)}
      onClick={() => setBasicState(index + 1)}
      // onClick={() => (console.log(index))}
      >
      {index < (basicState || hover) ? "★" : "☆"}</span>
  })

  return (
    <div>
      <button onClick={() => setBasicState(0)}>reset</button>
      {StarList}
    </div>
  )
}

// '★'  '☆'

