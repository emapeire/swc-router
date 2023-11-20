import Link from '../components/Link'

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>This is the home page for Create your own React Router from scratch</p>
      <Link to='/about'>About me</Link>
    </>
  )
}
