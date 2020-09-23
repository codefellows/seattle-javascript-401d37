import React, { useContext } from 'react'

import { PotatoContext } from '../context/potato.js';

export default function PotatoChanger() {

  const potatoContext = useContext(PotatoContext);

  return (
    <button onClick={potatoContext.cycleStatus}>Change Potato</button>
  )

}
