import { useState } from 'react'

export function ControlledInput () {
  const [inputValue, setInputValue] = useState('')
  return (
    <>
      <p>
        First:<br />
        <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      </p>
      <p>
        Second:<br />
        <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      </p>
      <p>
        <button onClick={() => setInputValue('you clicked on button')}>Set input value</button>
      </p>
      <p>{ inputValue }</p>
    </>
  )
}
