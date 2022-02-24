import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 62px;
  height: 62px;
  @media(min-width: 768px){
    width: 86px;
    height: 86px;
  }
  font-family: 'tahoma-small-cap-bold', sans-serif;
  font-size: 1.6rem;
  text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.42);
  text-transform: uppercase;
  color: white;
  background: linear-gradient(to bottom, #FAD15C, #F76E1E);
  background-clip: padding-box;
  border: solid 2px transparent;
  border-radius: 8px;
  line-height: 1;
  margin: auto;
  position: relative;
  box-sizing: border-box;
  &:before {
    content: '';
    position: absolute;
    top: 0; right:0; bottom:0; left:0;
    z-index: -1;
    margin: -2px;
    border-radius: inherit;
    background: linear-gradient(to bottom, red, orange);
  }
  &.choosen, &.available{
    border: none;
  }
  &.choosen {
    background: linear-gradient(to bottom, #f4505f, #9f041b);
  }
  &.available{
    background: linear-gradient(to bottom, #b3ec50, #439422);
  }
`

interface ITile {
  letter: string
}
const Tile = (props: ITile): JSX.Element => {
  const [classTile, setClassTile] = useState('')
  const chooseTile = () => {
    setClassTile('available')
  }
  return (<Button className={classTile} onClick={chooseTile}>
    {props.letter}
  </Button>)
}
export default Tile;
