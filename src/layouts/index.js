import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Nav from '../components/Nav'
import '../common';
import './index.css'

const TemplateWrapper = ({ children }) => (
  <main>
    <Helmet
      title="Chris Wahlfeldt"
      meta={[
        { name: 'description', content: 'Chris Wahlfeldts Personal Website' },
        { name: 'keywords', content: 'web, development, web development, HTML, CSS, Javascript, html, css, javascript, design, web design' },
      ]}
    />
    <section className={``}>
      { children() }
    </section>
  </main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
