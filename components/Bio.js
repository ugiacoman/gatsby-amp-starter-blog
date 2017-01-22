import React from 'react'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
        }}
      >
        Written by <strong>{config.authorName}</strong> who lives and works in San Francisco building useful things.
      </p>
    )
  }
}

export default Bio
