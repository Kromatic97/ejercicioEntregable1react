import React from 'react'

const QuotesUsers = ({randomQuote, randomColor, getRandomAll}) => {

const objectStyle = {
    color:randomColor
}

const objectBgStyle = {
    backgroundColor:randomColor
}



  return (
    <article className='card' style={objectStyle}>
        <p className='card__quote'>{randomQuote.quote}</p>
        <h3 className='card__author'>{randomQuote.author}</h3>
        <div className='btn_container'>
        <button onClick={getRandomAll} className='card__btn' style={objectBgStyle}>&gt;</button>
        </div>
    </article>
  )
}

export default QuotesUsers