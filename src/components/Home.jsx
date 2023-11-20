import { navigate } from '../lib/navigate'

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>This is the home page for Create your own React Router from scratch</p>
      <button onClick={() => navigate('/about')}>About me</button>
    </>
  )
}
