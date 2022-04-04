import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

import SiddurIcon from "../images/siddur-icon.png";
import TikkunIcon from "../images/tikkun-icon.png";
import MegillahIcon from "../images/megillah-icon.png";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="main-bill">
      <h1>Shafeh: Your Bookcase.</h1>
      <p>We provide resources for common Jewish practices.</p>
    </div>

    <div className="app-list">
      <div className="app-list-card">
        <img src={SiddurIcon} alt="Siddur Torah Ohr, Chabad" />
        <div>
          <h4>Siddur Torah Ohr, Chabad</h4>
          <p>Only displays the text that you need to Daven now</p>
          <Link to="/siddur">See More</Link>
        </div>
      </div>
      <div className="app-list-card">
        <img src={TikkunIcon} alt="Tikkun Korim, Torah" />
        <div>
          <h4>Tikkun Korim, Torah</h4>
          <p>Choose a Parsha from any Chumash including double Parshiot. Makes practicing much easier.</p>
          <Link to="/tikkun">See More</Link>
        </div>
      </div>
      <div className="app-list-card">
        <img src={MegillahIcon} alt="Tikkun Korim, Megillah" />
        <div>
          <h4>Tikkun Korim, Megillah</h4>
          <p>Practice for Purim's Megillah reading</p>
          <Link to="/megillah">See More</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
