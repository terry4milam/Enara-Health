import styled from 'styled-components'
const Button = styled.button`
border: 1px solid orange;
border-radius: 4px;
`
const Letter = styled.strong`
  text-shadow: 1px 0 0 rgba(0, 0, 0, .5);
  text-transform: uppercase;
`
type ITile = {
  letter: string
}
const Tile = (props: ITile): JSX.Element => {
  return (<Button>
    <Letter>{props.letter}</Letter>
  </Button>)
}
export default Tile;
