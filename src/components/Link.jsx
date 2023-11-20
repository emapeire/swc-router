/* eslint-disable react/prop-types */
import navigate from '../lib/navigate'

export default function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    event.preventDefault()
    navigate(to)
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
