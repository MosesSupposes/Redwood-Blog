import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <header>
        <h1>Redwood Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <p>
          This site was created to demostrate my mastery of Redwood.
          Remember: chickens are friends, not food!
        </p>
        <Link to={routes.home()}>Return home</Link>
      </main>

    </>
  )
}

export default AboutPage