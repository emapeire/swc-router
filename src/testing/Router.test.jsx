import { describe, it, expect, beforeEach, vi } from 'vitest'
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import { Router } from '../components/Router'
import { Route } from '../components/Route'
import { Link } from '../components/Link'
import { getCurrentPath } from '../utils/getCurrentPath'

vi.mock('../utils/getCurrentPath', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should render without routes params', () => {
    render(<Router routes={[]} />)
    expect(true).toBe(true)
  })

  it('should render 404 if no routes match', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    expect(screen.getByText('404')).toBeTruthy()
  })

  it('should render the component of the matching route', () => {
    const routes = [
      {
        path: '/',
        Component: () => <h1>Home</h1>,
        expectedText: 'Home'
      },
      {
        path: '/about',
        Component: () => <h1>About</h1>,
        expectedText: 'About'
      }
    ]
    routes.forEach((route) => {
      getCurrentPath.mockReturnValue(route.path)
      render(<Router routes={routes} />)
      expect(screen.getByText(route.expectedText)).toBeTruthy()
    })
  })

  it('should navigate using Links components', () => {
    getCurrentPath.mockReturnValue('/')
    render(
      <Router>
        <Route
          path='/'
          Component={() => (
            <>
              <h1>Home</h1>
              <Link to='/about'>About</Link>
            </>
          )}
        />
        <Route path='/about' Component={() => <h1>About</h1>} />
      </Router>
    )

    // Click on the Link component
    screen.getByText('About').click()

    // Check if the route has changed
    waitFor(() => {
      expect(getCurrentPath()).toBe('/about')
      expect(screen.getByText('About')).toBeTruthy()
    })
  })
})
