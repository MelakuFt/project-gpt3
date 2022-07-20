import React, {useState} from 'react'
import './navbar.css'
import { RiBarChartHorizontalFill, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
//BEM means block element modifier
const Navbar = () => {
  const [toggleMenue, setToggleMenue] = useState(false)

  return (
    <div className='gpt3__navbar'>
       <div className='gpt3__navbar-links'>
         <div className='gpt3__navbar-links_logo'>
           <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#wgp">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
       </div>
       <div className='gpt3__navbar-sign'>
         <p>Sing in</p>
         <button type='button'>Sing up</button>
       </div>
       <div className='gpt3__navbar-menu'>
         {toggleMenue
          ? <RiCloseLine color="#fff" size={27} onClick={()=> setToggleMenue(false)} />
          : <RiBarChartHorizontalFill color="#fff" size={27} onClick={()=> setToggleMenue(true)} />
          }
          {toggleMenue && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
              <div className='gpt3__navbar-menu_container-links'>
                  <p><a href="#home">Home</a></p>
                  <p><a href="#wgpt3">What is GPT3?</a></p>
                  <p><a href="#possibility">Open AI</a></p>
                  <p><a href="#features">Case studies</a></p>
                  <p><a href="#blog">Library</a></p>
              </div>
              <div className="gpt3__navbar-menu_container-links-sign">
               <p>Sign in</p>
               <button type="button">Sign up</button>
              </div>
            </div>
          )}
       </div>

    </div>
  )
}

export default Navbar
