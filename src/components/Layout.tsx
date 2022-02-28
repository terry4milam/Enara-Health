import Main from './styled/Main';

type ILayout = {
  children: JSX.Element[]
}
const Layout = ({ children }: ILayout): JSX.Element => {
  return (<Main>{children}</Main>)
}

export default Layout;
