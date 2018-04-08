import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Nav from '../components/Nav'
import '../common';
import './index.css'

const TemplateWrapper = ({ children }) => (
  <main>
    <Helmet>
      <title>🤘</title>
      <link rel="stylesheet" href="https://use.typekit.net/ksq0sev.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css" />
      <script src="https://unpkg.com/scrollreveal/dist/scrollreveal.min.js"></script>
      <script src="/dom.js"></script>
    </Helmet>
    <section className={``}>
      { children() }
    </section>
  </main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
