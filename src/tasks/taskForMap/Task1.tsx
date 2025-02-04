import styled from 'styled-components';

type Task1PropsType = {
    manufacturer: string,
    model: string
}

type Task1MainPropsType = {
    cars: Array<Task1PropsType>
}

export const topCars = [
    { manufacturer: 'BMW', model: 'm5cs' },
    { manufacturer: 'Mercedes', model: 'e63s' },
    { manufacturer: 'Audi', model: 'rs6' }
]


export const Task1 = (props:Task1MainPropsType) => {
  const TaskLIst: Array<JSX.Element> = props.cars.map((cars:Task1PropsType)=>{
    return (
        <li key={`${cars.manufacturer}-${cars.model}`}>
            <StyledSpan>{cars.manufacturer}</StyledSpan>
            <StyledSpan>{cars.model}</StyledSpan>
        </li>
    )
  })

  return (
    <div>{TaskLIst}</div>
  )
}

const StyledSpan = styled.span`
    padding:3px
`