/* eslint-disable react/prop-types */
import { useEffect } from 'react'

export default function SearchPage({ routeParams }) {
  useEffect(() => {
    document.title = `${routeParams.query}`
  }, [routeParams])

  return (
    <h1>
      You have searched{' '}
      <span style={{ color: 'skyblue' }}>{routeParams.query}</span>
    </h1>
  )
}
