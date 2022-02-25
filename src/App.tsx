import { useState, useEffect } from 'react';
import Tile from './components/Tile';
import WordCreator from './components/WordCreator';
import Restart from './components/Restart';
import Layout from './components/Layout';
import Grid from './components/styled/Grid';
import useFetch from './hooks/useFetch';

interface IBoard {
  board: string[]
}

function App() {
  const { data: boardA, isFetching: fetchingA } = useFetch<IBoard>('./src/assets/demo.json')
  const { data: boardB, isFetching: fetchingB } = useFetch<IBoard>('./src/assets/demo.json')
  const [letters, setLetters] = useState<string[] | null>(null)
  const [word, setWord] = useState<string>('')
  const [selectedWords, setSelectedWords] = useState<string[]>([])
  const [isValidWord, setIsValidWord] = useState<boolean | null>(null)
  useEffect(() => {
    console.log({ boardA, boardB, fetchingA, word })
    if (!fetchingA) {
      setLetters(boardA!.board)
    }
    if (word.length > 0) {
      setIsValidWord(['lala', 'lilo', 'abc'].includes(word.toLowerCase()))
    }
  })
  if (fetchingA) {
    return <span>prelaod</span>
  }
  const restart = () => {
    setWord('')
    setIsValidWord(null)
  }
  const setWordArr = (w: string) => {
    setWord(word.concat('', w))
    setSelectedWords([...selectedWords, w])
    console.log({ word, selectedWords })
  }
  return (<Layout>
    <Restart cleanAll={restart} />
    <Grid>
      {
        letters?.map((letter: string) =>
          <Tile
            key={letter}
            letter={letter}
            valid={isValidWord}
            action={letter => setWordArr(letter)} />
        )
      }
    </Grid>
    <WordCreator word={word} valid={isValidWord} />
  </Layout>)
}

export default App
