import React from 'react';
import './App.css';
import useAjax from './ajax';

export default function Todo() {

  const { list, isLoading } = useAjax('http://localhost:3001/api/v1/todos');

  return (
    <>
      <h2>To Do List</h2>

      { isLoading && <p>Loading.....</p>}

      <ul>
        {list.map(item => <li key={item._id}>{item.text}</li>)}
      </ul>
    </>
  )
}
