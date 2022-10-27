/*
 * @Author: Youzege
 * @Date: 2022-10-27 21:06:00
 * @LastEditors: Youzege
 * @LastEditTime: 2022-10-27 21:20:14
 */
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

  const goAbout = () => {
    // navigate('/about', { replace: true })
    // navigate('/about?id=100', { replace: true })
    
    // router需要 /about/:id
    navigate('/about/100', { replace: true })
  }

  return (
    <div>
      <p>Login</p>
      <p>
        <button onClick={ goAbout }>Login</button>
      </p>
    </div>
  )
}