import React from 'react'

class Skills extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: 0,
    }
  }

  createSkillItem(skill, index) {
    return (
      <div
        key={index}
        className={
          'one-fourth column service' +
          (this.state.hoveringIndex === index ? ' selected' : '')
        }
        onMouseOver={this._handleHover.bind(this, index)}
        onMouseOut={this._handleHover.bind(this, index)}>
        <div className="inner">
          <div className="icon">
            <img
              src={require(`images/services/${skill.image}`)}
              role="presentation"
            />
          </div>
          <h3>{skill.skill}</h3>
          <p>{skill.description}</p>
        </div>
      </div>
    )
  }

  _handleHover = (index, e) => {
    this.setState({hoveringIndex: e.type === 'mouseover' ? index : null})
  }

  render() {
    return (
      <section id="services" className="offset section">
        <div className="innerContent ">
          <div className="container clearfix">
            <div className="sixteen columns">
              <h1 className="title">What We Do</h1>
            </div>
            {this.props.skills.map((skill, index) => {
              return this.createSkillItem(skill, index)
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default Skills
