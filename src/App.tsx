import { Route, Routes } from 'react-router-dom'
import Items from './pages/items/Items'

// TODO create header & footer
function App() {
  return (
    <>
      <Routes>
        <Route path='/items' element={<Items />} />
      </Routes>
    </>
  )
}

export default App
