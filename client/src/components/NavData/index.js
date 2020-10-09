import React from "react";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";

export const NavbarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Recipes',
        path: '/recipes',
        icon: <GiIcons.GiFruitBowl />,
        cName: 'nav-text'
    },
    {
        title: 'Saved',
        path: '/saved',
        icon: <GiIcons.GiSpellBook />,
        cName: 'nav-text'
    },
    {
        title: 'Sign Up',
        path: '/signup',
        icon: <MdIcons.MdAccountCircle />,
        cName: 'nav-text'
    },

]