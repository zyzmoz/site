import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Slides from '../components/slides'
import SEO from "../components/seo"
import '../components/layout.css'
import webapps from '../images/webapps.svg';
import mobile from '../images/mobile.svg';
import apis from '../images/apis.svg';
import website from '../images/website.svg';



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content">
      <div className="slogan">
        <h1>
          Transform your <b className="text green">Idea</b> into a <b className="text red">Product</b>!
            </h1>
        <h3>
          Web Apps, Mobile Apps, APIs, and Websites.
            </h3>
      </div>

      <Slides />

      <div className="grid">
        <div className="item">
          {/* <Image alt="Gatsby in Space" filename={webapps} /> */}
          <img src={webapps} alt="webapps" />
          <div className="description">
            <h1>Web Apps</h1>
            Creating your web app allows you to keep your job organized and take decisions quickly. Elvn helps you creating dashboards and smart solutions to get your job done as efficiently as possible with a creative approach aligned to your company.
          </div>
        </div>
        <div className="item reverse">
          <img src={mobile} alt="mobile" />
          <div className="description">
            <h1>Mobile Apps</h1>
            Get connected and increase your opportunities getting your personalized mobile app published to Android and iOS. We are specialized in social media and niche apps such as courier systems, point of sale, and salesforce.
          </div>
        </div>
        <div className="item">
          <img src={apis} alt="apis" />
          <div className="description">
            <h1>APIs</h1>
            We develop server solutions to integrate your software with web, mobile, and platform applications. Moreover, we integrate payment, geolocation, databases, and much more to your existing API. Maintainance and updates are also included in our portfolio.
          </div>
        </div>
        <div className="item reverse">
          <img style={{ border: '1px solid #d6d6d6', background: '#fefefe' }} src={website} alt="website" />
          <div className="description">
            <h1>Websites</h1>
            Increase your views and advertise your product by creating your website. Elvn offers creative solutions and ideas to grow your presence through the internet.
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
