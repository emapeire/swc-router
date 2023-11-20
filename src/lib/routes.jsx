import AboutPage from '../pages/About'
import HomePage from '../pages/Home'

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: () => <h1>Seeker</h1>
  }
]

export default routes
