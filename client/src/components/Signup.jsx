import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import formSvg from '../assets/images/formweb.webp'
import logoBrand from '../assets/images/brandLogo.png'
import googleIcon from '../assets/images/googleicon.svg'

//create useAuth
import { useAuth } from '../context/Authcontex'

// import the  react-router-dom
import { useNavigate } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const Signup = () => {
  const { login } = useAuth()

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    birthdate: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    // Send the data to the server
    try {
      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()
      login({ name: data.name, email: formData.email })

      if (data) {
        navigate('/')
      }

      // Handle response (e.g., redirect to another page, show success message, etc.)
    } catch (error) {
      console.error('Error submitting form data:', error)
    }
  }

  useEffect(() => {
    // Scroll-triggered animations

    gsap.fromTo(
      '.animate-logo',
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.animate-logo',
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1
        }
      }
    )

    gsap.fromTo(
      '.animate-heading',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.animate-heading',
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1
        }
      }
    )

    gsap.fromTo(
      '.animate-subheading',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.animate-subheading',
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1
        }
      }
    )

    gsap.fromTo(
      '.animate-form',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.animate-form',
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1
        }
      }
    )

    gsap.fromTo(
      '.animate-background',
      { scale: 1.1, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.animate-background',
          start: 'top 100%',
          end: 'top 30%',
          scrub: 1
        }
      }
    )
  }, [])

  return (
    <section className='flex justify-between items-center w-screen h-screen bg-green-100 '>
      {/* Left side of the form */}
      <div className='w-[650px] flex flex-col gap-1 justify-center items-center'>
        <h1 className='font-semibold text-2xl animate-heading mt-5'>
          Welcome To BleepGot
        </h1>
        <small className='animate-subheading'>Find new Ideas To Try</small>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-5 items-center animate-form'
        >
            <div className='flex flex-col'>
            <label htmlFor='username'>User Name</label>
            <input
              className='w-64 h-10 px-4 mt-2 border rounded-lg'
              type='text'
              name='user'
              value={formData.email}
              onChange={handleChange}
              placeholder='User Name'
              required
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email'>Email</label>
            <input
              className='w-64 h-10 px-4 mt-2 border rounded-lg'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email'
              required
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='password'>Password</label>
            <input
              className='w-64 h-10 px-4 mt-2 border rounded-lg'
              type='password'
              name='password'
              minlength='8'
              value={formData.password}
              onChange={handleChange}
              placeholder='Password'
              required
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='birthday'>Birthdate</label>
            <input
              className='w-64 h-10 px-4 mt-2 border rounded-lg'
              type='date'
              name='birthdate'
              value={formData.birthdate}
              onChange={handleChange}
              required
            />
          </div>

          <button className='px-9 py-4 w-52 bg-red-700 text-white rounded-full hover:bg-red-800'>
            Continue
          </button>

          <small>
            <b>OR</b>
          </small>

          <button className='px-9 py-2 gap-5 items-center border border-gray-700 rounded-full flex hover:bg-slate-100'>
            <img src={googleIcon} alt='Google' className='w-4' />
            continue with google
          </button>

          <p className='text-center w-96 text-sm opacity-50'>
            By continuing, you agree to BleepGOT's Terms of Service and
            acknowledge that you have read our Privacy Policy and Notice at
            Collection.
          </p>
        </form>
      </div>

      {/* Right side with background image */}
      <div className='w-[48.8%] h-full relative'>
        <img
          src={formSvg}
          className='absolute w-full h-full object-cover animate-background'
          alt='Background'
        />

        <div className='w-full h-full absolute bg-gray-800 opacity-80 flex justify-center items-center'>
          <h1 className='text-white font-bold text-7xl tracking-wide leading-snug'>
            Sign Up To <br /> Get Your <br /> Idea
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Signup
