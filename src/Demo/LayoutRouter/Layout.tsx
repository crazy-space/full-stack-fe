/*
 * @Author: Youzege
 * @Date: 2022-10-27 21:22:01
 * @LastEditors: Youzege
 * @LastEditTime: 2022-10-27 22:28:40
 */
import { Outlet } from 'react-router-dom'
export const Layout = () => {
  return (
    <div>
      <p>this Layout</p>
      {/* 嵌套 */}
      <Outlet />
    </div>
  )
}