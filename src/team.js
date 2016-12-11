import React from 'react'

class Team extends React.Component {
  render() {
    return (
      <section id="team" className="offset section team">
        <div id="teamSeaction" className="innerContent">
          <div className="clearfix">
            {this.props.teamMembers.map((member, index) => {
              return (
                <Member
                  key={index}
                  name={member.name}
                  photo={member.photo}
                  position={member.position}
                  description={member.description}
                />
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

class Member extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hovering: false,
    }
  }

  _handleHover = e => {
    this.setState({hovering: e.type === 'mouseover'})
  }

  render() {
    return (
      <div
        className="team"
        onMouseOver={this._handleHover}
        onMouseOut={this._handleHover}
        style={{opacity: this.state.hovering ? 0.5 : 1}}>
        <img
          src={'images/team/' + this.props.photo.toLowerCase()}
          role="presentation"
        />
        <h2>
          {this.props.name}
          <br />
          <span>{this.props.position}</span>
        </h2>
        <p className="text">{this.props.description}</p>
      </div>
    )
  }
}

export default Team
