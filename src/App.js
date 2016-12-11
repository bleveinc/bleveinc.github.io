import React, {Component} from 'react'
import Navigation from './nav'
import About from './about'
import Team from './team'
import Skills from './skills'
import Porfolio from './portf'
import Quotes from './quotes'
import Footer from './footer'

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Navigation items={this.props.data.navItems} />
        <About />
        <Quotes quotes={this.props.data.quotes} />
        <Skills skills={this.props.data.skills} />
        <Porfolio data={this.props.data.portfolio} />
        <Footer />
      </div>
    )
  }
}

export default App
