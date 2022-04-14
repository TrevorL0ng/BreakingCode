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

export default function singleCard( {card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

  return (
    
    <div className='card'>
        <div className={flipped ? "flipped" : ""}>
            <img className='front' src={card.src} alt="card front"/>
            <img 
                className='back' 
                src={Cover} 
                onClick={handleClick} 
                alt="back cover"
            />
        </div>
    </div>
  )
}