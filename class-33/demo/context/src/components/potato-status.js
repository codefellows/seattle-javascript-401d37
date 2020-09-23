import React, { useContext } from 'react'

import { PotatoContext } from '../context/potato.js';


export default function PotatoStatus() {

  const potatoContext = useContext(PotatoContext);

  return (
    <h2>Potato Status: {potatoContext.status}</h2>
  )

}