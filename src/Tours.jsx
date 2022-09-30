import React from 'react'
import Tour from './Tour'

export default function Tours( { tours, handleDelete } ) {


  return (
    <main>
      <h1 className='title'>Tour suggestions</h1>
      {tours.map(tour => {
        const {id, image, info, name, price} = tour
        return (
          <article key={id}>
            <Tour image={image} info={info} name={name} price={price} id={id} handleDelete={handleDelete}/>
          </article>
        )
      })}
    </main>
  )
}
