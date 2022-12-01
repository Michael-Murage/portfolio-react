import { useState } from 'react'
import '../styles/App.css'
import Achievements from './Achievements'
import Footer from './Footer'
import Loading from './Loading'
import Navbar from './Navbar'
import WhoAmI from './WhoAmI'

function App() {

	try {
		return (
    <div>
			<Navbar/>
            <WhoAmI/>
            <Achievements/>
            <Footer/>
    </div>
  )
	} catch (error) {
		return <Loading/>
	}

  
}

export default App
