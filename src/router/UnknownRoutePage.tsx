import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { HomePage } from '../pages/home/HomePage'

export function UnknownRoutePage() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/', { replace: true })
  }, [navigate])

  return <HomePage />
}
