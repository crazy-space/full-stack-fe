/*
 * @Author: Youzege
 * @Date: 2022-10-20 15:31:56
 * @LastEditors: Youzege
 * @LastEditTime: 2022-10-27 21:13:06
 */
import './App.css'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { About, Home, Login } from './Demo/RouterPages'
/**
 * BrowserRouter - 声明一个非Hash模式路由
 * Link - 指定跳转 to 地址
 * Routes - 路由出口
 * Route - 路径和组件的关系 path 路径 element 组件 成对出现
 * 
 */

function App () {
  return (
    <div className='App'>
      <p>Hello FullStack</p>
      <p>路由 👇</p>
      <BrowserRouter>
        <Link to='/'>首页 🏠</Link>
        <Link to='/about'>关于 😯</Link>
        <Routes>
          <Route path='/' element={ < Home /> }></Route>
          <Route path='/about/:id' element={ < About /> }></Route>
          <Route path='/login' element={ <Login /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
