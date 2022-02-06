import { useState } from 'react'

export function TextareaInput () {
  const [content, setContent] = useState('default content of textarea')

  return (
    <>
      <p>
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </p>
      <p>{content}</p>
    </>
  )
}
