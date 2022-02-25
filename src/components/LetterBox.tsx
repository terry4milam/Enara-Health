import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 62px;
  height: 62px;
  @media(min-width: 769px){
    width: 86px;
    height: 86px;
  }
  border: none;
  border-radius: 8px;
  position: relative;
  background: linear-gradient(to bottom, #f5515f, #a0051c);
  &.choosen, &.available{
    background: transparent;
  }
  overflow: hidden;
`
const TileSpan = styled.span`
  font-family: 'tahoma-small-cap-bold', sans-serif;
  font-size: 1.6rem;
  text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.42);
  text-transform: uppercase;
  color: white;
  background: linear-gradient(to bottom, #FAD15C, #F76E1E);
  text-transform: uppercase;
  position: absolute;
  border-radius: 6px;
  top:3px; left:3px; bottom:3px; right:3px;
  display: flex;
  justify-content: center;
  align-items: center;
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
    <TileSpan className={classTile}>
      {props.letter}
    </TileSpan>
  </Button>)
}
export default Tile;
