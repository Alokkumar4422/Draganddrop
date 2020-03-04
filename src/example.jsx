import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import Card from './Card'
import update from 'immutability-helper'
import ItemTypes from './ItemTypes'

const ITEMS = [
  {
    id: 1,
    text: 'https://mobimg.b-cdn.net/pic/v2/gallery/preview/abstrakciya-fon-40370.jpg',
    imageno: 1
  },
  {
    id: 2,
    text: 'https://mobimg.b-cdn.net/pic/v2/gallery/preview/belki-priroda-yumor-zhivotnye-6.jpg',
    imageno: 2
  },
  {
    id: 3,
    text: 'https://mobimg.b-cdn.net/pic/v2/gallery/preview/sobaki-zhivotnye-9.jpg',
    imageno: 3
  },
  {
    id: 4,
    text: 'https://mobimg.b-cdn.net/pic/v2/gallery/preview/erepahi-zhivotnye-21.jpg',
    imageno: 4
  },
  {
    id: 5,
    text: 'https://mobimg.b-cdn.net/pic/v2/gallery/preview/gusi-pejzazh-pticy-11.jpg',
    imageno: 5
  },
  {
    id: 6,
    text: 'https://mobimg.b-cdn.net/pic/v2/gallery/preview/ezhiki-kaktusy-yumor-zhivotnye-3.jpg',
    imageno: 6
  },
  {
    id: 7,
    text: 'https://mobimg.b-cdn.net/pic/v2/gallery/preview/strausy-yumor-zhivotnye-5.jpg',
    imageno: 7
  },
  {
    id: 8,
    text: 'https://mobimg.b-cdn.net/pic/v2/gallery/preview/abstrakciya-fon-41136.jpg',
    imageno: 8
  },
  {
    id: 9,
    text: 'https://mobimg.b-cdn.net/pic/v2/gallery/preview/abstrakciya-fon-41100.jpg',
    imageno: 9
  },
]
const Container = () => {
  const [cards, setCards] = useState(ITEMS)
  const moveCard = (id, atIndex) => {
    const { card, index } = findCard(id)
    setCards(
      update(cards, {
        $splice: [
          [index, 1],
          [atIndex, 0, card],
        ],
      }),
    )
  }
  const findCard = id => {
    const card = cards.filter(c => `${c.id}` === id)[0]
    return {
      card,
      index: cards.indexOf(card),
    }
  }
  const [, drop] = useDrop({ accept: ItemTypes.CARD })
  return (
    <>
    <div ref={drop}>
      <div className="container">
        <div className="row">
          {cards.map(card => (
            <Card
              key={card.id}
              id={`${card.id}`}
              text={card.text}
              moveCard={moveCard}
              findCard={findCard}
              // imageno={card.imageno}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
export default Container
