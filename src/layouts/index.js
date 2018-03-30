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
