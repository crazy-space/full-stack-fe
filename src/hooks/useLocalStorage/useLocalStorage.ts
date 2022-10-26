/*
 * @Author: Youzege
 * @Date: 2022-10-26 20:28:47
 * @LastEditors: Youzege
 * @LastEditTime: 2022-10-26 21:34:00
 */
import { useEffect, useState } from 'react'

/**
 * 将一条信息保存到本地
 * @param key 
 * @param defaultValue 
 * @returns 
 */
export const useLocalStorage = (key: string, defaultValue: any) => {
  const [message, setMessage] = useState(defaultValue)

  useEffect(() => {
    window.localStorage.setItem(key, message)
  }, [key, message])

  return [message, setMessage]
}
