import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <section className={`ph3 tl flex flex-column items-center justify-center center vh-100 vw-100`}>
    <div>
      <h1 className="tl ttu tracked avenir white f1-ns f2 mb0 fw6 title tilt">
        Chris
      </h1>
      <h1 className="tl ttu tracked avenir white f1-ns f2 pl1 mb0 fw6 title tilt">
        Wahlfeldt
      </h1>
    </div>
    <p
      style={{lineHeight: 1.9, maxWidth: '35rem'}}
      className={`
         avenir w-100 pt4 text
      `}
    >
      Hi, I'm Chris. I'm a web developer with a penchant for design. I take pride in my ability to adapt to any project and feel comfortable working on both the frontend and backend. When I'm not working I'm writing music with my band, hanging out with my family or playing video games.<br /><br />
      Heres some <Link to="/work" className="green dim">projects</Link> I've worked on. If you are interested in working together, or just want to say hey, drop me a line at <a className="dim green" href="mailto:chriswahlfeldt@gmail.com">chriswahlfeldt@gmail</a>.
    </p>
  </section>
);

export default IndexPage;
