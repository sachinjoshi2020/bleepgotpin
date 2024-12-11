import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Today from './pages/Today'
import Watch from './pages/Watch'
import About from './pages/About'
import Business from './pages/Business'
import Blog from './pages/Blog'
import Signup from './components/Signup'

//authContext
import AuthProvider from './context/Authcontex'

import './App.css'
import Lenis from 'lenis'
import { useEffect } from 'react'

const App = () => {
  const routes = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/today',
      element: <Today />
    },
    {
      path: '/watch',
      element: <Watch />
    },

    {
      path: '/about',
      element: <About />
    },
    {
      path: '/business',
      element: <Business />
    },
    {
      path: '/blog',
      element: <Blog />
    },
    {
      path: '/signup',
      element: <Signup />
    }
  ]

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true
    })
  }, [])

  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          {routes.map((item, index) => {
            return <Route key={index} path={item.path} element={item.element} />
          })}
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
