import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Megillah = () => (
  <Layout>
    <SEO title="Megillah" />
    <h1>Megillah</h1>
    <p>Practice for Purim's Megillah reading.</p>
    <ol>
      <li>Tap the text to switch from with Nikkud and Trop (Taamim/Simanim) to plain text. And vice-versa.</li>
      <li>Zoom in and out with the provided controls.</li>
      <li>Change the Perek using the "Choose Perek" drop-down menu.</li>
    </ol>

    <div className="app-links">
      <a href="https://itunes.apple.com/us/app/megillah-tikkun-korim/id1088031571?mt=8">
        <img src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2015-12-14&kind=iossoftware&bubble=ios_apps" />
      </a>
      <a href='https://play.google.com/store/apps/details?id=com.sharshi.megillah'>
        <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
      </a>
    </div>
  </Layout>
)

export default Megillah
