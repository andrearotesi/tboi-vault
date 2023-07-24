import { Route, Routes } from 'react-router-dom'
import Items from './pages/items/Items'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import About from './pages/about/About'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Items/>} />
        <Route path='/items' element={<Items/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
