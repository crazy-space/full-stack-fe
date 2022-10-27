/*
 * @Author: Youzege
 * @Date: 2022-10-20 15:31:56
 * @LastEditors: Youzege
 * @LastEditTime: 2022-10-27 22:50:46
 */
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './Demo/RouterPages'
import { Header, Layout, Main, NotFound } from './Demo/LayoutRouter'

function App () {
  return (
    <div className='App'>
      <p>Hello FullStack</p>
      <p>嵌套路由 👇</p>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Header />}></Route>
            <Route path='/main' element={<Main />}></Route>
          </Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
