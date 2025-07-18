import { useEffect, useState } from 'react'
import { fetchDiary, updateDiary } from '../../api/diaries'
import './DiarySingle.css'

type Diary = {
  id: number;
  date: string;
  content: string;
}

function DiarySingle() {
  const [diary, setDiary] = useState<Diary | null>(null)
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    fetchDiary().then((data) => {
      setDiary(data)
      setContent(data.content || '')
    })
  }, [])

  const handleBlur = async () => {
    if (!diary) return;
    await updateDiary(diary.id, content);
  }


  return (
    <>
      <div className="diary-area">
        <textarea
          className="diary-textarea"
          placeholder="Write your diary here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onBlur={handleBlur}
          ></textarea>
      </div>
    </>
  )
}

export default DiarySingle
