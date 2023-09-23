import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

        <p>
          This site was created to demostrate my mastery of Redwood.<br/>
          Remember: chickens are friends, not food!
        </p>
    </>
  )
}

export default AboutPage
