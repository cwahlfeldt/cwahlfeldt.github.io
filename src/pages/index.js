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
            className={`
               lh-copy avenir w-100 ph3-l order-1
            `}
          >
            <strong><a className="link dim blue f3-ns f4" href="https://www.regency-multifamily.com/communities/" target="_blank">Regency Multifamily Properties</a></strong>
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
               avenir w-100 ph3-l order-0-ns order-1-m order-1 tr-ns
            `}
          >
            <strong><a className="link dim blue f3-ns f4" href="https://www.regency-multifamily.com/" target="_blank">Regency Multifamily</a></strong>
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
               avenir w-100 ph3-l order-1
            `}
          >
            <strong><a className="link dim blue f3-ns f4" href="http://www.livingatvilla.com/" target="_blank">Villa</a></strong>
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
               avenir w-100 ph3-l order-0-ns order-1-m order-1 tr-ns
            `}
          >
            <strong><a className="link dim blue f3-ns f4" href="http://orig-design-iss-6028.pantheonsite.io/" target="_blank">ISS</a></strong>
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
               avenir w-100 ph3-l order-1
            `}
          >
            <strong><span className="f3-ns f4">Queue</span><br /><span className="near-black fw4">Used by Watson's and Blackdog in Champaign IL.</span></strong>
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
               avenir w-100 ph3-l order-0-ns order-1-m order-1 tr-ns
            `}
          >
            <strong><a className="link dim blue f3-ns f4" href="https://www.urbanaillinois.us/" target="_blank">City of Urbana</a></strong>
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
               avenir w-100 ph3-l order-0-ns order-1-m order-1 tr-ns
            `}
          >
            <strong><a className="link dim blue f3-ns f4" href="http://www.blackdogsmoke.com/" target="_blank">Blackdog</a></strong>
          </p>
        </div>
      </div>

      <footer className="flex mt6 justify-center">
        <h3 className="avenir blue f3-ns f4 title tilt">Thanks</h3>
      </footer>


    </div>
  </section>
);

export default IndexPage;
