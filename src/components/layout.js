import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children, author }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>

        <div style={{display: "flex", justifyItems: "left", flexDirection: "column"}}>
          <div>© {new Date().getFullYear()}, {author.name}</div>
          <div style={{display:"flex",alignItems: "center", flexDirection: "row"}}>
            <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/" style={{display:"contents"}}>
              <img alt="Creative Commons License" style={{borderWidth: 0}} src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" />
            </a>
            <div>
              This work is licensed under a <a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>
            </div>
          </div>
        </div>
        Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
