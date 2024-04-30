import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import Expenses from './pages/Expenses'
import Income from './pages/Income'
import Report from './pages/Report'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header/>
    
    <Routes>
      <Route path='/' element={<Landingpage/>} />
      <Route path='/expenses' element={<Expenses/>} />
      <Route path='/income' element={<Income/>} />
      <Route path='/report' element={<Report/>}/>
    </Routes>

    <Footer/>
    </>
  )
}

export default App
