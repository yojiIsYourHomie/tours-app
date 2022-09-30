import React, { useState } from 'react'

export default function Tour( { name, image, price, info, id, handleDelete } ) {
  const [readMore, setReadMore] = useState(false)

  return (
    <article className='single-tour'>
      <img src={image} alt={name}/>
      <div className='tour-info'>
        <h3>{name}</h3>
        <h4>Price: ${price}</h4>
      </div>
      <p className='tour-text'>{readMore ? info : `${info.substring(0, 180)}...`}
        <button onClick={() => setReadMore(!readMore)}>{readMore ? `Show less` : `Read more`}</button>
      </p>
      <button onClick={() => handleDelete(id)} className='btn-delete'>Not Interesed</button>
    </article>
  )
}
