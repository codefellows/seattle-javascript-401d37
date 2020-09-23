import React from 'react';
import useAjax from './ajax';

export default function Swapi() {

  const { list, isLoading } = useAjax('https://swapi.dev/api/people/');

  return (
    <>
      <h2>Swapi</h2>
      {isLoading && <p>Loading.....</p>}
      <ul>
        {list.map(item => <li key={item.url}>{item.name}</li>)}
      </ul>
    </>
  )
}
