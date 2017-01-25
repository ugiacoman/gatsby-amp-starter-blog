import React from 'react'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'

class Bio extends React.Component {
  render () {
    return (
      <p>
        <img
          src={prefixLink('/static/img/profile-pic.jpg')}
          alt={`author ${config.authorName}`}
          width="46"
          height="46"
        />
        Written by <strong>{config.authorName}</strong> who lives and works in San Francisco building useful things. <a href="https://twitter.com/kylemathews">You should follow him on Twitter</a>
      </p>
    )
  }
}

export default Bio
