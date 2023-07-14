import { Route, Routes } from 'react-router-dom'
import Items from './pages/items/Items'
import Footer from './components/footer/Footer'

// TODO create header & footer
function App() {
  return (
    <>
      <Routes>
        <Route path='/items' element={<Items />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
