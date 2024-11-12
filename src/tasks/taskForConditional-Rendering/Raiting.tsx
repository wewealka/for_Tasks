import { Stars } from "../taskForConditional-Rendering/Star"

type RatingType = {
  value: number
}
export function Rating(p:RatingType) {
    return (
      <div>
        <Stars basicValue={p.value}/>
      </div>
    );
  }