import React from 'react'

import PotatoCooker from './potato-cooker';
import PotatoStatus from './potato-status';
import PotatoChanger from './potato-changer';

function PotatoWrapper() {
  return (
    <>
    <PotatoCooker />
    <PotatoStatus />
    <PotatoChanger />
    <p>The wrapper knows nothing about potato status and likes it that way</p>
    </>
  )
}

export default PotatoWrapper
