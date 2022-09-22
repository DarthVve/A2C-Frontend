import React,{useState} from 'react'
import styled from 'styled-components'
import { FiChevronDown } from 'react-icons/fi';

import {Link} from 'react-router-dom'

function UserProfileNav({dashboard,setIsLogin}) {
  const [showDropdown, setShowDropdown] = useState(false)
  const ProfileIcon ='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50';
  return (

    <Profile >
        <Link to='/update'>
          <img style={{borderRadius:"50%", width:"40px",height:"40px"}} 
              src= {ProfileIcon}
              alt='Profil Pic'/>
        </Link> 
        <FiChevronDown onClick={()=>setShowDropdown(!showDropdown)}/>
        <Dropdown showDropdown={showDropdown}>
        <Link to='update'><DropdownItem>  <img src={ProfileIcon} alt="" /> <span>Account</span> </DropdownItem></Link>
          <DropdownItem>  <span>Settings</span> </DropdownItem>
          <DropdownItem>  <span>Help Center</span> </DropdownItem>
          <DropdownItem > <span>Logout</span> </DropdownItem>
      </Dropdown>
      
    </Profile>

  )
}
const Profile = styled.div`
    display: flex;
    align-items: center;
    gap:10px;
    cursor: pointer;
    & img {
        width: 36px;
        border-radius: 50%;
    }
`
const Dropdown = styled.div`
    position: absolute;
    top: 100%;
    right: 10%;
    background-color: #fff;
    width: 226px;
    height: 180px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    z-index: 100;
    display: ${({showDropdown})=>(showDropdown ? 'block' : 'none')};
    transition: all 0.3s ease-in-out;  
    &.active {
        display: block;
    }
`
const DropdownItem = styled.div`
display: flex;
align-items: center;
gap: 15px;
color: #21334F;
font-weight: lighter;
margin: 15px 20px;
 & img {
        width: 24px;
 }
`
export default UserProfileNav