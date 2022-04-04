import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Tikkun = () => {
  const appLinks = (
    <div className="app-links">
      <a href="https://apps.apple.com/us/app/tikkun-korim-%D7%AA%D7%99%D7%A7%D7%95%D7%9F-%D7%A7%D7%95%D7%A8%D7%90%D7%99%D7%9D/id917018909?mt=8">
        <img src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2015-12-14&kind=iossoftware&bubble=ios_apps" />
      </a>
      <a href='https://play.google.com/store/apps/details?id=sharshi.torah&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
        <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
      </a>
    </div>
  )

  let features = [
    {
      title: "Simple Function",
      description: "Tap the text to switch from with Nikkud and Trop/Taamim/Simanim to without. And vice versa."
    },
    {
      title: "Easy Navigation",
      description: "Quickly switch from one Aliya to the next by swiping left and right or by tapping the arrows on the top left."
    },
    {
      title: "On The Go",
      description: "Tikkun Korim was designed with the small screen in mind, it only shows what you need when you need it, a simple tap gets you where you need."
    }
  ];

  features = features.map(feature => {
    return (
      <div key={feature.title} className="app-list-card">
        <div>
          <h4>{feature.title}</h4>
          <p>{feature.description}</p>
        </div>
      </div>
    )
  });

  return (
  <Layout>
    <SEO
      title="Tikkun Korim App Online"
      description="Online Tikkun Korim, and an app for iOS and Android"
      />
    <h1>Tikkun Korim תיקון קוראים</h1>
    <div className="jumbotron" >
      <p>Perfect for perfecting proficiency in reading the Torah portion. Choose a Parsha from any Chumash including double Parshiot. Makes practicing much easier.</p>
      <p>The traditional Tikkun Korim places the 'Chumash' text on the right and the 'Torah' text on the left. This project was made with mobile one handed use on small screened devices in mind, that's why we came up with a simple way to get the most out of the small screen, by simply tapping to remove the Trop and Nikkud.</p>
    </div>

    <a className='tikkun-korim-online-cta' href="https://www.sharshi.com/tikkunkorim/" target="_blank">Try The Tikkun Online Here!</a>

    <div className="app-list">
      {features}
    </div>

    <div>
      <p>Perfect for perfecting proficiency in reading the Torah portion. Choose a Parsha from any Chumash including double Parshiot. Makes practicing much easier.</p>
      <p>תיקון קוראים לחמשה חומשי תורה</p>
      <p>INSTRUCTIONS:</p>
      <ol>
        <li>Select a Chumash then a Parsha then an Aliya.</li>
        <li>Tap the text to switch from with Nikkud and Trop/Taamim/Simanim to without. And vice versa.</li>
        <li>Tap the back-button on the top of the screen to go to the previous menu.</li>
        <li>Tap the grid (four squares) to start from the beginning.</li>
        <li>Quickly switch from one Aliya to the next by tapping the arrows on the top left.</li>
      </ol>
      
      <p>Now its easier to practice reading the Torah on the go!</p>
    </div>
    
    { appLinks }

  </Layout>
)}

export default Tikkun
