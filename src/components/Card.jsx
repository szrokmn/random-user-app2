import React, {useState, useEffcet} from 'react'
import cardStyle from "./Card.module.scss"
import axios from "axios"
const url ="http://randomuser.me/api/"
const Card = () => {
    const [personInfo, setPersonInfo] = useState({})
    const [loading, setLoading] = useState(false)
    const [hoverData, setHoverData] = useState({
        text1:"",
        text2:""
    })

    const apiFetcher = async()=> {
        setLoading(true)
    try {       
            const response = await axios(url);  
            const person = response.data.esults[0];
            const {email, gender, phone, dob:{age}, picture:{large:image}, name:{title, first, last}, location:{country}, } = person;
    } catch (error) {
        console.log(error)
    }    
    setLoading(false)    
    }

    useEffect(() => {
      apiFetcher()
    }, [])
    
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
