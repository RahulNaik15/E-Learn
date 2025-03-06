import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Courses from './courses/Courses'

function App() {
  

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white' >

        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/course" element={<Courses></Courses>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
      
      
    </>
  )
}

export default App
