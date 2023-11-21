/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import Link from '../components/Link'

export default function SearchPage({ routeParams }) {
  useEffect(() => {
    document.title = `${routeParams.query}`
  }, [routeParams])

  return (
    <h1>
      You have searched{' '}
      <Link to={routeParams.query}>
        <span style={{ color: 'skyblue', textDecoration: 'underline' }}>
          {routeParams.query}
        </span>
      </Link>
    </h1>
  )
}
