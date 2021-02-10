import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
/*import { IconContext} from 'react-icons/lib';*/
import {Nav , NavbarConteiner , NavLogo , MobileIcon ,
   NavMenu, NavItem , NavLinks, NavBtn, NavBtnLink } from './NavbarElements';


const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80){
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])
    return (
      <>
        <Nav scrollNav={scrollNav}>
            <NavbarConteiner>
                <NavLogo to='/'>dolla</NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars/>
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to='sobre'>Sobre</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='descobrir'>Descobrir</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='servicos'>Servicos</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='signup'>Sign Up</NavLinks>
                  </NavItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to='signin'>Sign in</NavBtnLink>
                </NavBtn>
            </NavbarConteiner>
        </Nav>
      </>
    );
};

export default Navbar;
