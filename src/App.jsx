import Router from './components/Router'
import AboutPage from './pages/About'
import HomePage from './pages/Home'

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  }
]

export default function App() {
  return (
    <main>
      <Router routes={routes} defaultComponent={() => <h1>404</h1>} />
    </main>
  )
}
