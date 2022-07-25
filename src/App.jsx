import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import QuotesUsers from './components/QuotesUsers'
import colors from './utils/colors'

function App() {
  
  const getRadomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }

let quoteRandom = getRadomElement(quotes);
let colorRandom= getRadomElement(colors);

const [randomQuote, setRadomQuote]= useState(quoteRandom)
const [randomColor, setRadomColor]= useState(colorRandom)
  
const objectBgStyle = {
  backgroundColor:randomColor
}

const getRandomAll = () =>{
  quoteRandom = getRadomElement(quotes);
  colorRandom= getRadomElement(colors);

  setRadomQuote(quoteRandom)
  setRadomColor(colorRandom)
}


  return (
    <div className="App" style={objectBgStyle}>
      <QuotesUsers 
      randomQuote={randomQuote} 
      randomColor={randomColor} 
      getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
