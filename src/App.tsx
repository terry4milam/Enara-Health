import Tile from './components/LetterBox';
import Word from './components/Word';
import ClearWord from './components/ClearWord';
import Layout from './components/Layout';
import Grid from './components/Grid';
function App() {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']
  return (<Layout>
    <ClearWord />
    <Grid>
      {
        letters.map(letter =>
          <Tile key={letter} letter={letter} />
        )
      }
    </Grid>
    <Word words={['a', 'b']} />
  </Layout>)
}

export default App
