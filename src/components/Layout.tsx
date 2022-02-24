import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em;
  max-width: 820px;
  margin: 0 auto;
  height: 90vh;
`
type ILayout = {
  children: JSX.Element[]
}
const Layout = ({ children }: ILayout): JSX.Element => {
  return (<Main>{children}</Main>)
}

export default Layout;
