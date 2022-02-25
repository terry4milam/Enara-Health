import WordBox from './styled/WordBox';

interface IWord {
  word: string,
  valid: boolean | null
}
const WordCreator = (props: IWord) => {
  return (<WordBox className={props.valid ? 'valid' : 'not-valid'}>
    <span className={'word'}>{
      props.word
    }</span>
    <span className={'label'}>valid</span>
  </WordBox>)
}
export default WordCreator;
