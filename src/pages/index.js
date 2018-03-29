import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <section className={`flex flex-column justify-center items-center vh-100 vw-100`}>
    <h1 className="ttu tracked avenir near-black f3 f2-m f1-ns mb0 pa3 fw6">
      Chris <span className="last-name ba bw2 pa3 b--black-80 black fw3">Wahlfeldt</span>
    </h1>
    <p
      style={{lineHeight: 1.9, maxWidth: '35rem'}}
      className={`
         avenir w-100 ph4 ph5-ns mt4 pt2
      `}
    >
      Hi, I'm Chris. I'm a web developer with a penchant for design. I take pride in my ability to adapt to any project and feel comfortable working on both the frontend and backend. When I'm not working I'm writing music with my band, hanging out with my family or playing video games.<br /><br />
      Heres some <Link to="/work" className="green dim">projects</Link> I've worked on. If you are interested in working together, or just want to say hey, drop me a line at <a className="dim green" href="mailto:chriswahlfeldt@gmail.com">chriswahlfeldt@gmail</a>.
    </p>
  </section>
);

export default IndexPage;
