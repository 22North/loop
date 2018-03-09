import React from 'react'
import { NavLink } from "react-router-dom";

import './style.css'

const Header = (props) => 
    <header className="header">

        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="header__logo float-left">
                        <NavLink to="/">{"loop"}</NavLink>
                    </div>
                </div>
                <div className="col-sm-6">
                    <ul className="main-navigation">
                        <li className="main-navigation__item float-left"><NavLink to="/objectives" activeClassName="active" className="main-navigation__link">{"Objectives"}</NavLink></li>
                        <li className="main-navigation__item float-left"><NavLink to="/feedback" activeClassName="active" className="main-navigation__link">{"Feedback"}</NavLink></li>
                        <li className="main-navigation__item float-left"><NavLink to="/my-team" activeClassName="active" className="main-navigation__link">{"My Team."}</NavLink></li>
                    </ul>
                    <div className="avatar">

                    </div>
                </div>

            </div>
        </div>

        
    </header>

export default Header