import { Suspense, lazy } from 'react'
import Route from './components/Route'
import Router from './components/Router'

const HomePage = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/About'))
const SearchPage = lazy(() => import('./pages/Search'))
const PageNotFound = lazy(() => import('./pages/404'))

const appRoutes = [
  {
    path: '/:lang/',
    Component: HomePage
  },
  {
    path: '/:lang/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

export default function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={PageNotFound}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}
