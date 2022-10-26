/*
 * @Author: Youzege
 * @Date: 2022-10-26 21:55:45
 * @LastEditors: Youzege
 * @LastEditTime: 2022-10-26 22:01:34
 */
import { useEffect } from 'react';

const getSometing = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const json = await res.json()
  console.log(json)
  return json
}

export const fetchData = () => {
  useEffect(() => {
    getSometing()
  }, [])

  return null
}