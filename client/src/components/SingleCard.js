// // js and html for the memory game
// import React from 'react'
// import Cover from '../assets/banner.png'
// import Logo from '../assets/logo.png'
// import { QUERY_CARD } from '../utils/queries'
// import { useQuery } from '@apollo/client'
// // import ReactCardFlip from 'react-card-flip';

// export default function singleCard( {card, handleChoice, flipped, disabled }) {

//     const handleClick = () => {
//         if (!disabled) {
//             handleChoice(card)
//         }
//     }

//     const {loading, data} = useQuery(QUERY_CARD)
//     console.log(loading, data)
//   return (
    
//     <div className='card'>
//         <div className={flipped ? "flipped" : ""}>
//             <img className='front' src={Logo} alt="card front"/>
//             <img 
//                 className='back' 
//                 src={Cover} 
//                 onClick={handleClick} 
//                 alt="back cover"
//             />
//         </div>
//     </div>
//   )
// }

// js and html for the memory game
import React from 'react'
import Cover from '../assets/banner.png'
// import ReactCardFlip from 'react-card-flip';

export default function singleCard( {card, handleChoice, flipped, disabled, data}) {
    console.log(data)

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    const setCards = () => {
        data.map(info => {
            if (info.pair_id === info.pair_id) {
                console.log(info.content)
            }
       })
    }

    setCards()

  return (
    <div className='card' onClick={handleClick}>
        <div className={flipped ? "flipped" : ""}>
            {data.map(cardContent => {
                return (<>
                    <p className='front' alt="card front" > answer </p>
                    <p className='back'> question </p>
                </>)

            }
                )}
        </div>
    </div>
  )
}