/* eslint-disable react/prop-types */
import Link from '../components/Link'
import useLang from '../hook/useLang'
import { aboutLang } from '../lang/aboutLang'

export default function AboutPage({ routeParams }) {
  const { lang } = routeParams
  const { title, description, link } = useLang(lang, aboutLang)

  return (
    <>
      <h1>{title}</h1>
      <div>
        <img
          src='https://avatars.githubusercontent.com/u/63935846?v=4'
          alt="Github's profile picture"
          width={250}
          height={250}
        />
      </div>
      <p>{description}</p>
      <Link to='/'>{link}</Link>
    </>
  )
}
