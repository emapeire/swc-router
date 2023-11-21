/* eslint-disable react/prop-types */
import { Link } from '../components/Link'
import useLang from '../hook/useLang'
import { aboutLang } from '../lang/aboutLang'

export default function AboutPage({ routeParams }) {
  const { lang } = routeParams
  const { title, description, link } = useLang(lang, aboutLang)

  return (
    <>
      <h1>{title}</h1>
      <div>
        <img src='icon.svg' alt='Package picture' width={250} height={250} />
      </div>
      <p>{description}</p>
      <p>
        <a
          href='https://www.npmjs.com/package/swc-router'
          target='_blank'
          rel='noreferrer'
        >
          SWC-ROUTER
        </a>{' '}
        package ⚡️
      </p>
      <Link to='/'>{link}</Link>
    </>
  )
}
