import { useContext } from "react"
import { NameContext } from "./Context"

/*
 * @Author: Youzege
 * @Date: 2022-10-26 22:15:05
 * @LastEditors: Youzege
 * @LastEditTime: 2022-10-26 22:26:46
 */

const ComponentB = () => {
  const name = useContext(NameContext)
  return (
    <div>
      <p>ComponentB</p>
      <p>Parent data - { name }</p>
    </div>
  )
}

export const ComponentA = () => {
  return (
    <div>
      <p>ComponentA</p>
      <p>Parent data - </p>
      <ComponentB></ComponentB>
    </div>
  )
}