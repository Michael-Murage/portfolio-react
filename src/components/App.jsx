import '../styles/App.css'
import Achievements from './Achievements'
import Footer from './Footer'
import Loading from './Loading'
import Navbar from './Navbar'
import WhoAmI from './WhoAmI'

function App() {

	try {
		return (
    <div style={{backgroundColor: '#222', paddingLeft: "25px", paddingRight: "25px"}}>
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
