import styled from 'styled-components';

const CloseIcon = styled.span`
  background-color: #d8d8d8;
  color: white;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  position: relative;
  margin-left: 15px;
  &:before, &:after {
    content: ' ';
    position: absolute;
    left: 20px;
    top: 5px;
    height: 32px;
    width: 2px;
    background-color: white;
  }
  &:before{
    transform: rotate(45deg);
  }
  &:after{
    transform: rotate(-45deg);
  }
`
export default CloseIcon;
