import React from 'react'
import cardStyle from "./Card.module.scss"

const Card = () => {
    const [personInfo, setPersonInfo] = useState({})
  return (
    <div className={cardStyle.card}>
      <nav className={appStyle.navbar}>        
      </nav>
      <img className={appStyle.cwImage} src="" alt="" />
      <div></div>
      <div></div>
    </div>
  )
}

export default Card
