import styled from "styled-components";
import { ClearBtn } from "./styled/Button";
import CloseIcon from "./styled/CloseIcon";


const BtnLabel = styled.span`
  color: #bbbbbb;
`
interface ICleanProps {
  cleanAll: Function,
  isDisabled: boolean
}
const Restart = (props: ICleanProps) => {
  const clickHandler = () => {
    props.cleanAll()
  }
  return (<ClearBtn onClick={clickHandler} disabled={props.isDisabled}>
    <BtnLabel>clear word</BtnLabel>
    <CloseIcon />
  </ClearBtn>)
}
export default Restart;
