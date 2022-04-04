import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SiddurIcon from "../images/siddur-icon.png";

const Siddur = () => {
  return (
    <Layout>
      <SEO title="Siddur" />
      <div>
        <h2> Siddur Torah Ohr, Chabad</h2><br />
        <Link to="/siddur-support">Support and Feedback</Link>
        <a href="https://geo.itunes.apple.com/us/app/siddur-nusach-chabad/id1065612931?mt=8&amp;at=1010laVi" className="siddur-app-store"></a>
        <img alt="siddur icon" height="200px" src={SiddurIcon} />
        <br />
        <p>
          Siddur Torah Ohr, Chabad, only displays the text that you need to Daven now.<br />Features:
      </p>
        <ul>
          <li>Kidush Levana.</li>
          <li>Now includes a new way of displaying Me’ein Shalosh</li>
          <li>Knows which Tefilah you'll need at any given time by tapping "Daven" using 3d Touch from the home screen or from the widget in the "today" view</li>
          <li>The daily Tehilim is after Al Tira in Shacharis</li>
          <li>Displays the relevant Kriah for every Holiday - Rosh Chodesh, Chol Hamoed, Fastday etc.</li>
          <li>Only will display whats needed (i.e. Morid Hatal, Tefilin for men etc.)</li>
          <li>Inserts special paragraphs (i.e. Yaaleh Veyavo, Hallel, etc.) at the correct place, and inserts special Tefilos for different times of year (i.e. Aseres Yemei Teshuva, Chol Hamoed, etc)</li>
        </ul>
      </div>
    </Layout>
  )
}

export default Siddur;
