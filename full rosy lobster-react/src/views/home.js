import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Full Rosy Lobster</title>
        <meta property="og:title" content="Full Rosy Lobster" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100 thq-body-small">
              Get in touch with our team
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Main Action</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102 thq-link thq-body-small">
              #features
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103 thq-body-large">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104 thq-link thq-body-small">#</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105 thq-body-large">Contact Us</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106 thq-body-large">Features</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107 thq-link thq-body-small">
              #contact
            </span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108 thq-body-small">
              Learn more about our platform
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109 thq-body-small">
              Discover the functionalities of our platform
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110 thq-link thq-body-small">
              #integration
            </span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111 thq-body-large">Integration</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112 thq-body-small">
              Explore how we integrate WhatsApp with CRM/ERP systems
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Secondary Action</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114 thq-body-small">
              Secondary action
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115 thq-body-small">Main action</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116 thq-heading-1">
              Streamline Your Operations with WhatsApp Integration
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117 thq-body-large">
              Integrate WhatsApp with your CRM/ERP systems to simplify your
              business operations. Our platform offers customizable WhatsApp
              Forms to replace complex chatbots, making communication with your
              customers more efficient.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118 thq-body-small">
              Seamless integration with CRM/ERP systems
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119 thq-heading-2">
              Integration with CRM/ERP
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120 thq-body-small">
              Streamline operations
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121 thq-heading-2">
              WhatsApp Integration
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122 thq-body-small">
              Create custom forms for WhatsApp
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123 thq-heading-2">
              Operational Efficiency
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124 thq-heading-2">
              Ready to streamline your operations with WhatsApp Forms?
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125 thq-body-large">
              Contact us today to learn more about how our platform can
              integrate WhatsApp with your CRM/ERP system.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Get in touch</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127 thq-body-small">
              Streamline your business operations by eliminating the need for
              complex chatbots.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128 thq-body-small">
              Create tailored forms that fit your business needs and collect
              data efficiently.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129 thq-heading-2">
              Seamless Integration with CRM/ERP Systems
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130 thq-heading-2">
              Customizable WhatsApp Forms
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131 thq-body-small">
              Integrate WhatsApp seamlessly with your CRM/ERP systems for
              streamlined operations.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132 thq-heading-2">
              Simplified Operations
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133 thq-heading-3">$199/month</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134 thq-body-small">Get Started</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136 thq-body-small">Get Started</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139 thq-body-small">
              Integration with CRM/ERP systems
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143 thq-body-small">
              Advanced analytics
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146 thq-body-large">Save 20%</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147 thq-body-small">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148 thq-body-small">Get Started</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149 thq-body-small">
              All features from Plan 2
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150 thq-body-small">
              Priority support
            </span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151 thq-heading-3">$490/year</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154 thq-body-small">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155 thq-body-small">
              Dedicated account manager
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156 thq-body-small">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157 thq-body-small">
              All features from Plan 1
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158 thq-heading-2">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165 thq-body-large">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166 thq-heading-3">$99/month</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167 thq-body-large">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170 thq-body-large">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171 thq-heading-3">$990/year</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172 thq-body-large">Save 20%</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174 thq-heading-3">$1990/year</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176 thq-body-small">
              Streamline operations
            </span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177 thq-body-large">Save 20%</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178 thq-body-small">
              Customizable WhatsApp Forms
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179 thq-body-small">
              Custom API integration
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text183 thq-body-small">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text184 thq-heading-3">$49/month</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text185 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text186 thq-body-small">
              Integrate your WhatsApp Business account with our platform.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text187 thq-body-small">
              Automate data collection and streamline operations by using
              WhatsApp Forms.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text188 thq-heading-2">
              Create Custom Forms
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189 thq-body-small">
              Design and customize WhatsApp Forms according to your business
              needs.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text190 thq-heading-2">Connect WhatsApp</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text191 thq-heading-2">
              Streamline Operations
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text192 thq-body-small">
              Improve customer engagement and satisfaction through personalized
              interactions.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text193 thq-heading-2">
              Enhance Customer Engagement
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text194 thq-body-small">
              Marketing Manager, XYZ Corp.
            </span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text195 thq-body-small">CEO, ABC Inc.</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text196 thq-body-large">John Doe</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text197 thq-body-large">Michael Johnson</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text198 thq-body-small">
              I highly recommend this platform to any business looking to
              streamline their operations. The customizable WhatsApp Forms have
              been a game-changer for us.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199 thq-body-large">Jane Smith</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text200 thq-body-small">
              Head of Sales, Acme Co.
            </span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201 thq-body-large">Sarah Lee</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text202 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text203 thq-body-small">
              COO, 123 Company
            </span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text204 thq-body-small">
              This platform has revolutionized the way we interact with our
              customers. The integration with WhatsApp has made our processes
              more efficient and our team more productive.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text205 thq-heading-2">
              Client Testimonials
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text206 thq-body-small">
              Our customer engagement has significantly improved since
              implementing this platform. The ease of use and seamless
              integration with our CRM system have been invaluable.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text207 thq-body-small">
              We saw immediate results after adopting this platform. Our sales
              team can now easily track customer interactions and follow up
              effectively, thanks to the WhatsApp integration.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208 thq-body-large">
              Have questions or want to learn more about our WhatsApp
              integration platform? Reach out to us through the contact
              information below.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text209 thq-body-large">
              Visit us at our main office location.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text210 thq-heading-2">Contact Us</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211 thq-body-large">
              Give us a call during our business hours.
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text212 thq-heading-3">
              123 Main Street, City, Country
            </span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text213 thq-heading-3">+123-456-7890</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text214 thq-body-small">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text215 thq-body-small">Pricing</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text216 thq-body-small">Home</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217 thq-body-small">
              Terms and Conditions
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text218 thq-body-small">Features</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text219 thq-body-small">Contact Us</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
