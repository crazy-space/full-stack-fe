/*
 * @Author: Youzege
 * @Date: 2022-10-26 20:09:34
 * @LastEditors: Youzege
 * @LastEditTime: 2022-10-26 20:14:47
 */
import { useState } from "react"

/**
 * 获取滚动条距离顶部的高度
 * 
 * use -> const y = useWindowScroll()
 * 
 * @returns number[]
 */
export const useWindowScroll = () => {
  const [y, setY] = useState(0)
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollTop
    setY(h)
  })
  return [y]
}