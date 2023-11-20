import Link from '../components/Link'

export default function PageNotFound() {
  return (
    <main>
      <div>
        <h1>This is NOT fine</h1>
        <img
          src='https://midu.dev/images/this-is-fine-404.gif'
          alt='This is NOT fine | 404'
        />
      </div>
      <Link to='/'>Go back to home</Link>
    </main>
  )
}
