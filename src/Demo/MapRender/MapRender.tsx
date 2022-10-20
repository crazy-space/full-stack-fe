/*
 * @Author: Youzege
 * @Date: 2022-10-20 21:10:07
 * @LastEditors: Youzege
 * @LastEditTime: 2022-10-20 21:11:57
 */

const notes = [
  {
    id: 1,
    title: 'note 1'
  },
  {
    id: 2,
    title: 'note 2'
  },
  {
    id: 3,
    title: 'note 3'
  }
]

const MapRender = () => {
  return (
    <div>
      <ul>
        {notes.map((note: { id: number; title: string }) => (
          <li key={note.id}> {note.title} </li>
        ))}
      </ul>
    </div>
  )
}

export default MapRender
