import React from 'react';
import { SidebarContainer, Icon , CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='sobre' onClick={toggle} >
                        Sobre
                    </SidebarLink>
                    <SidebarLink to='descobrir' onClick={toggle}>
                        Descobrir
                    </SidebarLink>
                    <SidebarLink to='servicos' onClick={toggle}>
                        Servicos
                    </SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>
                        Sobre
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to='signin'>Sign In</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
