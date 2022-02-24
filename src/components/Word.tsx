import styled from 'styled-components';

const WordBox = styled.div`
  border: 2px solid #979797;
  padding: 8px;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.valid{
    .word{
      color: #7ed321;
    }
    .label{
      color: #d2ddc2;
    }
  }
  &.not-valid{
    .word{
      color: #d0021b;
    }
    .label{
      color: #f3bcc2;
    }
  }
  .word{
    letter-spacing: .25em;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    color: #7ed321;
  }
  
`
interface IWord {
  words: string[]
}
const Word = (props: IWord) => {
  return (<WordBox className={'not-valid'}>
    <span className={'word'}>{
      props.words.map(word => word)
    }</span>
    <span className={'label'}>valid</span>
  </WordBox>)
}
export default Word;
