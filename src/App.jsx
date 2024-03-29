
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='skill' element={<Skills/>}/>
          <Route path='work' element={<Work/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
