import React, { useState } from 'react'


function ButtonWithHooks() {
  const [key1, setKey1] = useState('This is the default state of the func')
  const [key2, setKey2] = useState(0)
  return (
    <div>
    <button onClick={() => setKey1(" Come home the kids miss you")} className='btn'>{key1}</button>
    <button onClick={() => setKey2(" Ezmár egy másik key")}>{key2}</button>

    </div>
  )
}

export default ButtonWithHooks