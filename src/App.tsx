/*
 * @Author: Youzege
 * @Date: 2022-10-20 15:31:56
 * @LastEditors: Youzege
 * @LastEditTime: 2022-10-26 20:33:48
 */
import './App.css'
import { useLocalStorage } from './hooks'

function App() {
  const [message, setMessage] = useLocalStorage('hook-key', 'Youzege')

  const setLocal = () => {
    setMessage('xidd')
  }

  return (
    <div className="App">
      <p>Hello FullStack</p>
      <p>{ message } <button onClick={ setLocal }>set local</button></p>
    </div>
  )
}

export default App
