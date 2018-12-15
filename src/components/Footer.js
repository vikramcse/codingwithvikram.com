import React from 'react'

import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
          >rss</a>
        </div>
        <a
          href="https://mobile.twitter.com/vikramcse10"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a> &bull;{' '}
        <a
          href="https://github.com/vikramcse"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a> &bull;{' '}
        <a
          href="https://www.linkedin.com/in/vikram-jadhav-28394439"
          target="_blank"
          rel="noopener noreferrer"
        >
          linked in
        </a> &bull;{' '}
      </footer>
    )
  }
}

export default Footer
