/* eslint-disable react/prop-types */
import { EVENTS } from '../utils/consts'
import { useEffect, useState, Children } from 'react'
import { match } from 'path-to-regexp'
import { getCurrentPath } from '../utils/utils'

export default function Router({
  children,
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>
}) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath())

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath())
    }
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  // Add routes from children <Route /> components
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'
    return isRoute ? props : null
  })

  const routeToUse = routes.concat(routesFromChildren).filter(Boolean)

  const Page = routeToUse.find(({ path }) => {
    if (path === currentPath) return true

    // We have used path-to-regexp to match dinamic routes:
    // /search/:query <-- this is a dinamic route
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)

    if (!matched) return false

    // We have saved the route params in the routeParams variable
    // so we can pass them to the page component:
    // /search/:query <-- matched.params.query === 'javascript'
    routeParams = matched.params
    return true
  })?.Component

  return Page ? (
    <Page routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  )
}
