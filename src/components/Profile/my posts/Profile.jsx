import React from 'react'; 
import './Profile.module.css'
import Myposts from './Myposts.jsx'
const Profile  = () =>{
     return <div className='content'>
    <img src='https://adrenaline-stadium.ru/media/11594/stadium_begemot-_3120_-_1440.jpg' height='700px'  width='1500px;' ></img>
    <Myposts/>

  </div>
}
export default Profile