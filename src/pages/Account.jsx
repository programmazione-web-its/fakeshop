import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
export default function Account() {
  const location = useLocation()
  const { token } = location.state || {}

  const [userDetails, setUserDetails] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    if (!token) return
    const getUserDetails = async () => {
      setIsLoading(true)
      try {
        const res = await fetch('https://dummyjson.com/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (!res.ok) {
          throw new Error('Something went wrong')
        }

        const data = await res.json()
        setUserDetails(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    getUserDetails()
  }, [token])

  return (
    <div className='my-4 container mx-auto px-4'>
      {isLoading && <p>Please wait...</p>}
      {error && <p>Ops!Something went wrong</p>}
      {userDetails ? (
        <div className='text-left'>
          <h1>Ciao {userDetails?.firstName}!</h1>
          {userDetails && (
            <div className='my-3 flex gap-2 text-sm'>
              <div className='rounded-full w-[40px] h-[40px] grow-0 shrink-0 border border-cyan-800  overflow-hidden'>
                <img src={userDetails.image} />
              </div>
              <div className='text-left'>
                <p>
                  {userDetails?.firstName} {userDetails?.lastName}
                </p>
                <p>{userDetails.age}</p>
                <h5>Role: {userDetails.role} </h5>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className='text-xl'>
          Non hai il permesso per visualizzare questa pagina
        </div>
      )}
    </div>
  )
}
