/* eslint-disable react/prop-types */
import AboutPage from '../pages/About'
import HomePage from '../pages/Home'
import SearchPage from '../pages/Search'

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
    Component: SearchPage
  }
]

export default routes
