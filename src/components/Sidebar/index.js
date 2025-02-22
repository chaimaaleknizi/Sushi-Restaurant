import React from 'react';
import {
     SidebarContainer,
     Icon, 
     CloseIcon, 
     SidebarMenu, 
     SidebarLink, 
     SidebarRoute, 
     SideBtnWrap} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Sushi</SidebarLink>
                <SidebarLink to="/">Pizza</SidebarLink>
                <SidebarLink to="/">Dessert</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    );
};

export default Sidebar;
