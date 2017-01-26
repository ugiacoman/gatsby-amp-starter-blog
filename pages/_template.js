import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

class Template extends React.Component {
  render () {
    const { location, children } = this.props
    let header
    if (location.pathname === prefixLink('/')) {
      header = (
        <h1>
          <Link
            to={prefixLink('/')}
          >
            {config.blogTitle}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link
            to={prefixLink('/')}
          >
            {config.blogTitle}
          </Link>
        </h3>
      )
    }
    return (
      <div
      >
      <div className='logo'>
          <Link to={prefixLink('/')}>udiscover.me </Link>
            ( 
              <a href='//github.com/ugiacoman/ugiacoman.github.io'>src</a>
            ) 
      </div>              
        {header}
        {children}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
