/*
 * @Author: Youzege
 * @Date: 2022-10-27 20:52:56
 * @LastEditors: Youzege
 * @LastEditTime: 2022-10-27 21:16:45
 */
import { useSearchParams, useParams } from 'react-router-dom'
export const About = () => {
  // const [ params ] = useSearchParams()
  // const id = params.get('id')
  const params = useParams()
  const id = params.id
  return (
    <div>
      this About page id: { id }
    </div>
  )
}