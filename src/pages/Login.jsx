import { useState, useEffect } from 'react'
import { useNavigate, Form } from 'react-router'

import { EyeIcon, EyeSlashIcon } from '@phosphor-icons/react'

export default function Login() {
  const [user, setUser] = useState()
  const [token, setToken] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  const [showPass, setShowPass] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const username = e.target.elements.username.value
    const password = e.target.elements.password.value
    setIsLoading(true)
    try {
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })

      if (!res.ok) {
        console.log('error')
        const dataError = await res.json()
        throw new Error(dataError.message || 'Something went wrong')
      }
      const data = await res.json()
      setUser(data)
      localStorage.setItem('token', data.accessToken)

      setError()
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    const localToken = localStorage.getItem('token')
    setToken(localToken)
  }, [])

  useEffect(() => {
    /* Qui, una volta che ottieniamo il token possiamo fare il redirect
  con useNavigate */

    if (!token) return
    navigate('/account', { state: { token } })
  }, [token])

  return (
    <div className='container mx-auto'>
      <div className='lg:w-lg mx-auto'>
        <Form
          className=' flex flex-col gap-3 bg-gray-100 p-6 my-3 rounded-md'
          noValidate
          method='post'
        >
          <input
            className='bg-white border border-primary w-full px-2'
            name='username'
            type='text'
            placeholder='Username'
          />
          <div className='relative flex items-center justify-center'>
            <input
              className='bg-white border border-primary w-full px-2'
              name='password'
              type={showPass ? 'text' : 'password'}
              placeholder='Password'
            />
            <span
              onClick={() => setShowPass(!showPass)}
              className='px-2 absolute  right-0 inline-block'
            >
              {showPass ? <EyeSlashIcon /> : <EyeIcon />}
            </span>
          </div>
          <button className='bg-primary text-white rounded-md' type='submit'>
            Login
          </button>
        </Form>
        {error && <div className='bg-red-100 text-red-500'>{error}</div>}
        {user && (
          <div className='bg-green-100 text-green-500'>
            Login avvenuto con successo
          </div>
        )}
        <div className='text-xs my-3 mx-auto'>
          "username": "emilys", "password": "emilyspass",
        </div>
      </div>
    </div>
  )
}
