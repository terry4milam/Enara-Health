import styled from 'styled-components';

export const Btn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`
export const TileBtn = styled(Btn)`
  width: 62px;
  height: 62px;
  @media(min-width: 769px){
    width: 86px;
    height: 86px;
  }
  border-radius: 8px;
  position: relative;
  background: linear-gradient(to bottom, #f5515f, #a0051c);
  &.choosen, &.available{
    background: transparent;
  }
  overflow: hidden;
`
export const ClearBtn = styled(Btn)`
  grid-column: 2;
  grid-row: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px)  {
    grid-column: 1;
    grid-row:1;
  }
`
