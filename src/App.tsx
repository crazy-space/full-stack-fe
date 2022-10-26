/*
 * @Author: Youzege
 * @Date: 2022-10-20 15:31:56
 * @LastEditors: Youzege
 * @LastEditTime: 2022-10-26 21:59:48
 */
import './App.css'
import { fetchData } from './Demo/FetchData/FetchData'

function App() {
  fetchData()

  return (
    <div className="App">
      <p>Hello FullStack</p>
    </div>
  )
}

export default App
