import { EVENTS } from '../utils/consts'

export default function navigate(href) {
  window.history.pushState({}, null, href)
  const navEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navEvent)
}
