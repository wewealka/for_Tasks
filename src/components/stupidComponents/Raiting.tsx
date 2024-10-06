import { Stars } from "./Star";

type RatingType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props:RatingType) {
    return (
      <div>
        <Stars selected = {props.value > 0}/>
        <Stars selected = {props.value > 1}/>
        <Stars selected = {props.value > 2}/>
        <Stars selected = {props.value > 3}/>
        <Stars selected = {props.value > 4}/>
      </div>
    );
  }