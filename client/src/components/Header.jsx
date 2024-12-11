import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import logo from '../assets/images/brandLogo.png'

import { IoLogOut } from 'react-icons/io5'

import { useAuth } from '../context/Authcontex'

const Header = () => {
  const { user, logout } = useAuth()

  const navRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline()
    tl.from('.navBrand', {
      opacity: 0
    })

    tl.from('.menuStatus', {
      y: -45,
      stagger: 0.1
    })

    tl.from('.logo', {
      scale: 1.3,
      rotate: 360,
      duration: 0.5
    })

    tl.from('.rightStatus', {
      opacity: 0,
      y: -9
    })
  }, [])

  const navLink = [
    {
      path: '/today',
      name: 'Today'
    },
    {
      path: '/watch',
      name: 'Watch'
    },
    {
      path: '/about',
      name: 'About'
    },
    {
      path: '/business',
      name: 'Business'
    },
    {
      path: '/blog',
      name: 'Blog'
    }
  ]

  return (
    <nav
      ref={navRef}
      className='sticky top-0 navBrand flex justify-around items-center py-3 bg-slate-100 w-screen'
    >
      <div className='leftState flex items-center gap-10'>
        <img
          src={logo}
          className='w-10 h-10 object-cover rounded-full duration-500  hover:rotate-[360deg] cursor-pointer border p-1 border-slate-400 logo'
          alt='Bleepgot_Logo'
        />

        <div className='flex gap-6' style={{ fontWeight: '500' }}>
          {navLink.map((item, index) => {
            return (
              <Link className='menuStatus' key={index} to={item.path}>
                {item.name}
              </Link>
            )
          })}
        </div>
      </div>
      <div className='rightStatus flex gap-6' style={{ fontWeight: '500' }}>
        <div className='flex items-center gap-1'>
          <input
            type='text'
            placeholder='Search...'
            className='p-2 px-4 bg-slate-100 text-gray-800 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out shadow-sm w-64'
          />

          <button className='p-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300 ease-in-out flex items-center justify-center'>
            <CiSearch className='w-7 h-6' />
          </button>
        </div>

        <div className='flex gap-6'>
          {user ? (
            <div className='flex gap-4 items-center'>
              <h1>Welcome, {user.email.split('@')[0]}</h1>
              <button
                title='Logout'
                onClick={logout}
                className='px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out'
              >
                <IoLogOut />
              </button>
            </div>
          ) : (
            <div className='flex gap-4'>
              {/* Login Button */}
              <button className='px-6 py-2 bg-gray-200  rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 hover:text-white transition duration-300 ease-in-out'>
                Login
              </button>

              {/* Sign Up Button */}
              <Link
                to='/signup'
                className='px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out'
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
