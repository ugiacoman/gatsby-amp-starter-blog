import React from 'react'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'

class Bio extends React.Component {
  render () {
    return (
      <div>
        <h3>
          Web + iOS
        </h3>
        <p>
          <strong>{config.authorName}</strong>. who lives and works in San Francisco building useful things. <a href="https://twitter.com/kylemathews">You should follow him on Twitter</a>
        </p>
      </div>
    )
  }
}

export default Bio
