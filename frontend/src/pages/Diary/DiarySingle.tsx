import { useState } from 'react'
import './DiarySingle.css'

function DiarySingle() {
  const [diary, setDiary] = useState("")

  return (
    <>
      <div className="diary-area">
        <textarea
          className="diary-textarea"
          placeholder="Write your diary here..."
          value={diary}
          ></textarea>
      </div>
    </>
  )
}

export default DiarySingle
