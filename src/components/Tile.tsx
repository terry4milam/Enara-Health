import { useState, useEffect, Dispatch } from 'react';
import styled from 'styled-components';
import { TileBtn } from './styled/Button';

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
  action: Dispatch<any>
  valid: boolean | null,
  disabled: boolean
}
const Tile = ({ letter, action, valid, disabled }: ITile): JSX.Element => {
  const [classTile, setClassTile] = useState<string>('')
  const [usedWord, setUsedWord] = useState<string[]>([])
  useEffect(() => {
    if (typeof valid === 'boolean' && disabled) {
      setClassTile(valid ? 'available' : 'choosen')
    } else {
      setClassTile('')
    }
  })
  const chooseTile = () => {
    action(letter)
    setUsedWord([...usedWord, letter])
  }
  return (<TileBtn className={classTile} onClick={chooseTile} disabled={disabled}>
    <TileSpan className={classTile}>
      {letter}
    </TileSpan>
  </TileBtn>)
}
export default Tile;
