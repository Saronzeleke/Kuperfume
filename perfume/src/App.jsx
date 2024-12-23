

import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import TopNav from './component/nav'
import About from './component/About'

import Contact from './component/contact'
import Home from './component/home'
import ThemeToggle from './component/ThemeToggle Component'



function App() {
 

  return (
    <>
     <TopNav/>
     <ThemeToggle/>
      <Home/>
      
            <About/>
           
          <Contact/>
         
        
    </>
  )
}

export default App
