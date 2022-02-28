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
interface IDictionary {
  words: string[]
}

function App() {
  const { data: boardB, isFetching: fetchingB } = useFetch<IBoard>('./src/assets/test-board-2.json')
  const { data: dictionaryData } = useFetch<IDictionary>('./src/assets/dictionary.json')
  const [letters, setLetters] = useState<string[] | null>(null)
  const [word, setWord] = useState<string>('')
  const [selectedWords, setSelectedWords] = useState<number[]>([])
  const [isValidWord, setIsValidWord] = useState<boolean | null>(null)
  useEffect(() => {
    if (!fetchingB) {
      setLetters(boardB!.board)
    }
    if (word.length > 0) {
      setIsValidWord(wordChecker())
    }
  })
  if (fetchingB) {
    return (<span>Loading board...</span>)
  }
  const wordChecker = (): boolean => {
    if (!dictionaryData?.words) {
      return false
    }
    return dictionaryData.words.includes(word.toLowerCase());
  }
  const restart = () => {
    setWord('')
    setIsValidWord(null)
    setSelectedWords([])
  }
  const setWordArr = (letter: string, index: number) => {
    setWord(word.concat('', letter))
    console.log({ selecteds: [...selectedWords, index], exist: selectedWords.includes(index) })
    setSelectedWords([...selectedWords, index])
  }
  return (<Layout>
    <Restart cleanAll={restart} isDisabled={word.length === 0} />
    <Grid>
      {
        letters?.map((letter: string, index) =>
          <Tile
            key={index}
            letter={letter}
            valid={isValidWord}
            disabled={selectedWords.includes(index)}
            action={() => setWordArr(letter, index)} />
        )
      }
    </Grid>
    <WordCreator word={word} valid={isValidWord} />
  </Layout>)
}

export default App
