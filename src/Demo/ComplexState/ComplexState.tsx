import { useState } from "react"

/*
 * @Author: Youzege
 * @Date: 2022-10-20 15:50:26
 * @LastEditors: Youzege
 * @LastEditTime: 2022-10-20 20:03:15
 */
const History = ({allClicks}: {allClicks: []}) => {
  if(allClicks.length === 0) {
    return (
      <p>
        no click
      </p>
    ) 
  }else {
    return (
      <p>
        button click history: { allClicks.join(' ') }
      </p>
    )
  }
}

const Button = ({ handleClick, text }: { handleClick: () => void, text: string  }) => (
  <button onClick={handleClick}>{ text }</button>
)

const ComplexState = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })
  const [allClicks, setAll] = useState([])

  // 点击 Left 发生 ？
  const handleClickLeft = () => {
    setAll(allClicks.concat('L' as any))
    const Left = {
      ...clicks,
      left: clicks.left + 1
    }
    setClicks(Left)
  }
  // 点击 Right 发生 ？
  // const handleClickRight = () => setClicks({ ...clicks, right: clicks.right + 1})
  const handleClickRight = () => {
    setAll(allClicks.concat('R' as any))
    const Right = {
      ...clicks,
      right: clicks.right + 1
    }
    setClicks(Right)
  }

  // 记录点击

  return (
    <div>
      复杂状态: {clicks.left} && {clicks.right}
      <div className="btn-group">
        <Button handleClick={handleClickLeft} text={'复杂状态Left'}/>
        <Button handleClick={handleClickRight} text={'复杂状态Right'}/>
      </div>
      <History allClicks={allClicks as []} />
    </div>
  )
}

export default ComplexState