import styled from 'styled-components';

export const Grid = styled.div`
  grid-column: 1;
  grid-row: 2 / -1;
  display: grid;
  grid-template-columns: repeat(4, 86px);
  grid-template-rows: repeat(4, 86px);
  grid-gap: 4px;
  @media (max-width: 768px){
    grid-template-columns: repeat(4, 62px);
    grid-template-rows: repeat(4, 62px);
    grid-gap: 2px;
    grid-row: 5;
  }
`

export default Grid;
