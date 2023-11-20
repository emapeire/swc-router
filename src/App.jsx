import Route from './components/Route'
import Router from './components/Router'
import PageNotFound from './pages/404'
import AboutPage from './pages/About'
import HomePage from './pages/Home'
import SearchPage from './pages/Search'

const routes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

export default function App() {
  return (
    <main>
      <Router routes={routes} defaultComponent={PageNotFound}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>
    </main>
  )
}
