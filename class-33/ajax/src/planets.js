import React from 'react'
import useAjax from './ajax';


function Planets() {

  const { list } = useAjax('https://swapi.dev/api/planets/')

  return (
    <>
      <h2>Planets List</h2>
      <ul>
        {list.map(item => <li key={item.url}>{item.name}</li>)}
      </ul>
    </>
  )
}

export default Planets
