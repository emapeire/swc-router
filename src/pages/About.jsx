import Link from '../components/Link'

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src='https://avatars.githubusercontent.com/u/63935846?v=4'
          alt="Github's profile picture"
          width={250}
          height={250}
        />
      </div>
      <p>
        This is the about page for Create your own React Router from scratch
      </p>
      <Link to='/'>Home</Link>
    </>
  )
}
