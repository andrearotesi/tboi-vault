import { Route, Routes } from 'react-router-dom'
import Items from './pages/items/Items'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

// TODO create header & footer
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/items' element={<Items/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
