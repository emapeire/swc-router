/* eslint-disable react/prop-types */
import { BUTTONS, EVENTS } from '../utils/consts'

export function Link({ target, to, ...props }) {
  const navigate = (href) => {
    window.history.pushState({}, null, href)
    const navEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navEvent)
  }

  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTONS.LEFT
    const isModifierEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifierEvent) {
      event.preventDefault()
      navigate(to)
      window.scrollTo(0, 0)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
