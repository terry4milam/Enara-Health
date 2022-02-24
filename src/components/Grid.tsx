import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-area: main;
  grid-template-columns: repeat(4, 62px);
  grid-template-rows: repeat(4, 62px);
  column-gap: 2px;
  row-gap: 2px;
  align-self:center;
  @media (min-width: 768px){
    grid-template-columns: repeat(4, 86px);
    grid-template-rows: repeat(4, 86px);
    column-gap: 4px;
    row-gap: 4px;
    align-self: flex-start;
  }
`

export default Grid;
