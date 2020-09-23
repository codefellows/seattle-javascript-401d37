import React, { useContext } from 'react'

import { PotatoContext } from '../context/potato.js';

function PotatoCooker() {

  const potatoContext = useContext(PotatoContext);

  return (
    <p>I will soon transform potato that is {potatoContext.status} into a feast</p>
  )
}

export default PotatoCooker
