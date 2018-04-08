import React from 'react';
import Link from 'gatsby-link';
import { placeholder } from '../common';

const IndexPage = () => (
  <section style={{maxWidth: 1920}} className="work h-100 vw-100">
    <div className="ph3-m ph5-ns ph3 w-100 mb4-ns mt5-ns mt4">
      <h1 className="tl ttu avenir dark-blue f1-ns f2-ns f3-ns f4 mb0 fw6 title tilt">
        Chris
      </h1>
      <h1 className="tl ttu avenir dark-blue f1-ns f2-ns f3-ns f4 pl1 mb0 fw6 title tilt">
        Wahlfeldt
      </h1>
    </div>
    <p
      style={{lineHeight: 1.9, maxWidth: '35rem'}}
      className={`
         avenir w-100 pt4 text mb4-ns mb3 ph4-m ph5-ns ph4
      `}
    >
      Hey, I'm Chris. I'm a web developer with a penchant for design and programming. I take pride in my ability to adapt to any project and feel comfortable working on both the frontend and backend. When I'm not working I'm writing music with my band, hanging out with my family or playing video games.<br /><br />
      Keep scrolling to check out my work. If you are interested in working together, or just want to say hey, drop me a line at <a className="blue dim" href="mailto:chriswahlfeldt@gmail.com">chriswahlfeldt@gmail</a>.
    </p>
    <h5 className="avenir fw4 pb3 ph4 f7"></h5>
    <div className="flex flex-column w-100 ph4-m ph5-ns ph4 ph3 pt2">

      {/* even */}
      <div className="mb3 pb2 item flex flex-row-ns flex-column flex-column-m items-center justify-center">
        <div className="images pr3-ns pl0-ns w-50-ns w-100 w-100-m order-0 mb4 mb0-ns">
          <a href="https://www.adamsvillage.com/" target="_blank" className="link dim"><img src={'/adams.png'} className="fl w-50 mw-50 mb0" /></a>
          <a className="link dim" href="https://www.windsorwest.com/" target="_blank"><img src={'/windsor.png'} className="fl w-50 mw-50 mb0" /></a>
          <a className="link dim" href="https://www.liveatsteeplechaseapartments.com/" target="_blank"><img src={'/steeplchase.png'} className="fl w-50 mw-50 mb0" /></a>
          <a className="link dim" href="https://www.gentrysquareapartments.com/" target="_blank"><img src={'/gentry.png'} className="fl w-50 mw-50 mb0" /></a>
        </div>
        <div className="w-50-ns w-100 w-100-m">
          <p
            style={{lineHeight: 1.9}}
            className={`
               avenir w-100 ph3-l order-1 tl
            `}
          >
            <strong><a className="link dim blue f3-ns f4" href="https://www.regency-multifamily.com/communities/" target="_blank">Regency Multifamily Properties</a></strong>
            <br />
            Approximatley 12 sites and counting. This project allowed me to create a solid foundation for multiple sites to be created and maintained under a common codebase.
          </p>
        </div>
      </div>

      {/* odd */}
      <div className="item flex flex-row-ns flex-column flex-column-m items-center">
        <img src={'/regency-corporate.png'} className="pr3-ns pl0-ns ph3-ns w-50-ns w-100 w-100-m order-1-ns order-0-m order-0" />
        <div className="w-50-ns w-100 w-100-m">
          <p
            style={{lineHeight: 1.9}}
            className={`
               avenir w-100 lh-copy ph3-l order-0-ns order-1-m order-1 tl
            `}
          >
            <strong><a className="link dim blue f3-ns f4" href="https://www.regency-multifamily.com/" target="_blank">Regency Multifamily</a></strong>
            <br />
            This project was completed to showcase what Regency Multifamily has to offer. Its also used as a tool for investors to share information.
          </p>
        </div>
      </div>

      {/* even */}
      <div className="item flex flex-row-ns flex-column flex-column-m items-center">
        <img src={'/villa.png'} className="pr3-ns pl0-ns ph3-ns w-50-ns w-100 w-100-m order-0" />
        <div className="w-50-ns w-100 w-100-m">
          <p
            style={{lineHeight: 1.9}}
            className={`
               avenir w-100 ph3-l order-1 tl
            `}
          >
            <strong><a className="link dim blue f3-ns f4" href="http://www.livingatvilla.com/" target="_blank">Villa</a></strong>
            <br />
            Villa is a new retirement community in my hometown. The site was a reskin of an older Wordpress installation.
          </p>
        </div>
      </div>

      {/* odd */}
      <div className="item flex flex-row-ns flex-column flex-column-m items-center">
        <img src={'/iss.png'} className="pr3-ns pl0-ns ph3-ns w-50-ns w-100 w-100-m order-1-ns order-0-m order-0" />
        <div className="w-50-ns w-100 w-100-m">
          <p
            style={{lineHeight: 1.9}}
            className={`
               avenir w-100 ph3-l order-0-ns order-1-m order-1 tl
            `}
          >
            <strong><a className="link dim blue f3-ns f4" href="http://orig-design-iss-6028.pantheonsite.io/" target="_blank">ISS</a></strong>
            <br />
            This site was created to market and sell highly complex scientific equipment.
          </p>
        </div>
      </div>

      {/* even */}
      <div className="item flex flex-row-ns flex-column flex-column-m items-center">
        <img src={'/queue.png'} className="pr3-ns pl0-ns ph3-ns w-50-ns w-100 w-100-m order-0" />
        <div className="w-50-ns w-100 w-100-m">
          <p
            style={{lineHeight: 1.9}}
            className={`
               avenir w-100 ph3-l order-1 tl
            `}
          >
            <strong><span className="f3-ns f4">Queue</span></strong><br />Used by Watson's and Blackdog in Champaign IL. The project started off as a Meteor application but has since been ported to React Native + Firebase.
          </p>
        </div>
      </div>

      {/* odd */}
      <div className="item flex flex-row-ns flex-column flex-column-m items-center">
        <img src={'/curb.png'} className="pr3-ns pl0-ns ph3-ns w-50-ns w-100 w-100-m order-1-ns order-0-m order-0" />
        <div className="w-50-ns w-100 w-100-m">
          <p
            style={{lineHeight: 1.9}}
            className={`
               avenir w-100 ph3-l order-0-ns order-1-m order-1 tl
            `}
          >
            <strong><a className="link dim blue f3-ns f4" href="https://www.urbanaillinois.us/" target="_blank">City of Urbana</a></strong>
            <br />
            The City of Urbana uses this site as a tool to share and access information regarding the cities political efforts.
          </p>
        </div>
      </div>

      {/* even */}
      <div className="item flex flex-row-ns flex-column flex-column-m items-center">
        <img src={'/ileas.png'} className="pr3-ns pl0-ns ph3-ns w-50-ns w-100 w-100-m order-0" />
        <div className="w-50-ns w-100 w-100-m">
          <p
            style={{lineHeight: 1.9}}
            className={`
               avenir w-100 ph3-l order-1
            `}
          >
            <strong><a className="link dim blue f3-ns f4" href="https://www.ileas.org/" target="_blank">ILEAS</a></strong>
            <br />
            The Illinois Law Enforcement Alarm System need a site to use an internal tool as well as a way to market their special police training courses.
          </p>
        </div>
      </div>

      {/* odd */}
      <div className="item flex flex-row-ns flex-column flex-column-m items-center">
        <img src={'/blackdog.png'} className="pr3-ns pl0-ns ph3-ns w-50-ns w-100 w-100-m order-1-ns order-0-m order-0" />
        <div className="w-50-ns w-100 w-100-m">
          <p
            style={{lineHeight: 1.9}}
            className={`
               avenir w-100 ph3-l order-0-ns order-1-m order-1 tl
            `}
          >
            <strong><a className="link dim blue f3-ns f4" href="http://www.blackdogsmoke.com/" target="_blank">Blackdog</a></strong>
            <br />
            Blackdog is an award winning barbeque resturant in my hometown. This was a pro bono project from along time ago which reminds me that they need a new site!
          </p>
        </div>
      </div>

      <footer className="flex mt6 justify-center items-center flex-column">
        <div className="social-icons flex flex-row">
          <a className="link dim blue f3" target="_blank" href="https://github.com/cwahlfeldt"><i className="icon-social-github"></i></a>
          <a className="link dim blue f3 pl2 ml1 fw7" target="_blank" href="https://www.linkedin.com/in/christopher-wahlfeldt-21479474/"><i className="icon-social-linkedin"></i></a>
        </div>
        <p className="avenir tc fw6 f7 pa3 lh-title">All work shown was either done by me, Mckenzie Wagner, or Adayana Govt Group, and all other business' shown, respectively.</p>
      </footer>

    </div>
  </section>
);

export default IndexPage;
