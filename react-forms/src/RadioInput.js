import { useState } from 'react'

export function RadioInput () {
  const [jsFlavour, setJsFlavour] = useState('vanilla')

  const handleChange = (event) => {
    console.log('change', event.target)
    setJsFlavour(event.target.value)
  }

  return (
    <>
      <p>
        <label>
          <input
            type="radio"
            name="jsFlavour"
            value="vanilla"
            onChange={handleChange}
          />
          Vanilla
        </label>
      </p>
      <p>
        <label>
          <input
            type="radio"
            name="jsFlavour"
            value="react"
            onChange={handleChange}
          />
          React
        </label>
      </p>
      <p>
        <label>
          <input
            type="radio"
            name="jsFlavour"
            value="vue"
            onChange={handleChange}
          />
          Vue
        </label>
      </p>
      <p>{jsFlavour}</p>
    </>
  )
}
