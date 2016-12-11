import React from 'react'
import './fonts/foundation-icons/foundation-icons.css'

class Footer extends React.Component {
  render() {
    return (
      <section id="contact" className="section contact">
        <div className="overlay offset contact-info">
          <div className="innerContent">
            <div className="container clearfix">
              <div className="sixteen columns">
                <h1 className="title">Get In Touch</h1>
                <p>BLeve, Inc.</p>
                <p>
                  email:{' '}
                  <a style={{color: '#B3862F'}} href={'mailto:info@bleve.io'}>
                    {'info@bleve.io'}
                  </a>
                </p>
                <p>phone: (949) 424-6719</p>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="footer">
            <div className="container clearfix">
              <div className="one-third column">
                <div className="footer-logo" />
              </div>
              <div className="two-thirds column">
                <div className="right social">
                  <ul>
                    <li className="google">
                      <a href="https://plus.google.com/+BLeveInc/posts">
                        <i className="step fi-social-google-plus size-24" />
                      </a>
                    </li>
                    <li className="twitter">
                      <a href="https://twitter.com/bleveinc">
                        <i className="step fi-social-twitter size-24" />
                      </a>
                    </li>
                    <li className="github">
                      <a href="https://github.com/bleveinc/">
                        <i className="step fi-social-github size-24" />
                      </a>
                    </li>
                    <li className="medium">
                      <a href="https://medium.com/@bleveinc">
                        <i className="step fi-social-medium size-24" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    )
  }
}

export default Footer
