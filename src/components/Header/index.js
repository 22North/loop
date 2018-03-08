import React from 'react'

const Header = (props) => 
    <header className="header">
        <ul>
            <li><a href="/objectives">{"Objectives"}</a></li>
            <li><a href="/feedback">{"Feedback"}</a></li>
            <li><a href="/my-team">{"My Team."}</a></li>
        </ul>
    </header>

export default Header