import React from "react"

const Footer = () => (
  <footer>
    <div className="copy">
      © {new Date().getFullYear()}, Shafeh.org
          {`, Developer: `}
      <a href="https://www.sharshi.com">Shersheial Borisute</a>
      <br />
            email: <a href="mailto:mail@shafeh.org">📧</a>
    </div>
  </footer>
)

export default Footer
