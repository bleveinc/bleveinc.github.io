import React from 'react'

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="offset section works">
        <div className="innerContent">
          <div className="container clearfix">
            <div className="sixteen columns">
              <h1 className="title">What We have Done</h1>
            </div>
          </div>
        </div>
        <div className="innerContent">
          <div className="container clearfix">
            <div className="container clearfix">
              {this.props.data.map((project, index) => {
                return <Item key={index} data={project} />
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayClass: '',
    }
  }

  _handleHover = e => {
    this.setState({displayClass: e.type === 'mouseover' ? 'selected' : ''})
  }

  render() {
    return (
      <div className="one-third column work">
        <div
          className={'info ' + this.state.displayClass}
          onMouseOver={this._handleHover}
          onMouseOut={this._handleHover}>
          <div className="inner">
            <h3 className="inStore">{this.props.data.name}</h3>
            <p className="subtitle">{this.props.data.subtitle}</p>
            <p className="hiddentext">{this.props.data.description}</p>
          </div>
          <div className="appStore">
            {!this.props.data.appstore ? null : (
              <a href={this.props.data.appstore}>
                <img src="images/appstore.png" role="presentation" />
              </a>
            )}
            {!this.props.data.googleplay ? null : (
              <a href={this.props.data.appstore}>
                <img src="images/googleplay.png" role="presentation" />
              </a>
            )}
          </div>
        </div>
        <img
          src={require(`images/work/thumbs/${this.props.data.image}`)}
          role="presentation"
        />
      </div>
    )
  }
}

export default Portfolio
