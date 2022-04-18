import React, { useEffect, useState } from 'react';
import SingleCard from '../components/SingleCard';
import axios from 'axios';
import '../index.css'
// import Auth from '../utils/auth';


const cardImages = [
  { "src": "/img/sample1.jpeg", matched: false },
  { "src": "/img/sample2.jpeg", matched: false },
  { "src": "/img/sample3.jpeg", matched: false },
  { "src": "/img/sample4.jpeg", matched: false },
  { "src": "/img/sample5.jpeg", matched: false },
  { "src": "/img/sample6.jpeg", matched: false }
]

// const cardSet = () => {
//   const [cards, setCards] = useState("")
// }

// const cardData = async () => {

// }

function Game() {
  
  //Store cards
  const [cards, setCards] = useState([])
  // User turns
  const [turns, setTurns] = useState(0)
  // compare cards to see if it matches
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [data, setData] = useState([])
  
  // Shuffle cards
  const shuffleCards = () => {
    // duplicate cards once
    const shuffledCards = [...cardImages, ...cardImages]
      // shuffle cards using sort method
      .sort(() => Math.random() - 0.5)
      // apply random id
      .map((card) => ({ ...card, id: Math.random() }))


    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  // async function getData() {
  //   const res = await fetch('http://localhost:3001/api/cards')
  //   const data = await res.json()

  //   return data;
  // }

  // console.log(cards, turns)

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    // console.log(card)
  }

  // compare two selected cards 
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)

      if (choiceOne.src === choiceTwo.src) {
        console.log('The cards match!')

        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
        console.log('The cards do not match!')
      }
    }
  }, [choiceOne, choiceTwo])

  useEffect(() => {
    axios.get('http://localhost:3001/api/cards').then(data => setData(data.data))
  }, [])

  // console.log(cards)

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }


  // start game automatically 
  useEffect(() => {
    shuffleCards()
  }, [])

  // const loggedIn = Auth.loggedIn();

  return (
    <div className="game-cards">
      <h1 className='game-title'> Breaking Code </h1>
      <button onClick={shuffleCards}>
        <span></span>
        <span></span>
        <span></span> New Game
      </button>

      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            data={data}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}>
          </SingleCard>
        ))}
      </div>
      <p className='turns'> Turns: {turns} </p>
    </div>
  );
}

export default Game;
