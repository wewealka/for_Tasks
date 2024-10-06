type StarType = {
  selected: boolean
}
export function Stars(props: StarType) {
  return (
    <span style={{ marginRight: '5px' }}>
      {props.selected ? <b>star</b> : ''}
    </span>
  )
}