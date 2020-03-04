import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'



const Card = ({ id, text, moveCard, findCard }) => {
  const originalIndex = findCard(id).index
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, originalIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
    end: (dropResult, monitor) => {
      const { id: droppedId, originalIndex } = monitor.getItem()
      const didDrop = monitor.didDrop()
      alert(`You want replace this ${id} to ${originalIndex}!`)
      if (!didDrop) {
        moveCard(droppedId, originalIndex)
      }
    },
  })
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    canDrop: () => false,
    hover({ id: draggedId }) {
      if (draggedId !== id) {
        const { index: overIndex } = findCard(id)
        moveCard(draggedId, overIndex)
      }
    },
  })
  const opacity = isDragging ? 0 : 1
  return (
        <div className="col-md-4 col-sm-6 cus-img" ref={node => drag(drop(node))} style={{opacity }}>
          <img src={text} className="img-fluid w-100 mb-3" />
        </div>
  )
}
export default Card
