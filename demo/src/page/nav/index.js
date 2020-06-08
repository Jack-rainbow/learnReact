import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './style.css'
export default class Nav extends React.Component{
    render() {
        return(
                <ul>
                    <li>
                        <NavLink exact  to="/">主业</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/demo">demo</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/mine">我的</NavLink>
                    </li>
                    <li>
                        <NavLink  exact to="/home">home</NavLink>
                    </li>
                    <li>
                        <NavLink  exact to="/home/my">home/我的</NavLink>
                    </li>
                </ul>
        )
    }
}