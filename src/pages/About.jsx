/* eslint-disable react/prop-types */
import { Link } from '../components/Link'
import useLang from '../hook/useLang'
import { aboutLang } from '../lang/aboutLang'

export default function AboutPage({ routeParams }) {
  const { lang } = routeParams
  const { title, description, link, gh, npm } = useLang(lang, aboutLang)

  return (
    <>
      <h1>{title} ⚡️</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '2rem',
          margin: '1rem 10rem 1rem 9rem',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img src='icon.svg' alt='Package picture' width={50} height={50} />
        <p>{description}.</p>
      </div>
      <p>
        ⚡️ {gh}
        <a
          href='https://www.github.com/emapeire/swc-router'
          target='_blank'
          rel='noreferrer'
        >
          swc-router
        </a>
        .
      </p>
      <p>
        ⚡️ {npm}
        <a
          href='https://www.npmjs.com/package/swc-router'
          target='_blank'
          rel='noreferrer'
        >
          swc-router
        </a>
        .
      </p>
      <div style={{ padding: '1rem' }}>
        <Link to='/'>{link}</Link>
      </div>
    </>
  )
}
