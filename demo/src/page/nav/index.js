import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
export default class Nav extends React.Component{
    render() {
        return(
                <ul>
                    <li>
                        <Link  to="/">主业</Link>
                    </li>
                    <li>
                        <Link  to="/demo">demo</Link>
                    </li>
                    <li>
                        <Link  to="/mine">我的</Link>
                    </li>
                    <li>
                        <Link  to="/home">home</Link>
                    </li>
                    <li>
                        <Link  to="/home/my">home/我的</Link>
                    </li>
                </ul>
        )
    }
}