import Router from './components/Router'
import routes from './lib/routes'
import PageNotFound from './pages/404'

export default function App() {
  return (
    <main>
      <Router routes={routes} defaultComponent={PageNotFound} />
    </main>
  )
}
