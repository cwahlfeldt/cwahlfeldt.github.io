import React from 'react';
import Link from 'gatsby-link';
import { placeholder } from '../common';

const Work = () => (
  <section style={{maxWidth: 1920}} className="work h-100 vw-100">
    <div className="ph3 w-100 mb4-ns mt5-ns mt4">
      <h1 className="tl ttu avenir white f1-ns f2-ns f3 mb0 fw6 title tilt">
        Chris
      </h1>
      <h1 className="tl ttu avenir white f1-ns f2-ns f3 pl1 mb0 fw6 title tilt">
        Wahlfeldt
      </h1>
    </div>
    <p
      style={{lineHeight: 1.9, maxWidth: '35rem'}}
      className={`
         avenir w-100 pt4 text ph4 mb4-ns mb3
      `}
    >
      Hi, I'm Chris. I'm a web developer with a penchant for design. I take pride in my ability to adapt to any project and feel comfortable working on both the frontend and backend. When I'm not working I'm writing music with my band, hanging out with my family or playing video games.<br /><br />
      Keep scrolling to check out my work. If you are interested in working together, or just want to say hey, drop me a line at <a className="dim green" href="mailto:chriswahlfeldt@gmail.com">chriswahlfeldt@gmail</a>.
    </p>
    <h5 className="avenir fw4 pb3 ph4 f7"></h5>
    <div className="flex flex-column w-100 ph4-ns ph3 pt2">

      {/* even */}
      <div className="mb3 pb2 item flex flex-row-ns flex-column flex-column-m items-center justify-center">
        <div className="images pr3-ns pl0-ns ph3 w-50-ns w-100 w-100-m order-0">
          <img src={'/adams.png'} className="fl w-50 mw-50 mb0" />
          <img src={'/windsor.png'} className="fl w-50 mw-50 mb0" />
          <img src={'/steeplchase.png'} className="fl w-50 mw-50 mb0" />
          <img src={'/gentry.png'} className="fl w-50 mw-50 mb0" />
        </div>
        <div className="w-50-ns w-100 w-100-m">
          <p
            className={`
               lh-copy avenir w-100 ph5-l order-1 pt5-ns
            `}
          >
            <strong><Link className="dim gold  f2-ns f3">Regency Multifamily<br />Properties</Link></strong>
          </p>
        </div>
      </div>

      {/* odd */}
      <div className="item flex flex-row-ns flex-column flex-column-m items-center">
        <img src={'/iss.png'} className="pr3-ns pl0-ns ph3 w-50-ns w-100 w-100-m order-1-ns order-0-m order-0" />
        <div className="w-50-ns w-100 w-100-m">
          <p
            style={{lineHeight: 1.9}}
            className={`
               avenir w-100 ph5-l order-0-ns order-1-m order-1 tr-ns
            `}
          >
            <strong><Link className="dim gold  f2-ns f3">ISS</Link></strong>
          </p>
        </div>
      </div>

      {/* even */}
      <div className="item flex flex-row-ns flex-column flex-column-m items-center">
        <img src={'/villa.png'} className="pr3-ns pl0-ns ph3 w-50-ns w-100 w-100-m order-0" />
        <div className="w-50-ns w-100 w-100-m">
          <p
            style={{lineHeight: 1.9}}
            className={`
               avenir w-100 ph5-l order-1
            `}
          >
            <strong><Link className="dim gold  f2-ns f3">Villa</Link></strong>
          </p>
        </div>
      </div>

      {/* odd */}
      <div className="item flex flex-row-ns flex-column flex-column-m items-center">
        <img src={'/regency-corporate.png'} className="pr3-ns pl0-ns ph3 w-50-ns w-100 w-100-m order-1-ns order-0-m order-0" />
        <div className="w-50-ns w-100 w-100-m">
          <p
            style={{lineHeight: 1.9}}
            className={`
               avenir w-100 ph5-l order-0-ns order-1-m order-1 tr-ns
            `}
          >
            <strong><Link className="dim gold  tr-ns f2-ns f3">Regency Multifamily</Link></strong>
          </p>
        </div>
      </div>


      {/* even */}
      <div className="item flex flex-row-ns flex-column flex-column-m items-center">
        <img src={'/queue.png'} className="pr3-ns pl0-ns ph3 w-50-ns w-100 w-100-m order-0" />
        <div className="w-50-ns w-100 w-100-m">
          <p
            style={{lineHeight: 1.9}}
            className={`
               avenir w-100 ph5-l order-1
            `}
          >
            <strong><Link className="dim gold  f2-ns f3">Queue</Link></strong>
          </p>
        </div>
      </div>

      {/* odd */}
      <div className="item flex flex-row-ns flex-column flex-column-m items-center">
        <img src={'/curb.png'} className="pr3-ns pl0-ns ph3 w-50-ns w-100 w-100-m order-1-ns order-0-m order-0" />
        <div className="w-50-ns w-100 w-100-m">
          <p
            style={{lineHeight: 1.9}}
            className={`
               avenir w-100 ph5-l order-0-ns order-1-m order-1 tr-ns
            `}
          >
            <strong><Link className="dim gold f2-ns f3">City of Urbana</Link></strong>
          </p>
        </div>
      </div>


      {/* even */}
      <div className="item flex flex-row-ns flex-column flex-column-m items-center">
        <img src={'/ileas.png'} className="pr3-ns pl0-ns ph3 w-50-ns w-100 w-100-m order-0" />
        <div className="w-50-ns w-100 w-100-m">
          <p
            style={{lineHeight: 1.9}}
            className={`
               avenir w-100 ph5-l order-1
            `}
          >
            <strong><Link className="dim gold f2-ns f3 ">ILEAS</Link></strong>
          </p>
        </div>
      </div>

      {/* odd */}
      <div className="item flex flex-row-ns flex-column flex-column-m items-center">
        <img src={'/blackdog.png'} className="pr3-ns pl0-ns ph3 w-50-ns w-100 w-100-m order-1-ns order-0-m order-0" />
        <div className="w-50-ns w-100 w-100-m">
          <p
            style={{lineHeight: 1.9}}
            className={`
               avenir w-100 ph5-l order-0-ns order-1-m order-1 tr-ns
            `}
          >
            <strong><Link className="dim gold f2-ns f3">Blackdog</Link></strong>
          </p>
        </div>
      </div>

      <footer className="flex mt6 justify-center ttu">
        <h3 className="avenir near-black f2-ns f3">Thanks</h3>
      </footer>


    </div>
  </section>
);

export default Work;
