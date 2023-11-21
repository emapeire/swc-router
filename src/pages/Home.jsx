/* eslint-disable react/prop-types */
import Link from '../components/Link'
import useLang from '../hook/useLang'
import { homeLang } from '../lang/homeLang'

export default function HomePage({ routeParams }) {
  const { lang } = routeParams
  const { title, description, link } = useLang(lang, homeLang)

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to='/about'>{link}</Link>
    </>
  )
}
