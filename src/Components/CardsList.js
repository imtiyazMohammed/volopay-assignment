import React from 'react'
import SubscriptionCard from './SubscriptionCard'
import BurnerCard from './BurnerCard'
import { virtualCards } from '../CardsAPI'
import './CardsList.css'

function CardsList() {
  return (
      <div className='cards'>{

        virtualCards.map((card) => {
            if(card.card_type === 'burner') return (
            <BurnerCard props={card}/>
            )
            else return (
            <SubscriptionCard props={card}/>
            )
        })

    }
    </div>
  )
}

export default CardsList