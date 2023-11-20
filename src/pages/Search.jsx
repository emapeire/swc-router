/* eslint-disable react/prop-types */
export default function SearchPage({ routeParams }) {
  return (
    <h1>
      You have searched{' '}
      <span style={{ color: 'skyblue' }}>{routeParams.query}</span>
    </h1>
  )
}
