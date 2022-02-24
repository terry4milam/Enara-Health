import styled from "styled-components";

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 410px);
  grid-template-rows: repeat(10, .5fr);
  padding: 2em;
  max-width: 820px;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 90vh;
  }
`
type ILayout = {
  children: JSX.Element[]
}
const Layout = ({ children }: ILayout): JSX.Element => {
  return (<Main>{children}</Main>)
}

export default Layout;
