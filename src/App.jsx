import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Components/Footer'
import NavHeader from './Components/NavHeader'
import RoutesIndex from './routes/index'

function App () {
  return (
    <>
      <BrowserRouter>
        <NavHeader />
        <RoutesIndex />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
