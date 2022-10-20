/*
 * @Author: Youzege
 * @Date: 2022-10-20 21:17:37
 * @LastEditors: Youzege
 * @LastEditTime: 2022-10-20 22:04:45
 */
import { SyntheticEvent, useState } from "react"

const FormList = ({ notes }: { notes: { id: number, title: string, import: boolean }[] }) => {
  return (
    <ul>
      { notes.map(note => (<li key={note.id}> { note.title } </li>))}
    </ul>
  )
}

const FormInput = ({ addNote }: { addNote: (title: string) => void }) => {
  const [newNote, setNewNote] = useState('')

  const submitNote = (event: any) => {
    event.preventDefault()
    addNote(newNote)
  }
  const handleAddChange = (event: any) => {
    setNewNote(event.target.value)
  }
  return (
    <form onSubmit={submitNote}>
      <input value={newNote} onChange={handleAddChange} />
      <button type="submit">提交</button>
    </form>
  )
}

const noteData: { id: number, title: string, import: boolean }[] = [
  {
    id: 1,
    title: 'note 1',
    import: true
  }
]

const FormData = () => {
  const [notes, setNotes] = useState(noteData)
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll ? notes : notes.filter(note => note.import)
  
  const handleShowAll = () => {
    setShowAll(!showAll)
  }

  const addNote = (title: string) => {
    let id = notes.length + 1
    let _import = notes.length === 3 ? true : false
    const note = { id, title, import: _import }
    setNotes(notes.concat(note))
  }

  return (
    <div>
      <h4>FormData</h4>
      <button onClick={handleShowAll}>显示 { showAll ? '所有' : '重要的'}</button>
      <FormInput addNote={ addNote } />
      <FormList notes={ notesToShow } />
    </div>
  )
}

export default FormData