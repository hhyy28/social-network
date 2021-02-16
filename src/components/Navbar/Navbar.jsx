import React from 'react';
import { NavLink } from 'react-router-dom';
import  s from './Navbar.module.css';
const Navbar = () =>{ 
     return <nav className={s.nav}> 
     <div  className={s.item}><NavLink to='/Profile' activeClassName={s.active}>profile</NavLink> </div>
     <div className={s.item}><NavLink to='/Dialogs' activeClassName={s.active}>masseges</NavLink></div>
     <div className={s.item}><NavLink to='News' activeClassName={s.active}>news</NavLink></div>
     <div  className={s.item}><NavLink to='/Music' activeClassName={s.active}>music</NavLink></div>
     <div  className={s.item}><NavLink to='/settings' activeClassName={s.active}>settings</NavLink></div>
 </nav>
}
export default Navbar