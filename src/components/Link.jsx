/* eslint-disable react/prop-types */
import navigate from '../lib/navigate'
import { BUTTONS } from '../utils/consts'

export default function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTONS.LEFT
    const isModifierEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifierEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
