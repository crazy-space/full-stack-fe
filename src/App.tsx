/*
 * @Author: Youzege
 * @Date: 2022-10-20 15:31:56
 * @LastEditors: Youzege
 * @LastEditTime: 2022-10-26 22:26:24
 */
import {  useState } from 'react'
import './App.css'
import { NameContext } from './Demo/ContextComponent/Context'
import { ComponentA } from './Demo/ContextComponent/ContextComponent'

function App () {
  const [componentName, setComponentName] = useState('Youzege')

  return (
    <NameContext.Provider value={componentName}>
      <div className='App'>
        <p>Hello FullStack</p>
        <ComponentA></ComponentA>
      </div>
    </NameContext.Provider>
  )
}

export default App
