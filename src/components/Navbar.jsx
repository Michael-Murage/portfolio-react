import React from 'react'

function Navbar() {
	return (
		<nav id="nav-container">
            <img src="./images/techglobe.jpg" alt="tech-globe" className="nav"/>
            <h1 id="title-name">MICHAEL MURAGE</h1>
            <div class="nav-contacts">
                <a href="https://twitter.com/mickey_murage"><img id="twitter" src="./images/twittericon.png" alt="twitter" /></a>
            </div>
        </nav>
	)
}

export default Navbar