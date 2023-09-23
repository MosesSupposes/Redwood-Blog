import { Link } from "@redwoodjs/router"
import { routes } from "@redwoodjs/router"

const BlogLayout = ({ children }) => {
  return (
  <>
      <header>
        <h1>
          <Link to={routes.home()}>
            Miti Blog
          </Link>
          </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Miti Blog</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>

    <main>{children}</main>
</>
  )
}

export default BlogLayout
