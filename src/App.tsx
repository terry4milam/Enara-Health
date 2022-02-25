import { useState, useEffect } from 'react';
import Tile from './components/LetterBox';
import Word from './components/Word';
import ClearWord from './components/ClearWord';
import Layout from './components/Layout';
import Grid from './components/Grid';
import useFetch from './hooks/useFetch';

type IBoard = string[]

function App() {
  const { data: dataBoard, isFetching } = useFetch<IBoard>('./src/assets/demo.json')
  const [letters, setLetters] = useState<IBoard | null>([])
  useEffect(() => {
    if (!isFetching) {
      setLetters(dataBoard)
    }
  })

  return (<Layout>
    <ClearWord />
    <Grid>
      {
        letters?.map((letter: string) =>
          <Tile key={letter} letter={letter} />
        )
      }
    </Grid>
    <Word words={['a', 'b']} />
  </Layout>)
}

export default App
