import { useState, useEffect } from 'react';
import Tile from './components/LetterBox';
import Word from './components/Word';
import ClearWord from './components/ClearWord';
import Layout from './components/Layout';
import Grid from './components/Grid';
import useFetch from './hooks/useFetch';

function App() {
  const { data, isFetching, error } = useFetch('./src/assets/demo.json')
  const [letters, setLetters] = useState([])
  console.log({ data, isFetching, error });
  return (<Layout>
    <ClearWord />
    <Grid>
      {
        letters.map((letter: string) =>
          <Tile key={letter} letter={letter} />
        )
      }
    </Grid>
    <Word words={['a', 'b']} />
  </Layout>)
}

export default App
